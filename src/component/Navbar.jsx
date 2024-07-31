import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=" bg-[#fff] text-black font-semibold text-x4  ">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-semibold">
            <span className="text-black">Somali</span><span className="text-teal-900">HealthCare</span>
          </Link>
        </div>
        <div className="flex items-center">
          <button
            className="lg:hidden"
            onClick={handleToggle}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
          <nav className={`flex flex-row items-center gap-6 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
            <Link to="/" className="hover:text-teal-500 transition-colors ease-in-out duration-300 cursor-pointer">
              Home
            </Link>
            <Link to="/Aboutus" className="hover:text-teal-500 transition-all cursor-pointer">
              About Us
            </Link>
            <Link to="/services" className="hover:text-teal-500 transition-all cursor-pointer">
              Our Services
            </Link>
            <Link to="/doctors" className="hover:text-teal-500 transition-all cursor-pointer">
              Doctors
            </Link>
            <Link to="/blog" className="hover:text-teal-500 transition-all cursor-pointer">
              Blog
            </Link>
            <Link to="/contact" className="text-teal-900 hover:text-teal-500 transition-colors ease-in-out duration-300 cursor-pointer">
  Contact
</Link>

          </nav>



        </div>
      </div>
    </div>
  );
};

export default Navbar;