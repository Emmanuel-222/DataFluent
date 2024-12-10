import { Link } from "react-router-dom";
import { PiHandWavingThin } from "react-icons/pi";
import { Footer, Card, Carousel, Testimonial, Impact } from "../components";

import profileOne from "../../src/assets/card/image1.png";
import profileTwo from "../../src/assets/card/image2.png";
import graduate from "../../src/assets/graduate.png";
import ServiceCard from "../components/ServiceCard";
const Home = () => {
  const testimonials = [
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
        <div className="top flex items-center md:justify-center flex-col mt-10 md:mt-0 mb-32 h-screen w-full mx-2">
          <div className="flex items-center gap-4">
            <PiHandWavingThin className="text-[#20E4D1]" />
            <p className="text-base md:text-[20px] font-[400]">
              Welcome to DataFluent Enterprise
            </p>
          </div>
          <div className="flex items-center flex-col gap-4 mb-32 max-w-5xl mx-auto px-4">
            <h1 className="font-[700] text-[2rem] md:text-[4rem] text-center">
              Empowering Business & Education with Digital Solutions
            </h1>
            <h3 className="text-center font-[500] max-w-2xl mx-auto">
              Innovative services for businesses and transformative learning for
              future leaders-driving success in the digital age.
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
              <button className="btn bg-[#20E4D1] text-[#000] w-full md:w-60">
                Explore Our Services
              </button>
              <button className="btn bg-black text-[#20E4D1] w-full md:w-60">
                Learn with Us
              </button>
            </div>
          </div>
        </div>
        <Carousel />
      </section>
      <section className="about-background flex items-center py-64 justify-center flex-col bg-black w-screen">
        <div className="shadow flex items-center justify-center flex-col border-[1px] border-solid border-[#2F2F2F99] px-2 md:px-16 py-14 bg-transparent rounded-[32px] blur-[0.5px] mx-2">
          <div className="contents text-[#FAFAFA]">
            <h1 className="text-[#20E4D1] text-base md:text-[20px] text-center font-[500]">
              About Us
            </h1>
            <h1 className="text-[24px] md:text-[40px] font-[600] my-4">
              Who We Are
            </h1>
            <p className="max-w-4xl px-0 md:px-5 mx-auto text-center">
              At DataFluent Enterprise, we are dedicated to advancing both
              businesses and individuals in today’s digital world. Through our
              dual focus, DataFluent Services and DataFluent Academy, we provide
              comprehensive digital solutions and educational programs tailored
              to meet the needs of a tech-driven future.
            </p>
          </div>
          <Link to="/about-us">
            <button className="btn text-black bg-[#20E4D1] w-full md:w-60 text-center mt-10">
              Learn More
            </button>
          </Link>
        </div>
      </section>
      <section className="flex items-center flex-col flex-wrap justify-center bg-black w-screen text-[#FAFAFA] pb-64">
        <h1 className="text-[24px] md:text-4xl font-[600] max-w-xl text-center mb-10">
          Advance Your Career with DataFluent Academy
        </h1>
        <div className="graduate flex justify-center flex-wrap items-stretch gap-32 md:gap-2 md:px-20 ellispe mx-2">
          <div className="flex flex-col w-full lg:w-[50%] lg:h-[50%] border-[1px] border-solid border-[#2F2F2F99] px-4 md:px-16 py-10 bg-[#1A1A1A] rounded-[32px] blur-[0.5px]">
            <p>
              At DataFluent Academy, we speak the language of the future. Dive
              into transformative courses that empower you to master the skills
              driving today’s digital landscape. From Data Science and Analysis
              to Software Development and Project Management, our curriculum is
              designed for those who want to lead in tech innovation. Join us to
              build expertise in high-demand fields, guided by industry
              professionals, and prepare to make an impact on tomorrow’s world.
            </p>

            <button className="btn mt-8 w-full md:w-60 bg-[#20E4D1] text-black">
              Explore Our Courses
            </button>
          </div>
          <div className="flex justify-center items-center flex-1 relative">
            <img
              src={graduate}
              alt=""
              className="w-full object-cover absolute"
            />
          </div>
        </div>
      </section>
      <section className="flex items-center py-14 px-[2px] md:px-32 justify-between gap-8 flex-col bg-black w-screen">
        <div className="title text-center text-[#FAFAFA] md:max-w-3xl">
          <h1 className="text-base md:text-[20px] font-[500] text-[#20E4D1]">
            Our Services
          </h1>
          <h1 className="text-[20px] md:text-[40px] font-[600]">
            Comprehensive Digital Solutions for Your Business
          </h1>
        </div>
        <ServiceCard />
      </section>
      <Impact
        impactOne="80+"
        impactTwo="90+"
        impactThree="4.8"
        AreaOne="Projects Delivered"
        AreaTwo="Students Trained"
        AreaThree="Review Rate"
      />
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Card
        title={"Take the Next Step with DataFluent"}
        showButton={true}
        buttonText={"Request a Consultation"}
      />
      <Footer />
    </div>
  );
};

export default Home;
