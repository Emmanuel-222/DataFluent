import propType from "prop-types"


import { IoIosCheckmarkCircle } from "react-icons/io";



const AboutCourse = ({ paragraph, item1, item2, item3, img }) => {
  return (
    <div className="my-28 flex justify-center flex-wrap items-stretch mx-10 gap-12">
      <div className="max-w-[40rem] flex flex-col gap-8 md:gap-4">
        <h1 className="font-[600] text-xl md:text-4xl">What This Course Covers</h1>
        <p className="text-sm md:text-base">
          {paragraph}
        </p>
        <ul className="flex justify-center flex-col gap-4 text-sm md:text-base">
          <li className="flex items-center gap-1"><IoIosCheckmarkCircle className="text-[#20E4D1] text-xl"/>{item1}</li>
          <li className="flex items-center gap-1"><IoIosCheckmarkCircle className="text-[#20E4D1] text-xl"/>{item2}</li>
          <li className="flex items-center gap-1"><IoIosCheckmarkCircle className="text-[#20E4D1] text-xl"/>{item3}</li>
        </ul>
      </div>
      <div className="">
        <img className="size-[28rem] object-cover" src={img} alt="PhotoForDataScience" />
      </div>
    </div>
  );
};

AboutCourse.propTypes = {
  img: propType.string.isRequired,
  paragraph: propType.string.isRequired,
  item1: propType.string.isRequired,
  item2: propType.string.isRequired,
  item3: propType.string.isRequired,
};

export default AboutCourse;
