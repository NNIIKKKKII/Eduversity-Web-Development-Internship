import React, { useState } from 'react';

const AddStudentForm = ({ onAdd, onCancel }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [total, setTotal] = useState('');
  const [attended, setAttended] = useState('');

  const handleSubmit = () => {
    if (name && rollNo && total && attended) {
      onAdd({
        name,
        rollNo,
        total: parseInt(total),
        attended: parseInt(attended),
        marks: [85, 78, 92, 88],
        subjects: ['Math', 'Physics', 'Chemistry', 'Computer']
      });
      setName('');
      setRollNo('');
      setTotal('');
      setAttended('');
    }
  };

  return (
    <div className="bg-blue-50 rounded-lg p-4 mb-6">
      <h3 className="font-bold text-lg mb-4">Add New Student</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Total Classes"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Attended Classes"
          value={attended}
          onChange={(e) => setAttended(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-2 mt-3">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Student
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddStudentForm;