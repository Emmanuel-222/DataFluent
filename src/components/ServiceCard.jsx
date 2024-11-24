import iconOne from "../../src/assets/card/icon-card1.png";
import iconTwo from "../../src/assets/card/icon-card2.png";
import iconThree from "../../src/assets/card/icon-card3.png";
import iconFour from "../../src/assets/card/icon-card4.png";
import iconFive from "../../src/assets/card/icon-card5.png";
import iconSix from "../../src/assets/card/icon-card6.png";


const ServiceCard = () => {
  return (
    <div className="flex gap-8 items-stretch justify-center cards-container">
          <div className="card bg1 flex-1 flex flex-col justify-between border-[1px] border-solid border-[#43E8D899] px-12 bg-[#1A1A1A] rounded-[32px] blur-[0.5px] pt-8 pb-10 bg-cover bg-center">
            <img
              className="h-[60px] w-[60px]"
              src={iconOne}
              alt="icon"
            />
            <div className="card-text flex flex-col self-stretch items-start gap-4">
              <h1 className="font-[600] text-[24px] mt-32">UI/UX design</h1>
              <p className="font-[400] text-[#B9B9B9]">
                Design intuitive, engaging user experiences that captivate your
                audience and enhance usability across all digital platforms.
              </p>
            </div>
          </div>
          <div className="card bg2 flex flex-1 flex-col justify-between border-[1px] border-solid border-[#43E8D899] px-12 bg-[#1A1A1A] rounded-[32px] blur-[0.5px] pt-8 pb-10 bg-cover bg-center">
            <img
              className="h-[60px] w-[60px]"
              src={iconTwo}
              alt="icon"
            />
            <div className="card-text flex flex-col self-stretch items-start gap-4">
              <h1 className="font-[600] text-[24px] mt-32">Brand management</h1>
              <p className="font-[400] text-[#B9B9B9]">
                Build and maintain a compelling brand presence that resonates
                with your audience and strengthens brand loyalty.
              </p>
            </div>
          </div>
          <div className="card bg3 flex flex-1 flex-col justify-between border-[1px] border-solid border-[#43E8D899] px-12 bg-[#1A1A1A] rounded-[32px] blur-[0.5px] pt-8 pb-10 bg-cover bg-center">
            <img
              className="h-[60px] w-[60px]"
              src={iconThree}
              alt="icon"
            />
            <div className="card-text flex flex-col self-stretch items-start gap-4">
              <h1 className="font-[600] text-[24px] mt-32">
                Project management
              </h1>
              <p className="font-[400] text-[#B9B9B9]">
                Ensure smooth project execution with expert management, from
                planning and coordination to delivery on time and within budget.
              </p>
            </div>
          </div>
          <div className="card bg4 flex flex-1 flex-col justify-between border-[1px] border-solid border-[#43E8D899] px-12 bg-[#1A1A1A] rounded-[32px] blur-[0.5px] pt-8 pb-10 bg-cover bg-center">
            <img
              className="h-[60px] w-[60px]"
              src={iconFour}
              alt="icon"
            />
            <div className="card-text flex flex-col self-stretch items-start gap-4">
              <h1 className="font-[600] text-[24px] mt-32">
                Full-stack web an app development
              </h1>
              <p className="font-[400] text-[#B9B9B9]">
                Create powerful, user-centric web and mobile applications
                tailored to meet your business needs from front to back.
              </p>
            </div>
          </div>
          <div className="card bg5 flex flex-1 flex-col justify-between border-[1px] border-solid border-[#43E8D899] px-12 bg-[#1A1A1A] rounded-[32px] blur-[0.5px] pt-8 pb-10 bg-cover bg-center">
            <img
              className="h-[60px] w-[60px]"
              src={iconFive}
              alt="icon"
            />
            <div className="card-text flex flex-col self-stretch items-start gap-4">
              <h1 className="font-[600] text-[24px] mt-32">
                Cybersecurity research assistance
              </h1>
              <p className="font-[400] text-[#B9B9B9]">
                Stay secure with comprehensive cybersecurity research and
                support, safeguarding your digital assets against emerging
                threats.
              </p>
            </div>
          </div>
          <div className="card bg6 flex flex-1 flex-col justify-between border-[1px] border-solid border-[#43E8D899] px-12 bg-[#1A1A1A] rounded-[32px] blur-[0.5px] pt-8 pb-10 bg-cover bg-center">
            <img
              className="h-[60px] w-[60px]"
              src={iconSix}
              alt="icon"
            />
            <div className="card-text flex flex-col self-stretch items-start gap-4">
              <h1 className="font-[600] text-[24px] mt-32">
                Data management and machine learning
              </h1>
              <p className="font-[400] text-[#B9B9B9]">
                Harness the power of data with seamless management and advanced
                machine learning solutions that drive informed decision-making.
              </p>
            </div>
          </div>
          <button className="btn bg-[#20E4D1] text-black my-8">
            Request a Consultation
          </button>
        </div>
  )
}

export default ServiceCard
