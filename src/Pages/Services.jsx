import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

import { Footer, Testimonial, Card } from "../components";

import ServiceCard from "../components/ServiceCard";
// import Carousel from "../components/Carousel";

import profileOne from "../../src/assets/card/image1.png";
import profileTwo from "../../src/assets/card/image2.png";
import imageOne from "../../src/assets/service/image-one.png";
import imageTwo from "../../src/assets/service/image-two.png";
import imageThree from "../../src/assets/service/image-three.png";

const Services = () => {
  const testimonail = [
    {
      name: "Seun Lawrence",
      testimony:
        "DataFluent Enterprise transformed our digital presence. Their team brought our vision to life with sleek, intuitive website that has driven customer engagement to new heights!",
      profile: profileOne,
      company: "Darren Hub",
    },
    {
      name: "David John",
      testimony:
        "Thanks to DataFluent Academy, our team gained essential skills in data analysis. The training was practical and effective, equipping us to handle real-world challenges confidently.",
      profile: profileTwo,
      company: "Kravit Consult",
    },
  ];
  return (
    <div className="container text-[#FAFAFA] h-screen w-screen">
      <section className="flex items-center justify-center flex-col app-background w-screen">
        <div className="top flex items-center justify-start flex-col mt-10 md:mt-24 md:mb-14 h-screen w-full mx-2">
          <div className="flex items-center gap-4">
            <MdOutlineMiscellaneousServices className="text-[#20E4D1]" />
            <p className="text-base md:text-[20px] font-[400]">
              DataFluent Services
            </p>
          </div>
          <div className="flex items-center flex-col gap-4 md:mb-32 max-w-5xl mx-auto px-4">
            <h1 className="font-[700] text-[2rem] md:text-[4rem] text-center">
              Empowering Business with Tailored Digital Solutions
            </h1>
            <h3 className="text-center font-[500] max-w-2xl mx-auto">
              Delivering cutting-edge solutions that fuel growth and innovation
              for forward-thinking businesses
            </h3>
          </div>
        </div>
      </section>
      <section className="flex items-center md:py-4 justify-center flex-col bg-black w-screen">
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
        <div className="flex flex-col md:gap-8 items-stretch justify-end mb-32 border-solid border-green-500 border-2">
          <div className="top flex flex-nowrap items-stretch justify-center m-4 gap-4 border-2 border-solid border-red-600 overflow-x-auto">
            {/* Cards */}
            <img className="h-80 w-80" src={imageOne} alt="" />
            <img className="h-80 w-80" src={imageTwo} alt="" />
            <img className="h-80 w-80" src={imageThree} alt="" />
          </div>

          {/* Mobile screen */}
          <div className="bottom flex flex-col md:hidden px-4 justify-between items-end gap-4">
            <div className="flex items-center gap-4 text-[#20E4D1] text-2xl">
              <IoArrowBack />
              <IoArrowForward />
            </div>
            <Link to="/projects">
              <button className="btn flex items-center justify-center text-[#43E8D8] w-full md:w-60 font-[500] md:ml-64 gap-2 text-center">
                View all projects
                <GoArrowUpRight />
              </button>
            </Link>
          </div>
          {/* Bigger Screen */}
          <div className="bottom hidden md:flex md:flex-row px-4 justify-between items-center gap-4">
            <Link to="/projects">
              <button className="btn flex items-center justify-center text-[#43E8D8] w-full md:w-60 font-[500] md:ml-64 gap-2 text-center">
                View all projects
                <GoArrowUpRight />
              </button>
            </Link>
            <div className="md:flex items-center gap-4 text-[#20E4D1] text-2xl">
              <IoArrowBack />
              <IoArrowForward />
            </div>
          </div>
        </div>
        {/* <Carousel /> */}
      </section>
      <Testimonial testimonials={testimonail} />
      <Card
        title={"Ready to Transform Your Business?"}
        showButton={true}
        buttonText={"Request a Consultation"}
        showParagraph={true}
        paragraphText={
          "Get in touch to discuss how we can help you achieve your digital goals"
        }
      />
      <Footer />
    </div>
  );
};

export default Services;
