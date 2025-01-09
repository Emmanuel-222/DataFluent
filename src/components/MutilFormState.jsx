import { useState } from "react";
import { Input, RadioButton } from "../components";
// import { selectCourse } from "../utils";

const MultiStateForm = () => {
  const [formState, setFormState] = useState({
    inputValue1: "",
    inputValue2: "",
    inputValue3: "",
    inputValue4: "",
    inputValue5: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="w-full p-6 text-white rounded-lg">
      <form className="space-y-2 md:space-y-6 flex justify-center items-center flex-col">
        {/* Input Fields with Floating Labels */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-3/4 gap-2 md:gap-4">
          <Input
            type="text"
            name="inputValue1"
            value={formState.inputValue1}
            onChange={handleInputChange}
            input="First name"
          />
          <Input
            type="text"
            name="inputValue2"
            value={formState.inputValue2}
            onChange={handleInputChange}
            input="Last name"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-3/4 gap-2 md:gap-4">
          <Input
            type="email"
            name="inputValue3"
            value={formState.inputValue3}
            onChange={handleInputChange}
            input="Email Address"
          />
          <Input
            type="text"
            name="inputValue4"
            value={formState.inputValue4}
            onChange={handleInputChange}
            input="Phone Number"
          />
        </div>
        <div className="flex w-3/4 justify-center items-center">
          <Input
            type="email"
            name="inputValue5"
            value={formState.inputValue5}
            onChange={handleInputChange}
            input="Location"
          />
        </div>

        {/* Setting Mode */}
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Select Course<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Data Science" />
              <RadioButton item="DevOps" />
              <RadioButton item="Data Analysis" />
              <RadioButton item="Cyber Security" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Software Development" />
              <RadioButton item="Artificial Intelligence" />
              <RadioButton item="Digital Marketing" />
              <RadioButton item="Project Management" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Data Administration" />
              <RadioButton item="Data Engineering" />
              <RadioButton item="Mobile Development" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Current Status<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Student" />
              <RadioButton item="Freelancer" />
              <RadioButton item="Unemployed" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Employed (Tech role)" />
              <RadioButton item="Employed (Non Tech role)" />
              <RadioButton item="Changing career" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Business Owner" />
              <RadioButton item="Other" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Choose Schedule<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Weekdays" />
              <RadioButton item="Weekends" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Learning Mode<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Physical" />
              <RadioButton item="Online" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            How did you hear about us?<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Facbook" />
              <RadioButton item="Instagram" />
              <RadioButton item="Google" />
            </div>
            <div className="space-y-4">
              <RadioButton item="X (Twitter)" />
              <RadioButton item="Linkedin" />
              <RadioButton item="Friend/ Family" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Others" />
            </div>
          </div>
          <button
          type="submit"
          className="w-full bg-[#20E4D1] text-[#121212] text-[18px] font-[500] mt-28 rounded-[32px] py-3"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStateForm;
