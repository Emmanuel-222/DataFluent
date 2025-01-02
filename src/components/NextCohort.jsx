import { Link } from "react-router-dom";

const NextCohort = () => {
  return (
    <div className="border-[#2F2F2F] border-[1px] rounded-[32px] p-12 flex gap-20 flex-wrap mx-8 justify-center items-center border-solid bg-[#222222]">
      <div className="flex justify-center flex-wrap gap-12 items-stretch">
        <div className="text-center">
          <p className="text-[#BDBDBD] text-sm">Next Cohort</p>
          <p className="text-base">10th December, 2024</p>
        </div>
        <div className="text-center">
          <p className="text-[#BDBDBD] text-sm">Duration</p>
          <p className="text-base">12 Weeks</p>
        </div>
        <div className="text-center">
          <p className="text-[#BDBDBD] text-sm">Schedule</p>
          <p className="text-base">Twice Weekdays 10am - 2pm</p>
          <p className="text-base">or Saturdays 10am - 5pm</p>
        </div>
        <div className="text-center">
          <p className="text-[#BDBDBD] text-sm">Format</p>
          <p className="text-base">Physical or Online</p>
        </div>
      </div>
      <Link to={"/enroll"}>
        <button className="btn bg-[#20E4D1] text-black w-full md:w-48">
          Enroll Now
        </button>
      </Link>
    </div>
  );
};

export default NextCohort;
