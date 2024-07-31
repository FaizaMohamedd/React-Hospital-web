import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-teal-900 text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">SomaliHealthCare</h1>
          <p className=" text-sm">
          SomaliHealthCare Specialist Hospital of Somalia is a hospital, about which a Somalian mother can, with no trouble and in inner peace, take her baby to the health unit for treatment.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Our Services
          </h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
              HearthCare
            </a>
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
             Ambulance Service
            </a>
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
             HeathCare
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Appoinntment Info</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
              +252615190645
            </a>
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
              +25261111111
            </a>
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
              SomaliHeathCare@gmail.com
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Follow Us</h1>
          <nav className=" flex flex-col md:items-center gap-2">
            <BsFacebook
              size={25}
              className="hover:text-[#00D1FF] transition-all cursor-pointer"
            />
            <RiTwitterXFill
              size={25}
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
            />
            <BsInstagram
              size={25}
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-[#00D1FF]"> SomaliHeathCareCare</span> | All
            rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;