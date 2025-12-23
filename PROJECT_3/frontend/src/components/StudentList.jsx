import { deleteStudent } from "../api/studentApi";

export default function StudentList({ students, fetchStudents }) {
  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <ul className="mt-4 space-y-2">
      {students.map((s) => (
        <li
          key={s._id}
          className="flex justify-between items-center border p-2 rounded"
        >
          <div>
            <p className="font-semibold">{s.name}</p>
            <p className="text-sm text-gray-500">{s.course}</p>
          </div>
          <button
            className="text-red-500"
            onClick={() => handleDelete(s._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
