"use client";
import { useState } from "react";

interface postForm {
  category: string;
  unit: string;
  factor: string;
  source: string;
}

export default function Addpost() {
  const [form, setForm] = useState<postForm>({
    category: "",
    unit: "",
    factor: "",
    source: "",
  });
  const [message, setMssage] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefualt();
    const postData = { ...form, factor: parseInt };
    console.log(postData);

    const res = await fetch("api/test", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    const data = await res.json();
    if (data.success) {
        setMssage('post added succesfully')
        setForm({category:'' , unit:'',factor:'',source:''})
      console.log(data);
    }else{
        setMssage('post added failfully')
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4">
      <input
        name="category"
        placeholder="category"
        value={form.category}
        onChange={handleChange}
      ></input>
      <input
        name="unit"
        placeholder="Unit"
        value={form.unit}
        onChange={handleChange}
      ></input>
      <input
        name="factor"
        placeholder="factor"
        value={form.factor}
        onChange={handleChange}
      ></input>
      <input
        name="source"
        placeholder="source"
        value={form.source}
        onChange={handleChange}
      ></input>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add post
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
