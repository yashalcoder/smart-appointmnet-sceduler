
// AppointmentsList.jsx
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const AppointmentsList = ({ appointments }) => {
    
  return (
    <div className="bg-black p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">Appointments</h4>
        <select className="bg-gray-700 text-sm p-1 rounded">
          <option>Last 7 Days</option>
          <option>Today</option>
          <option>This Month</option>
        </select>
      </div>

      {appointments.map((appt) => (
        <div
          key={appt.id}
          className="flex items-center justify-between py-4 border-b border-gray-700"
        >
          <div className="flex items-center space-x-3">
            <img
              src={appt.avatar}
              alt={appt.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-white">{appt.name}</p>
              <p className="text-xs text-gray-400">{appt.id}</p>
            </div>
          </div>

          <div className="flex flex-col text-sm text-right sm:text-left sm:flex-row sm:items-center sm:gap-2">
            <span className="text-sm">{appt.date} {appt.time}</span>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded ml-auto sm:ml-0">
              {appt.type}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-400 cursor-pointer" />
            <XCircle className="text-red-500 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentsList;
