import React from "react";
import Feature from "../components/features"
import Isr from "../Images/doctor.png"
import { px } from "framer-motion";
const Services=()=>{
    return(<>
    <div className="bg-[#121212] text-white">
       <Feature/>
       <div className="flex justify-center">
               <h1 className=" bg-blue-950 rounded-md w-36 text-center h-8 text-xl">Top specialist</h1>
       </div>
       
    </div>
    </>)
}
export default Services;