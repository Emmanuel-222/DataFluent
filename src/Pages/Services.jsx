import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { IoArrowBack,  IoArrowForward } from "react-icons/io5";

import { Footer } from "../components";


import ServiceCard from "../components/ServiceCard";
import Carousel from "../components/Carousel";

import imageOne from "../../src/assets/service/image-one.png";
import imageTwo from "../../src/assets/service/image-two.png";
import imageThree from "../../src/assets/service/image-three.png";

const Services = () => {
  return (
    <div className="container text-[#FAFAFA] h-screen w-screen">
      <section className="flex items-center justify-center flex-col app-background w-screen">
        <div className="top flex items-center md:justify-center flex-col mt-10 md:mt-0 mb-14 h-screen w-full mx-2">
          <div className="flex items-center gap-4">
            <MdOutlineMiscellaneousServices className="text-[#20E4D1] rotate-90" />
            <p className="text-base md:text-[20px] font-[400]">
              DataFluent Services
            </p>
          </div>
          <div className="flex items-center flex-col gap-4 mb-32 max-w-5xl mx-auto px-4">
            <h1 className="font-[700] text-[2rem] md:text-[4rem] text-center">
              Empowering Business with Tailored Digital Solutions
            </h1>
            <h3 className="text-center font-[500] max-w-2xl mx-auto">
              Delivering cutting-edge solutions that fuel growth and innovation
              for forward-thinking businesses
            </h3>
          </div>
        </div>
        {/* <Carousel /> */}
      </section>
      <section className="flex items-center py-4 justify-center flex-col bg-black w-screen">
        <div className="shadow flex items-center justify-center flex-col border-[1px] border-solid border-[#2F2F2F99] px-2 md:px-16 py-14 bg-[#1A1A1A66] rounded-[32px] blur-[0.5px] mx-2">
          <div className="contents text-[#FAFAFA]">
            <h1 className="text-[24px] md:text-[40px] font-[600] my-4">
              Our Expertise, Your Success
            </h1>
            <p className="max-w-4xl px-0 md:px-5 mx-auto text-center">
              At DataFluent Services, we believe in the transformative power of
              technology. Our team is dedicated to helping businesses thrive by
              providing tailored solutions across development, data management,
              design, and brand strategy. With a client-centered approach and a
              commitment to excellence. we deliver impactful services that
              empower our partners to excel in a digital-first world.
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center py-14 px-[2px] md:px-32 justify-between gap-8 flex-col bg-black w-screen">
        <div className="title text-center text-[#FAFAFA] md:max-w-3xl">
          <h1 className="text-[20px] md:text-[40px] font-[600]">
            Our Services
          </h1>
        </div>
        <ServiceCard />
      </section>
      <section className="flex items-center py-14 px-[2px] md:px-32 justify-between gap-8 flex-col bg-black w-screen">
        <div className="title text-center text-[#FAFAFA] md:max-w-3xl">
          <h1 className="text-base md:text-[20px] font-[500] text-[#20E4D1]">
            See Our Work in Action
          </h1>
          <h1 className="text-[20px] md:text-[40px] font-[600]">
            Our Recent Projects
          </h1>
        </div>
        <div className="flex flex-col gap-8 items-stretch justify-end mb-32">
          <div className="top flex cards-container">
            <img className="h-72 w-72" src={imageOne} alt="" />
            <img className="h-72 w-72" src={imageTwo} alt="" />
            <img className="h-72 w-72" src={imageThree} alt="" />
          </div>
          <div className="bottom flex justify-between items-center">
            <button className="btn flex items-center text-[#43E8D8] font-[500] ml-64 gap-2 text-center">View all projects<GoArrowUpRight /></button>
            <div className="flex items-center gap-4 text-[#20E4D1] text-2xl">
              <IoArrowBack />
              <IoArrowForward />
            </div>
          </div>
        </div>
        <Carousel />
      </section>
      <Footer />
    </div>
  );
};

export default Services;
