import DataScienceImg from "../../src/assets/academy/course-1.png";
import firstImg from "../../src/assets/main-content/Fireworks Half.png";
import secondImg from "../../src/assets/main-content/Group 444.png";

const MainContent = () => {
  return (
    <div className="">
      {/* bigger screen */}
      <div className="hidden md:flex justify-center items-stretch mx-10 my-20 gap-12 flex-wrap">
        <div className="max-w-[36rem] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <img className="size-20" src={firstImg} alt="firstPhoto" />
            <img className="size-20" src={secondImg} alt="secondPhoto" />
          </div>
          <h1 className="text-3xl md:text-[72px] font-[700]">Data Science</h1>
          <p className="text-wrap text-[#fafafa]">
            Master data analysis, visualization, and machine learning to uncover
            insights and drive decision-making.
          </p>
          <button className="btn w-full md:w-48 bg-[#20E4D1] text-[#121212] mt-8">
            Enroll Now
          </button>
        </div>
        <div>
          <img
            className="size-[28rem] object-contain"
            src={DataScienceImg}
            alt="DataScience-photo"
          />
        </div>
      </div>
      {/* smaller screen */}
      <div className="flex justify-center items-stretch mx-10 mb-20 gap-12 flex-wrap md:hidden">
        <div>
          <img
            className="size-[28rem] object-contain"
            src={DataScienceImg}
            alt="DataScience-photo"
          />
        </div>
        <div className="max-w-[36rem] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <img className="size-20" src={firstImg} alt="firstPhoto" />
            <img className="size-20" src={secondImg} alt="secondPhoto" />
          </div>
          <h1 className="text-3xl md:text-[72px] font-[700]">Data Science</h1>
          <p className="text-wrap text-[#fafafa]">
            Master data analysis, visualization, and machine learning to uncover
            insights and drive decision-making.
          </p>
          <button className="btn w-full md:w-48 bg-[#20E4D1] text-[#121212] mt-8">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
