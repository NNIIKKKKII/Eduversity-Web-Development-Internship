import { useState } from "react";
import { addStudent } from "../api/studentApi";

export default function StudentForm({ fetchStudents }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) {
      alert("All fields are required");
      return;
    }
    await addStudent(form);
    fetchStudents();
    setForm({ name: "", email: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Course"
        value={form.course}
        onChange={(e) => setForm({ ...form, course: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Student
      </button>
    </form>
  );
}
