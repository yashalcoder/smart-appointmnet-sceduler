// import React, { useState, useEffect } from 'react';
// import { FaChartBar, FaClipboardList, FaCalendarAlt, FaClock, FaUsers, FaUserMd, FaComments, FaFileInvoice, FaCog, FaEnvelope, FaLock, FaSignOutAlt } from 'react-icons/fa';
// import Navbar from '../components/Navbar';
// import DrSidebar from "../components/DrSidebar";
// import AppointmentsList from '../components/Appointment';
// import { getDistance } from 'geolib'; // Import geolib for distance calculation

// const DoctorDashboard = () => {
//   const [doctor, setDoctor] = useState({});
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true); // Track loading state
//   const [userLocation, setUserLocation] = useState(null); // User's current location
//   const [filteredDoctors, setFilteredDoctors] = useState([]); // Filtered doctors based on range

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true); // Set loading to true before starting the fetch
//         const response = await fetch('http://localhost:5000/api/doctors/63cfea9c/dashboard');
        
//         // Check if the response is okay
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
//         setDoctor(data.doctor);
//         setAppointments(data.appointments || []); // Default to empty array if appointments are undefined
//         filterDoctorsByLocation(data.doctors); // Assuming 'data.doctors' contains a list of all doctors
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//         // You might want to set an error state here to show the user
//       } finally {
//         setLoading(false); // Set loading to false after data is fetched or an error occurs
//       }
//     };

//     fetchData();
//   }, [userLocation]);

//   // Get the user's current location using geolocation
//   useEffect(() => {
//     const getCurrentLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setUserLocation({ latitude, longitude });
//           },
//           (error) => console.error('Error getting location:', error),
//           { enableHighAccuracy: true }
//         );
//       } else {
//         console.log('Geolocation is not supported by this browser.');
//       }
//     };

//     getCurrentLocation();
//   }, []);

//   // Function to filter doctors based on distance from user
//   const filterDoctorsByLocation = (doctors) => {
//     if (!userLocation) return; // If user location isn't available yet, don't filter

//     const filtered = doctors.filter((doctor) => {
//       const doctorLocation = {
//         latitude: doctor.latitude, // Assuming the doctor object contains latitude and longitude
//         longitude: doctor.longitude
//       };

//       // Calculate the distance between user and doctor (in meters)
//       const distance = getDistance(userLocation, doctorLocation);

//       // If the distance is within 10 kilometers (10000 meters), include this doctor
//       return distance <= 10000;
//     });

//     setFilteredDoctors(filtered);
//   };

//   // Conditionally render loading state
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-white">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <> 
//       <Navbar />
//       <div className="m-[100px] bg-black text-white flex">
//         {/* Sidebar */}
//         <div className="w-64 bg-zinc-900 p-4">
//           <DrSidebar />
//           <ul className="mt-6 space-y-2 text-sm">
//             <li className="bg-blue-600 p-2 rounded flex items-center"><FaChartBar className="mr-2" /> Dashboard</li>
//             <li className="p-2 rounded hover:bg-gray-800 flex items-center"><FaClipboardList className="mr-2" /> Requests</li>
//             <li className="p-2 rounded hover:bg-gray-800 flex items-center"><FaCalendarAlt className="mr-2" /> Appointments</li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="p-6 w-full">
//           <h1 className="text-2xl font-bold mb-4">Doctor Dashboard</h1>
//           <div className="space-y-4">
//             <div className="bg-zinc-800 p-4 rounded">Name: {doctor?.name || 'Loading...'}</div>
//             <div className="bg-zinc-800 p-4 rounded">Total Patients: {doctor?.patients || 0}</div>
//             <div className="bg-zinc-800 p-4 rounded">Appointments Today: {doctor?.appointmentsToday || 0}</div>
//           </div>
          
//           {/* Render the filtered list of doctors */}
//           <div className="bg-zinc-800 p-4 rounded mt-4">
//             <h2 className="text-xl font-semibold">Doctors Nearby</h2>
//             <ul className="space-y-2 mt-4">
//               {filteredDoctors.length === 0 ? (
//                 <li>No doctors available within the specified range.</li>
//               ) : (
//                 filteredDoctors.map((doctor) => (
//                   <li key={doctor._id} className="flex justify-between">
//                     <span>{doctor.name}</span>
//                     <span>{doctor.specialty}</span>
//                   </li>
//                 ))
//               )}
//             </ul>
//           </div>

//           <AppointmentsList appointments={appointments} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default DoctorDashboard;
import React, { useState, useEffect } from 'react';

const DoctorDashboard = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctors');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      {doctors.length > 0 ? (
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor._id}>
              {doctor.name} - {doctor.specialty} - {doctor.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No doctors found</p>
      )}
    </div>
  );
};

export default DoctorDashboard;
