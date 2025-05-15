"use client"

import { useState, useEffect } from "react"
import { Search, ChevronDown, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { input } from "framer-motion/client"


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [searchVisible,setSearchVisible]=useState(false)
  const toggleSearch=()=>{
    setSearchVisible((prev)=>!prev);
  }
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("mobile-sidebar")
      const hamburger = document.getElementById("hamburger-button")

      if (
        sidebar &&
        !sidebar.contains(event.target) &&
        hamburger &&
        !hamburger.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
  
    // Prevent scrolling when sidebar is open
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])

  const toggleDropdown = (index, e) => {
    // Prevent the event from bubbling up to the parent link
    e.stopPropagation()
    e.preventDefault()

    if (activeDropdown === index) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(index)
    }
  }

  const navItems = [
    { name: "Home", hasDropdown: false, link: "/" },
    { name: "Doctors", hasDropdown: true, link: "/Doctor/Dashboard" },
    { name: "Patients", hasDropdown: true, link: "/patients" },
    { name: "Pharmacy", hasDropdown: false, link: "/pharmacy" },
  ]

  // Sample dropdown items
  const dropdownItems = {
    Doctors: [
      { name: "Find Doctor", link: "/doctors/find" },
      { name: "Doctor Profile", link: "/doctors/profile" },
      { name: "Book Appointment", link: "/doctors/book-appointment" },
      { name: "Doctor Dashboard", link: "/Doctor/Dashboard" },
    ],
    Patients: [
      { name: "Patient Dashboard", link: "/patients/dashboard" },
      { name: "Medical Records", link: "/patients/records" },
      { name: "Appointments", link: "/patients/appointments" },
      { name: "Payment History", link: "/patients/payments" },
    ],
  }

  return (
    <nav className="bg-black text-white py-4 px-6 relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-3xl font-bold text-blue-500">
            DOCCURE
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            id="hamburger-button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <div className="flex items-center">
                <Link to={item.link} className="text-white hover:text-blue-400 focus:outline-none">
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <button onMouseOver={(e) => toggleDropdown(index, e)} className="ml-1 focus:outline-none">
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>

              {/* Dropdown menu */}
              {item.hasDropdown && activeDropdown === index && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {dropdownItems[item.name].map((dropdownItem, idx) => (
                    <Link
                      key={idx}
                      to={dropdownItem.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search and Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex text-white gap-2 hover:text-blue-400">
          <input className={`rounded-md px-1 ${searchVisible ? "block" : "hidden"}`} placeholder="Search here"/>
            <Search size={20} onClick={toggleSearch} />
           
          </button>
          <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Sign Up
          </Link>
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Login
          </Link>
        </div>

        {/* Mobile Sidebar */}
        <div
          id="mobile-sidebar"
          className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <a href="/" className="text-2xl font-bold text-blue-500">
              DOCCURE
            </a>
            <button onClick={() => setIsSidebarOpen(false)} className="text-white focus:outline-none">
              <X size={24} />
            </button>
          </div>

          <div className="py-4">
            {navItems.map((item, index) => (
              <div key={index} className="px-4 py-2">
                <div className="flex items-center justify-between w-full">
                  <Link
                    to={item.link}
                    className="text-white hover:text-blue-400"
                    onClick={() => !item.hasDropdown && setIsSidebarOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <button onMouseOver={(e) => toggleDropdown(index, e)} className="text-white focus:outline-none">
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile dropdown */}
                {item.hasDropdown && activeDropdown === index && (
                  <div className="pl-4 mt-2 space-y-2">
                    {dropdownItems[item.name].map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        to={dropdownItem.link}
                        className="block py-1 text-sm text-gray-300 hover:text-blue-400"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3">
              <button className="flex items-center text-white hover:text-blue-400">
                <Search size={18} className="mr-2" />
                Search
              </button>
              <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-center">
                Sign Up
              </Link>
              <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-center">
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar

