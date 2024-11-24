import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin, CiLocationOn, CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

import graduationCap from "../../src/assets/grad.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black w-screen font-montserrat flex flex-col lg:flex-row justify-around items-start lg:items-stretch pl-4 lg:pl-0 pb-10 pt-20 lg:pt-40 gap-10 lg:gap-0">
        <div className="flex flex-col justify-center text-[#FAFAFA] items-center gap-10">
          <div className="top flex flex-col gap-4">
            <span className="flex items-center gap-4">
              <CiLocationOn /> Abuja
            </span>
            <span className="flex items-center gap-4">
              <LuPhone /> +234 810 652 2242
            </span>
            <span className="flex items-center gap-4">
              <CiMail />
              datafluent@gmail.com
            </span>
            <hr className="border-[#464646] border-solid border-[1px]" />
          </div>
          <div className="bottom w-full flex justify-between items-center text-2xl">
            <FaInstagram />
            <FaXTwitter />
            <FaFacebookF />
            <CiLinkedin />
          </div>
        </div>
        <div className="flex flex-col text-[#FAFAFA] justify-center items-start">
          <div className="top">
            <span className="font-[600] text-[20px] text-center">
              Quick Links
            </span>
          </div>
          <ul className="flex items-start font-normal gap-4 py-4 flex-col">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Serices</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/academy">Academy</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4 border-solid border-[1px] border-[#2E2E2E] rounded-[32px] px-6 py-4 lg:py-0 mr-4 lg:mr-0">
          <div className="lg:max-w-[24rem] flex flex-col gap-4 items-start">
            <h1 className="text-[#B9B9B9] font-[600] text-[18px] lg:text-[24px] lg:text-wrap">
              Invest in Your Future with DataFluent Academy
            </h1>
            <p className="text-[#20E4D1] text-sm flex justify-center items-center cursor-pointer">
              Enroll
              <GoArrowUpRight />
            </p>
          </div>
          <div>
            <img src={graduationCap} alt="graduation cap" />
          </div>
        </div>
      </footer>
      <span className="flex items-center py-14 lg:px-32 justify-between gap-8 flex-col bg-black w-screen text-[14px] md:text-base">
        &#169; 2024 Data Fluent Enterprise. All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
