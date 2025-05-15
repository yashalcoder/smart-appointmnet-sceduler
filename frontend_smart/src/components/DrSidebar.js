import React from "react"
const Sidebar=()=>{
    return(<>
    <div className="flex flex-col items-center">
          <img
            src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors/doctor-thumb-02.jpg"
            alt="Doctor"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <h2 className="mt-4 font-semibold text-center">Dr Edalin Hendry</h2>
          <p className="text-xs text-gray-400 text-center">BDS, MDS - Oral & Maxillofacial Surgery</p>
          <span className="text-blue-400 mt-1 text-xs">Dentist</span>
          <select className="mt-4 w-full bg-gray-800 text-white text-sm p-2 rounded">
            <option>I am Available Now</option>
            <option>Busy</option>
          </select>
        </div>
    </>);
}
export default Sidebar;