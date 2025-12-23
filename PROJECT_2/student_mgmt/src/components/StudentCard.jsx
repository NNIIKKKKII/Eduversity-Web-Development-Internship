import React from 'react';
import { Trash2 } from 'lucide-react';

const StudentCard = ({ student, onDelete, onView }) => {
  const attendancePercent = ((student.attended / student.total) * 100).toFixed(1);
  const avgMarks = (student.marks.reduce((a, b) => a + b, 0) / student.marks.length).toFixed(1);

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg">{student.name}</h3>
          <p className="text-sm text-gray-500">{student.rollNo}</p>
        </div>
        <button
          onClick={() => onDelete(student.id)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Attendance</span>
            <span className="font-semibold text-green-600">{attendancePercent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${attendancePercent}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Average Marks</span>
            <span className="font-semibold text-blue-600">{avgMarks}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${avgMarks}%` }}
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => onView(student)}
        className="w-full mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        View Details
      </button>
    </div>
  );
};

export default StudentCard;