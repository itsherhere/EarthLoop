

import { createClient } from '@supabase/supabase-js';
import { parse } from 'csv-parse/sync';
import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
// import { supabase } from "@/lib/supabaseClient";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)




// Initialize Supabase client (server-side, safe to use service key if needed)
// const supabaseUrl = process.env.SUPABASE_URL!;
// const supabaseKey = process.env.SUPABASE_ANON_KEY!; // Or service key for full access
// const supabase = createClient(supabaseUrl, supabaseKey);

const TABLE_NAME = 'test';
const EXPECTED_HEADERS = ['category', 'unit', 'factor', 'source'];

// Helper: Validate auth if required (e.g., via Bearer token) – disabled for now
async function getUser(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return null;
  const token = authHeader.split(' ')[1];
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) return null;
  return user;
}

// Helper: Validate and parse records (for insert/update)
function validateAndParseRecords(records: Record<string, any> | Record<string, any>[]): Record<string, any>[] {
  const recs = Array.isArray(records) ? records : [records];
  return recs.map(record => {
    if (!('id' in record)) {
      throw new Error('ID required for updates');
    }
    if ('factor' in record) {
      record.factor = Number(record.factor);
      if (isNaN(record.factor)) throw new Error('Invalid factor: Must be an integer');
    }
    return record;
  });
}

// GET: Fetch all, selective (multiple), or single by ID
export async function GET(req: NextRequest) {
  // const user = await getUser(req); // Disabled

  const { searchParams } = new URL(req.url);
  let query = supabase.from(TABLE_NAME).select('*');

  // Flag for single ID query
  let isSingleIdQuery = false;
  if (searchParams.size === 1 && searchParams.has('id') && searchParams.get('id')?.startsWith('eq.')) {
    isSingleIdQuery = true;
    const idValue = searchParams.get('id')?.split('eq.')[1];
    query = query.eq('id', idValue);
  } else {
    // Apply filters for multiple rows
    for (const [key, value] of searchParams.entries()) {
      if (key === 'limit') {
        query = query.limit(Number(value));
      } else if (key === 'offset') {
        query = query.offset(Number(value));
      } else if (key === 'order') {
        const [column, dir] = value.split('.');
        query = query.order(column, { ascending: dir !== 'desc' });
      } else {
        const [column, operator] = key.split('.');
        if (operator) {
          // @ts-expect-error: Dynamic operator
          query = query[operator](column, value);
        } else {
          query = query.eq(key, value);
        }
      }
    }
  }

  try {
    let data, error;
    if (isSingleIdQuery) {
      ({ data, error } = await query.single()); // Single object
      if (error) throw error;
      if (!data) return NextResponse.json({ error: 'Row not found' }, { status: 404 });
    } else {
      ({ data, error } = await query); // Array for multiple/all
      if (error) throw error;
    }
    return NextResponse.json(data);
  } catch (err) {
    console.error('Supabase GET error:', err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

// POST: Upload CSV/Excel (batch) or manual JSON (single/batch insert)
export async function POST(req: NextRequest) {
  // const user = await getUser(req); // Disabled

  const contentType = req.headers.get('content-type') || '';

  if (contentType.includes('multipart/form-data')) {
    // File upload (batch insert) – same as before
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });

    const buffer = await file.arrayBuffer();
    const fileType = file.type;
    let records: Record<string, any>[] = [];

    try {
      if (fileType === 'text/csv') {
        const text = new TextDecoder().decode(buffer);
        records = parse(text, { columns: true, skip_empty_lines: true });
      } else if (fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        const workbook = XLSX.read(buffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false }) as any[][];
        const headers = jsonData.shift() as string[];
        if (!headers.every((h, i) => h === EXPECTED_HEADERS[i])) {
          throw new Error('Mismatched headers in Excel');
        }
        records = jsonData.map(row => headers.reduce((obj, header, i) => {
          obj[header] = row[i];
          return obj;
        }, {} as Record<string, any>));
      } else {
        return NextResponse.json({ error: 'Unsupported file type (use CSV or XLSX)' }, { status: 400 });
      }

      if (records.length === 0) return NextResponse.json({ error: 'Empty file' }, { status: 400 });

      // Validate and parse (no ID needed for insert)
      records.forEach(record => {
        if (!EXPECTED_HEADERS.every(header => header in record)) {
          throw new Error('Mismatched columns: Expected category, unit, factor, source');
        }
        record.factor = Number(record.factor);
        if (isNaN(record.factor)) throw new Error('Invalid factor: Must be an integer');
      });

      const { error } = await supabase.from(TABLE_NAME).insert(records);
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });

      return NextResponse.json({ success: true, inserted: records.length });
    } catch (err) {
      return NextResponse.json({ error: (err as Error).message }, { status: 500 });
    }
  } else if (contentType.includes('application/json')) {
    // Manual insert (single or batch via array)
    try {
      const body = await req.json();
      const records = Array.isArray(body) ? body : [body];

      // Validate
      records.forEach(record => {
        if (!EXPECTED_HEADERS.every(header => header in record)) {
          throw new Error('Invalid data: Must provide category (string), unit (string), factor (integer), source (string)');
        }
        record.factor = Number(record.factor);
        if (isNaN(record.factor)) throw new Error('Invalid factor: Must be an integer');
      });

      const { error } = await supabase.from(TABLE_NAME).insert(records);
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });

      return NextResponse.json({ success: true, inserted: records.length });
    } catch (err) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }
  } else {
    return NextResponse.json({ error: 'Unsupported content type' }, { status: 400 });
  }
}

