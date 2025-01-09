import { useForm } from "react-hook-form";
import { Input, RadioButton } from "../components";

const MultiStateForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  console.log(errors)
  return (
    <div className="w-full p-6 text-white rounded-lg">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="space-y-2 md:space-y-6 flex justify-center items-center flex-col"
      >
        {/* Input Fields with Floating Labels */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-3/4 gap-2 md:gap-4">
          <Input type="text" input="First name" register={register} name="firstName" required/>
          <Input type="text" name="LastName" input="Last name" register={register} required />
        </div>
        {/* <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-3/4 gap-2 md:gap-4">
          <Input
            type="email"
            name="inputValue3"
            value={inputValue3}
            input="Email Address"
          />
          <Input
            type="text"
            name="inputValue4"
            value={inputValue4}
            input="Phone Number"
          />
        </div>
        <div className="flex w-3/4 justify-center items-center">
          <Input
            type="email"
            name="inputValue5"
            value={inputValue5}
            input="Location"
          />
        </div> */}

        {/* Setting Mode */}
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Select Course<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Data Science" option="course" />
              <RadioButton item="DevOps" option="course" />
              <RadioButton item="Data Analysis" option="course" />
              <RadioButton item="Cyber Security" option="course" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Software Development" option="course" />
              <RadioButton item="Artificial Intelligence" option="course" />
              <RadioButton item="Digital Marketing" option="course" />
              <RadioButton item="Project Management" option="course" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Data Administration" option="course" />
              <RadioButton item="Data Engineering" option="course" />
              <RadioButton item="Mobile Development" option="course" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Current Status<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Student" option="status" />
              <RadioButton item="Freelancer" option="status" />
              <RadioButton item="Unemployed" option="status" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Employed (Tech role)" option="status" />
              <RadioButton item="Employed (Non Tech role)" option="status" />
              <RadioButton item="Changing career" option="status" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Business Owner" option="status" />
              <RadioButton item="Other" option="status" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Choose Schedule<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Weekdays" option="schedule" />
              <RadioButton item="Weekends" option="schedule" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Learning Mode<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Physical" option="mode" />
              <RadioButton item="Online" option="mode" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            How did you hear about us?<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Facbook" option="via" />
              <RadioButton item="Instagram" option="via" />
              <RadioButton item="Google" option="via" />
            </div>
            <div className="space-y-4">
              <RadioButton item="X (Twitter)" option="via" />
              <RadioButton item="Linkedin" option="via" />
              <RadioButton item="Friend/ Family" option="via" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Others" option="via" />
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
