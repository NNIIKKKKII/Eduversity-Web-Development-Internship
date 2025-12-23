import React, { useState } from "react";
import { Users, Calendar, BookOpen, Plus } from "lucide-react";
import StatCard from "./components/StatCard.jsx";
import StudentCard from "./components/StudentCard.jsx";
import AddStudentForm from "./components/AddStudentForm.jsx";
import StudentDetailsModal from "./components/StudentDetailsModal.jsx";

export default function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      rollNo: "CS001",
      total: 120,
      attended: 110,
      marks: [85, 78, 92, 88],
      subjects: ["Math", "Physics", "Chemistry", "Computer"],
    },
    {
      id: 2,
      name: "Priya Sharma",
      rollNo: "CS002",
      total: 120,
      attended: 115,
      marks: [92, 88, 85, 90],
      subjects: ["Math", "Physics", "Chemistry", "Computer"],
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: Date.now() }]);
    setShowAddForm(false);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const avgAttendance =
    students.reduce((sum, s) => sum + (s.attended / s.total) * 100, 0) /
    students.length;

  const avgMarks =
    students.reduce(
      (sum, s) => sum + s.marks.reduce((a, b) => a + b, 0) / s.marks.length,
      0
    ) / students.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Student Management System
          </h1>
          <p className="text-gray-600">Track attendance and performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard
            icon={Users}
            title="Total Students"
            value={students.length}
            color="#3B82F6"
          />
          <StatCard
            icon={Calendar}
            title="Avg Attendance"
            value={`${avgAttendance.toFixed(1)}%`}
            color="#10B981"
          />
          <StatCard
            icon={BookOpen}
            title="Avg Marks"
            value={`${avgMarks.toFixed(1)}%`}
            color="#F59E0B"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Students</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
            >
              <Plus size={20} />
              Add Student
            </button>
          </div>

          {showAddForm && (
            <AddStudentForm
              onAdd={addStudent}
              onCancel={() => setShowAddForm(false)}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onDelete={deleteStudent}
                onView={setSelectedStudent}
              />
            ))}
          </div>
        </div>

        <StudentDetailsModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      </div>
    </div>
  );
}
