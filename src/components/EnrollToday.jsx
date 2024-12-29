import { TbCurrencyNaira } from "react-icons/tb";

const EnrollToday = () => {
  return (
    <div className="flex items-center py-40 md:px-32 justify-between gap-8 flex-col bg-black w-screen">
      <h1 className="font-[600] text-xl md:text-[40px]">Enroll Today</h1>
      <div className="enroll-to-shadow flex flex-col justify-center items-center border-[#2F2F2F99] border-[1px] border-solid py-8 px-[4.5rem] sm:px-28 md:px-40 gap-8 rounded-[32px] mx-8 bg-[#1A1A1AB2]">
        <div className="flex gap-10 justify-center items-center">
          <div className="size-[10px] bg-[#20E4D1] rounded-full"></div>
          <h1 className="text-xl md:text-[48px] font-[600] flex items-center gap-1">
            <TbCurrencyNaira />
            300,000
          </h1>
          <div className="size-[10px] bg-[#20E4D1] rounded-full"></div>
        </div>
        <ul className="flex flex-col gap-4 text-[14px] md:text-xl items-center font-light">
          <li>Training & Mentorship</li>
          <li>Flexible Schedule</li>
          <li>Online Live Interaction Section</li>
          <li>Recorded Session after the Class</li>
          <li>Industry-recognized Certificate</li>
        </ul>
        <button className="btn w-full text-[#20E4D1] mt-8">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default EnrollToday;
