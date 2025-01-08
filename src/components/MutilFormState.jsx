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

  const data = [
    "Data Science",
    "DevOps",
    "Data Analysis",
    "Cyber Security",
    "Software Development",
    "Artificial Intelligence",
    "Digital Marketing",
    "Project Management",
    "Data Administration",
    "Data Engineering",
    "Mobile Development"
  ];

  return (
    <div className="w-full border-solid border-orange-600 border-2 p-6 bg-gray-900 text-white rounded-lg">
      <form className="space-y-6 flex justify-center items-center flex-col">
        {/* Input Fields with Floating Labels */}
        <div className="flex flex-wrap md:flex-nowrap border-green-500 border-solid border-2 justify-center items-center w-3/4 gap-4">
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
        <div className="flex flex-wrap md:flex-nowrap border-green-500 border-solid border-2 justify-center items-center w-3/4 gap-4">
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
        <div className="flex border-green-500 border-solid border-2 w-3/4 justify-center items-center">
          <Input
            type="email"
            name="inputValue5"
            value={formState.inputValue5}
            onChange={handleInputChange}
            input="Location"
          />
        </div>

        {/* Setting Mode */}
        <div className="flex flex-col items-start w-3/4 border-2 border-[#fb3748] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold">
            Select Course<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="radio-buttons">
            <RadioButton data={data}/>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultiStateForm;
