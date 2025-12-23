import React from 'react';
import { X } from 'lucide-react';

const StudentDetailsModal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{student.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <p className="text-gray-600 mb-6">{student.rollNo}</p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Attendance</h3>
            <p className="text-sm">
              {student.attended} / {student.total} classes
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: `${(student.attended / student.total) * 100}%` }}
              />
            </div>
            <p className="text-right text-green-600 font-semibold mt-1">
              {((student.attended / student.total) * 100).toFixed(1)}%
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Subject Marks</h3>
            {student.subjects.map((subject, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>{subject}</span>
                  <span className="font-semibold">{student.marks[index]}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${student.marks[index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 bg-gray-200 py-2 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StudentDetailsModal;