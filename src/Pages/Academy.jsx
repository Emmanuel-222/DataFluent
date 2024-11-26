import { LuGraduationCap } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

import { AcademyCard, CourseCard, Testimonial, Footer, CourseCardInfo, Impact } from "../components";

import imageOne from "../../src/assets/academy/image-one.png";
import imageTwo from "../../src/assets/academy/image-two.png";
import imageThree from "../../src/assets/academy/image-three.png";
import imageFour from "../../src/assets/academy/image-four.png";
import imageFive from "../../src/assets/academy/image-five.png";
import profileOne from "../../src/assets/academy/profile-one.png";
import profileTwo from "../../src/assets/academy/profile-two.png";



const Academy = () => {
  const testimonail = [
    {
      name: "Joan Olajuwon",
      testimony:
        "DataFluent Academy gave me the skills and confidence to shift into a tech career. The hands-on projects were incredibly practical, and the instructors were supportive every step of the way!",
      profile: profileOne,
      company: "Data Science Grad.",
    },
    {
      name: "Ayo Komolafe",
      testimony:
        "The curriculum was challenging yet rewarding. Thanks to the training, I secured a position as a software developer shortly after graduation. DataFluent Academy truly prepared me for the real world. ",
      profile: profileTwo,
      company: "Development Grad.",
    },
  ];
  return (
    <div className="h-screen w-full text-[#FAFAFA] ">
      <section className="flex items-center justify-center flex-col app-background w-screen">
        <div className="top flex items-center justify-start flex-col mt-10 md:mt-24 mb-32 w-full mx-2">
          <div className="flex items-center gap-4">
            <LuGraduationCap className="text-[#20E4D1]" />
            <p className="text-base md:text-[20px] font-[400]">
              DataFluent Academy
            </p>
          </div>
          <div className="flex items-center flex-col gap-4 mb-32 max-w-5xl mx-auto px-4">
            <h1 className="font-[700] text-[2rem] md:text-[4rem] text-center">
              Master Tomorrow’s Skills, Today
            </h1>
            <h3 className="text-center font-[500] max-w-2xl mx-auto">
              Empowering individuals with the skills to succeed in a data-driven
              world
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full md:mt-14">
              <button className="btn bg-[#20E4D1] text-[#000] w-full md:w-60">
                Explore Courses
              </button>
              <button className="btn bg-black text-[#20E4D1] w-full md:w-60">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col academy-background w-screen">
        <div className="border-[#2F2F2F99] flex justify-center items-center flex-col md:gap-20 border-[1px] border-solid py-20 rounded-[32px] px-4 md:px-10 mx-2 md:mx-16 mb-32">
          <h1 className="font-[600] text-[24px] md:text-[40px] text-white text-center">
            Why DataFluent Academy?
          </h1>
          <div className="flex justify-center items-stretch gap-4 flex-wrap">
            <p className="lg:max-w-[20rem] mt-4 mx-8 md:mt-20 mb-8 md:mb-0">
              DataFluent Academy is dedicated to preparing individuals for
              high-demand careers in technology. Our programs are designed to
              provide practical, hands-on learning guided by industry experts,
              ensuring that every student gains the skills and confidence to
              excel in a data-driven world
            </p>
            <AcademyCard
              title="Industry-Aligned Curriculum"
              img={imageOne}
              paragraph="Learn the skills that top employers are looking for."
            />
            <AcademyCard
              title="Expert Instructors"
              img={imageTwo}
              paragraph="Gain insights and mentorship from experienced professionals."
            />
            <AcademyCard
              title="Industry-Aligned Curriculum"
              img={imageThree}
              paragraph="Learn the skills that top employers are looking for."
            />
            <AcademyCard
              title="Industry-Aligned Curriculum"
              img={imageFour}
              paragraph="Learn the skills that top employers are looking for."
            />
            <AcademyCard
              title="Industry-Aligned Curriculum"
              img={imageFive}
              paragraph="Learn the skills that top employers are looking for."
            />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col w-screen bg-black">
        <h1 className="font-[600] text-[28px] md:text-[40px] text-center text-white">
          Explore Our Courses
        </h1>
        <div className="flex flex-wrap justify-center items-stretch gap-14 mx-4 md:mx-24 my-8">
          {
          //Destructed information from the CourseCardInfo to make the code neater
            CourseCardInfo.map(({ courseTitle, description, img}) => (
              <CourseCard key={courseTitle} courseTitle={courseTitle} description={description} img={img} />
            ))
          }
          <div className="flex flex-1 flex-col rounded-[32px] justify-start items-start px-1 pt-1 pb-8 gap-4">
            <h1 className="font-[600] text-[72px] text-[#E0E0E0]">
              Ready to Start Your Journey?
            </h1>
            <button className="btn w-48 text-[#43E8D8] text-[18px] font-[500] gap-2 text-sm flex justify-center items-center">
              Enroll
              <GoArrowUpRight />
            </button>
          </div>
        </div>
      </section>
      <Impact
        impactOne="90+"
        impactTwo="80%"
        impactThree="95%"
        AreaOne="Graduates & Counting"
        AreaTwo="Job Placement"
        AreaThree="Course Satisfaction Rate"
      />
      <Testimonial testimonials={testimonail} />
      <Footer />
    </div>
  );
};

export default Academy;
