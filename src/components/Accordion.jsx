import { useState } from "react";

import propType from "prop-types"

import { IoChevronForward } from "react-icons/io5";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active section

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle section
  };

  return (
    <div className="accordion flex flex-col gap-4 justify-center w-[95%] md:w-[70%] mt-10 mb-40">
        <h1 className="text-center text-[20px] md:text-[40px] font-[600]">Course Curriculum</h1>
      {data.map((item, index) => (
        <div className="accordion-item bg-[#222222] rounded-[32px] items-start" key={index}>
          <button onClick={() => toggleSection(index)} className="accordion-header text-left w-full p-4 md:p-6 cursor-pointer flex justify-between items-center">
            <p className="text-[14px] md:text-[24px] font-[600]">{item.title}</p>
            <IoChevronForward className={activeIndex === index ? `-rotate-90 text-xl` : `rotate-90 text-xl`}/>
          </button>
          {activeIndex === index && (
            <div className="accordion-content text-left px-4 md:px-6 pt-0 md:pt-4 py-4">
              <p className="font-[400] text-sm md:text-[18px] text-left">{item.content}</p>
            </div>
          )}
        </div>
      ))
      }
    </div>
  );
};

Accordion.propTypes = {
  data: propType.array.isRequired,
};
  
export default Accordion;