// // PUT: Update single or multiple rows (edit data)
// export async function PUT(req: NextRequest) {
//   // const user = await getUser(req); // Disabled

//   try {
//     const body = await req.json();
//     const records = validateAndParseRecords(body); // Handles single object or array
//     // Batch update (Supabase supports upsert-like, but we use loop for individual updates)
//     let updatedCount = 0;
//     for (const record of records) {
//       const { id, ...updates } = record; // Extract id, rest are fields to update
//       if (Object.keys(updates).length === 0) {
//         throw new Error('No fields to update');
//       }
//       const { error, count } = await supabase
//         .from(TABLE_NAME)
//         .update(updates)
//         .eq('id', id);
//       if (error) throw error;
//       updatedCount += count || 0;
//     }

//     if (updatedCount === 0) return NextResponse.json({ error: 'No rows updated (check IDs)' }, { status: 404 });

//     return NextResponse.json({ success: true, updated: updatedCount });
//   } catch (err) {
//     console.error('Supabase PUT error:', err);
//     return NextResponse.json({ error: (err as Error).message }, { status: 500 });
//   }
// }
// PUT: Update a single row (or multiple)
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const records = Array.isArray(body) ? body : [body];

    // Validate each record
    for (const record of records) {
      if (!record.id) {
        throw new Error('Each record must include an id');
      }
      if ('factor' in record) {
        record.factor = Number(record.factor);
        if (isNaN(record.factor)) throw new Error('Invalid factor: Must be a number');
      }
    }

    // If single record → simple update
    if (records.length === 1) {
      const { id, ...updates } = records[0];
      if (Object.keys(updates).length === 0) {
        throw new Error('No fields provided to update');
      }

      const { data, error } = await supabase
        .from(TABLE_NAME)
        .update(updates)
        .eq('id', id)
        .select('*')   // return updated row
        .single();

      if (error) throw error;
      if (!data) return NextResponse.json({ error: 'Row not found' }, { status: 404 });

      return NextResponse.json({ success: true, updated: data });
    }

    // If multiple → batch update
    const updatedRows: any[] = [];
    for (const record of records) {
      const { id, ...updates } = record;
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .update(updates)
        .eq('id', id)
        .select('*');
      if (error) throw error;
      if (data && data.length > 0) updatedRows.push(data[0]);
    }

    return NextResponse.json({ success: true, updated: updatedRows });
  } catch (err) {
    console.error('Supabase PUT error:', err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}


// DELETE: Delete one or multiple rows (selective)
export async function DELETE(req: NextRequest) {
  // const user = await getUser(req); // Disabled

  const { searchParams } = new URL(req.url);
  let query = supabase.from(TABLE_NAME).delete();

  // Apply filters (one or multiple)
  for (const [key, value] of searchParams.entries()) {
    const [column, operator] = key.split('.');
    if (operator) {
      // @ts-expect-error: Dynamic operator
      query = query[operator](column, value);
    } else {
      query = query.eq(key, value);
    }
  }

  // Safeguard: Require filters
  if (searchParams.size === 0) {
    return NextResponse.json({ error: 'Filters required for DELETE' }, { status: 400 });
  }

  const { error, count } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true, deleted: count });
}