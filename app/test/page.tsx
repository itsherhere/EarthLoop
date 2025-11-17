'use client';

import { useEffect, useState } from 'react';

type Row = {
  id: number;
  category: string;
  unit: string;
  factor: number;
  source: string;
};

export default function TestTablePage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<Row>>({});

  // Fetch all data
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/test');
      const data = await res.json();
      if (Array.isArray(data)) {
        setRows(data);
      } else {
        console.error('Unexpected response:', data);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Save updated row
  const handleSave = async (id: number) => {
    try {
      const res = await fetch('/api/test', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...editData }),
      });
      const result = await res.json();

      if (res.ok) {
        alert('✅ Row updated!');
        setEditingId(null);
        setEditData({});
        await fetchData();
      } else {
        alert(`❌ Error: ${result.error}`);
      }
    } catch (err) {
      console.error('PUT error:', err);
    }
  };

  // Delete a row
  const handleDelete = async (id: number) => {
    if (!confirm('Delete this row?')) return;
    try {
      const res = await fetch(`/api/test?id=eq.${id}`, { method: 'DELETE' });
      const result = await res.json();

      if (res.ok) {
        alert('🗑️ Row deleted');
        await fetchData();
      } else {
        alert(`❌ Error: ${result.error}`);
      }
    } catch (err) {
      console.error('DELETE error:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Test Table Editor</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Unit</th>
              <th className="border p-2">Factor</th>
              <th className="border p-2">Source</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="text-center">
                <td className="border p-2">{row.id}</td>

                {/* Category */}
                <td className="border p-2">
                  {editingId === row.id ? (
                    <input
                      className="border p-1 w-full"
                      defaultValue={row.category}
                      onChange={(e) =>
                        setEditData((d) => ({ ...d, category: e.target.value }))
                      }
                    />
                  ) : (
                    row.category
                  )}
                </td>

                {/* Unit */}
                <td className="border p-2">
                  {editingId === row.id ? (
                    <input
                      className="border p-1 w-full"
                      defaultValue={row.unit}
                      onChange={(e) =>
                        setEditData((d) => ({ ...d, unit: e.target.value }))
                      }
                    />
                  ) : (
                    row.unit
                  )}
                </td>

                {/* Factor */}
                <td className="border p-2">
                  {editingId === row.id ? (
                    <input
                      type="number"
                      className="border p-1 w-full"
                      defaultValue={row.factor}
                      onChange={(e) =>
                        setEditData((d) => ({
                          ...d,
                          factor: Number(e.target.value),
                        }))
                      }
                    />
                  ) : (
                    row.factor
                  )}
                </td>

                {/* Source */}
                <td className="border p-2">
                  {editingId === row.id ? (
                    <input
                      className="border p-1 w-full"
                      defaultValue={row.source}
                      onChange={(e) =>
                        setEditData((d) => ({ ...d, source: e.target.value }))
                      }
                    />
                  ) : (
                    row.source
                  )}
                </td>

                {/* Actions */}
                <td className="border p-2">
                  {editingId === row.id ? (
                    <>
                      <button
                        className="px-2 py-1 bg-green-500 text-white rounded mr-2"
                        onClick={() => handleSave(row.id)}
                      >
                        Save
                      </button>
                      <button
                        className="px-2 py-1 bg-gray-400 text-white rounded"
                        onClick={() => {
                          setEditingId(null);
                          setEditData({});
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
                        onClick={() => {
                          setEditingId(row.id);
                          setEditData(row);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="px-2 py-1 bg-red-500 text-white rounded"
                        onClick={() => handleDelete(row.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
