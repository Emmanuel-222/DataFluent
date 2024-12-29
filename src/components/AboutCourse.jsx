import { IoIosCheckmarkCircle } from "react-icons/io";

import dataScience from "../../src/assets/about-course/datascience.png";

const AboutCourse = () => {
  return (
    <div className="my-28 flex justify-center flex-wrap items-stretch mx-10 gap-12">
      <div className="max-w-[40rem] flex flex-col gap-8 md:gap-4">
        <h1 className="font-[600] text-xl md:text-4xl">What This Course Covers</h1>
        <p className="text-sm md:text-base">
          This course is designed to provide a comprehensive introduction to
          Data Science, equipping you with the practical skills and knowledge
          needed to analyze and interpret complex data. From understanding
          foundational concepts to applying tools like Python, SQL, and Excel,
          you’ll gain hands-on experience through real-world projects. Whether
          you’re starting a new career or advancing in your current role, this
          course prepares you to thrive in today’s data-driven world.{" "}
        </p>
        <ul className="flex justify-center flex-col gap-4 text-sm md:text-base">
          <li className="flex items-center gap-1"><IoIosCheckmarkCircle className="text-[#20E4D1] text-xl"/>Learn the fundamentals of data science.</li>
          <li className="flex items-center gap-1"><IoIosCheckmarkCircle className="text-[#20E4D1] text-xl"/>Master tools like Python, SQL, and Excel.</li>
          <li className="flex items-center gap-1"><IoIosCheckmarkCircle className="text-[#20E4D1] text-xl"/>Work on real-world projects with expert guidance.</li>
        </ul>
      </div>
      <div className="">
        <img className="size-[28rem] object-cover" src={dataScience} alt="PhotoForDataScience" />
      </div>
    </div>
  );
};

export default AboutCourse;
