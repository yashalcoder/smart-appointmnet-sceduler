import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      {/* Blue Banner */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-10 rounded-b-3xl">
        <h2 className="text-3xl font-bold mb-4">Working for Your Better Health.</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white text-lg">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎧</span> Customer Support: <span className="font-semibold">+1 56589 54598</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">💬</span> Email: <span className="font-semibold">info1256@example.com</span>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-6 md:px-16 py-12 text-sm">
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Careers</li>
            <li>Locations</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Treatments</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Dental</li>
            <li>Cardiac</li>
            <li>Spinal Cord</li>
            <li>Hair Growth</li>
            <li>Anemia & Disorder</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Specialities</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Transplant</li>
            <li>Cardiologist</li>
            <li>Oncology</li>
            <li>Pediatrics</li>
            <li>Gynaecology</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Utilities</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Pricing</li>
            <li>Contact</li>
            <li>Request A Quote</li>
            <li>Premium Membership</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Newsletter</h3>
          <p className="text-gray-400 mb-3">Subscribe & Stay Updated from the Doccure</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-3 py-2 rounded-l-md bg-gray-800 border-none text-white w-full"
            />
            <button className="bg-blue-700 px-4 py-2 rounded-r-md text-white hover:bg-blue-800">Send</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 px-6 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
        <p>Software By Yashal Rafique. All Rights Reserved</p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaPinterestP /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
