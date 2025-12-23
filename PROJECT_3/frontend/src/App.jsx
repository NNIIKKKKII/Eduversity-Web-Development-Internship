import { useEffect, useState } from "react";
import { getStudents } from "./api/studentApi";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>
      <StudentForm fetchStudents={fetchStudents} />
      <StudentList students={students} fetchStudents={fetchStudents} />
    </div>
  );
}

export default App;
