import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, RadioButton } from "../components";

const MultiStateForm = () => {
  const [location, setLocation] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  return (
    <div className="w-full p-6 text-white rounded-lg">
      <form
        onSubmit={handleSubmit((data) => {
          console.log({ ...data, location });
        })}
        className="space-y-2 md:space-y-6 flex justify-center items-center flex-col"
      >
        {/* Input Fields with Floating Labels */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-3/4 gap-2 md:gap-4">
          <div className="flex justify-center items-start flex-col space-y-1 w-full mb-2">
            <Input
              type="text"
              input="First name"
              register={register}
              name="firstName"
              required
            />
            <div className="h-5">
              {errors.firstName && (
              <span className="sm:text-[0.75rem] md:text-sm text-[#FB3748] text-[0.525rem]">
                {errors.firstName.message}
              </span>
            )}
            </div>
            
          </div>
          <div className="flex justify-center items-start flex-col space-y-1 w-full mb-2">
            <Input
              type="text"
              name="lastName"
              input="Last name"
              register={register}
              required
            />
            <div className="h-5">
              {errors.lastName && (
                <span className="sm:text-[0.75rem] md:text-sm text-[#FB3748] text-[0.525rem]">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-3/4 gap-2 md:gap-4">
          <div className="flex justify-center items-start flex-col space-y-1 w-full mb-2">
            <Input
              type="text"
              name="emailAddress"
              register={register}
              input="Email Address"
              required={true}
              validation={{
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              }}
            />
            <div className="h-5">
              {errors.emailAddress && (
                <span className="sm:text-[0.75rem] md:text-sm text-[#FB3748] text-[0.525rem]">
                  {errors.emailAddress.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-center items-start flex-col space-y-1 w-full mb-2">
            <Input
              type="number"
              name="phoneNumber"
              register={register}
              input="Phone Number"
              required
            />
            <div className="h-5">
              {errors.phoneNumber && (
                <span className="sm:text-[0.75rem] md:text-sm text-[#FB3748] text-[0.525rem]">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-3/4 justify-center items-center">
          <Input
            type="text"
            name="location"
            input="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Setting Mode */}
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Select Course<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton register={register} required={true} item="Data Science" name="course" error={errors.course} />
              <RadioButton register={register} required={true} item="DevOps" name="course" error={errors.course} />
              <RadioButton register={register} required={true} item="Data Analysis" name="course" error={errors.course} />
              <RadioButton register={register} required={true} item="Cyber Security" name="course" error={errors.course} />
            </div>
            <div className="space-y-4">
              <RadioButton item="Software Development" name="course" register={register} required={true} error={errors.course} />
              <RadioButton item="Artificial Intelligence" name="course" register={register} required={true} error={errors.course} />
              <RadioButton item="Digital Marketing" name="course" register={register} required={true} error={errors.course} />
              <RadioButton item="Project Management" name="course" register={register} required={true} error={errors.course} />
            </div>
            <div className="space-y-4">
              <RadioButton register={register} required={true} error={errors.course} item="Data Administration" name="course" />
              <RadioButton register={register} required={true} error={errors.course} item="Data Engineering" name="course" />
              <RadioButton register={register} required={true} error={errors.course} item="Mobile Development" name="course" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Current Status<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton item="Student" register={register} required={true} error={errors.status} name="status" />
              <RadioButton item="Freelancer" register={register} required={true} error={errors.status} name="status" />
              <RadioButton item="Unemployed" register={register} required={true} error={errors.status} name="status" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Employed (Tech role)" register={register} required={true} error={errors.status} name="status" />
              <RadioButton item="Employed (Non Tech role)" register={register} required={true} error={errors.status} name="status" />
              <RadioButton item="Changing career" register={register} required={true} error={errors.status} name="status" />
            </div>
            <div className="space-y-4">
              <RadioButton item="Business Owner" register={register} required={true} error={errors.status} name="status" />
              <RadioButton item="Other" register={register} required={true} error={errors.status} name="status" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Choose Schedule<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton register={register} required={true} error={errors.schedule} item="Weekdays" name="schedule" />
              <RadioButton register={register} required={true} error={errors.schedule} item="Weekends" name="schedule" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12 border-b-[1px] border-[#464646] border-solid">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            Learning Mode<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton register={register} required={true} error={errors.mode} item="Physical" name="mode" />
              <RadioButton register={register} required={true} error={errors.mode} item="Online" name="mode" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-3/4 pb-6 md:pb-12">
          <h3 className="text-[#FAFAFA] text-2xl font-semibold mb-2 md:mb-6">
            How did you hear about us?<span className="text-[#FB3748]">*</span>
          </h3>
          <div className="flex text-white flex-wrap sm:gap-6 md:gap-8 lg:gap-16 justify-between">
            <div className="space-y-4">
              <RadioButton register={register} required={true} error={errors.via} item="Facbook" name="via" />
              <RadioButton register={register} required={true} error={errors.via} item="Instagram" name="via" />
              <RadioButton register={register} required={true} error={errors.via} item="Google" name="via" />
            </div>
            <div className="space-y-4">
              <RadioButton register={register} required={true} error={errors.via} item="X (Twitter)" name="via" />
              <RadioButton register={register} required={true} error={errors.via} item="Linkedin" name="via" />
              <RadioButton register={register} required={true} error={errors.via} item="Friend/ Family" name="via" />
            </div>
            <div className="space-y-4">
              <RadioButton register={register} required={true} error={errors.via} item="Others" name="via" />
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
