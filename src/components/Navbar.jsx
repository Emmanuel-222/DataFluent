import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const [activeLink, setActiveLink] = useState(false);
  // const handleChangeColor = () => setActiveLink(!activeLink);

  const handleClick = () => setNav(!nav);

  return (
    <nav className="navbar bg-black text-white px-8 py-[24px] w-full">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center w-full">
        <div className="logo py-6 px-16 rounded-3xl bg-[#20E4D1] bg-gradient-to-t from-[#43E8D8] to-[#1A1A1A]"></div>
        <ul
          className="flex justify-between gap-8 py-4 px-8
         border-[#0B5C54] border-[1px] border-solid rounded-[2rem]"
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink  to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/academy">Academy</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <button className="btn bg-[#20E4D1] text-black">
          Request a Consultation
        </button>
      </div>

      <div className="flex justify-between items-center lg:hidden w-full">
        {/* Logo */}
        <div className="logo py-6 px-16 rounded-3xl bg-[#20E4D1] bg-gradient-to-t from-[#43E8D8] to-[#1A1A1A]"></div>

        {/* Hamburger Icon */}
        <div onClick={handleClick} className="z-10 text-[#20E4D1] cursor-pointer border-solid border-[1px] border-black rounded-full p-2 bg-[#2C2C2C]">
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`bg-black text-white px-8 py-[24px] flex flex-col lg:hidden justify-between items-center w-full ${
          nav
            ? "absolute top-20 left-0 bg-[#1A1A1A] flex flex-col justify-center items-center w-full h-screen"
            : "hidden"
        }`}
      >
        <ul className="w-full h-[60vh] flex flex-col text-2xl font-montserrat gap-12">
          <li>
            <NavLink to="/" onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" onClick={handleClick}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={handleClick}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/academy" onClick={handleClick}>
              Academy
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleClick}>
              Contact
            </NavLink>
          </li>
          <button className="btn bg-[#20E4D1] text-sm md:text-base text-black mt-10">
            Request a Consultation
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
