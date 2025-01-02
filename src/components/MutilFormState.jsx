import { useState } from "react";
import Input from "./Input";

const MultiStateForm = () => {
  const [formState, setFormState] = useState({
    inputValue1: "",
    inputValue2: "",
    inputValue3: "",
    inputValue4: "",
    inputValue5: "",
    checkboxes: {
      optionA: false,
      optionB: false,
      optionC: false,
      optionD: false,
    },
    generalStatus: {
      status1: false,
      status2: false,
      status3: false,
    },
    settingMode: "option1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (category, name) => {
    setFormState((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [name]: !prev[category][name],
      },
    }));
  };

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
          <div className="flex space-x-4 relative border-2 border-solid border-white">
            {["option1", "option2"].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="settingMode"
                  value={option}
                  checked={formState.settingMode === option}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      settingMode: e.target.value,
                    }))
                  }
                  className="peer hidden"
                />
                <span className="block w-8 h-8 rounded-full border-2 border-cyan-500 peer-checked:border-cyan-400"></span>
                <span className="absolute right-6 rounded-[32px] flex items-center justify-center border-solid border-red-600 border-2">
                  <span className="w-4 h-4 bg-cyan-500 rounded-full opacity-0 peer-checked:opacity-100"></span>
                </span>
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Checkboxes Section */}
        <div className="space-y-3">
          <h3 className="text-blue-400 text-sm font-medium">Select Options</h3>
          {Object.keys(formState.checkboxes).map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formState.checkboxes[option]}
                onChange={() => handleCheckboxChange("checkboxes", option)}
                className="form-checkbox h-4 w-4 text-blue-500 rounded"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>

        {/* General Status Section */}
        <div className="space-y-3">
          <h3 className="text-blue-400 text-sm font-medium">General Status</h3>
          {Object.keys(formState.generalStatus).map((status) => (
            <label key={status} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formState.generalStatus[status]}
                onChange={() => handleCheckboxChange("generalStatus", status)}
                className="form-checkbox h-4 w-4 text-blue-500 rounded"
              />
              <span className="text-sm">{status}</span>
            </label>
          ))}
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
