import profileOne from "../../src/assets/card/image1.png";
import profileTwo from "../../src/assets/card/image2.png";

const Testimonial = () => {
  return (
    <section className="flex items-center py-14 md:px-32 justify-between gap-8 flex-col bg-black w-screen">
        <div className="top text-center">
          <h1 className="font-[500] text-[#20E4D1] text-base md:text-[20px]">
            Testimonials
          </h1>
          <h1 className="font-[600] text-[24px] md:text-[40px] text-[#FAFAFA]">
            What clients say
          </h1>
        </div>
        <div className="bottom cards-container">
          <div className="left-quote-bg flex justify-center items-end flex-col bg-[#1A1A1A] rounded-[32px] border-solid border-[#2F2F2F] border-[1px] py-14 px-6 lg:px-10 lg:max-w-[49%]">
            <p className="text-[#B9B9B9] text-[15px] font-[400] mt-20 lg:mt-0 lg:ml-40">
              DataFluent Enterprise transformed our digital presence. Their team
              brought our vision to life with sleek, intuitive website that has
              driven customer engagement to new heights!
            </p>
            <div className="flex justify-start lg:justify-center items-center gap-4 mt-10 w-full md:w-[90%]">
              <img
                className="h-16 w-16"
                src={profileOne}
                alt="profile-img"
              />
              <div className="name">
                <h1 className="font-[500] text-[#FAFAFA]">Seun Lawrence</h1>
                <span className="font-[500] text-[#B9B9B9]">Darren Hub</span>
              </div>
            </div>
          </div>
          <div className="left-quote-bg flex justify-center items-end flex-col bg-[#1A1A1A] rounded-[32px] border-solid border-[#2F2F2F] border-[1px] py-14 px-6 lg:px-10 lg:max-w-[49%]">
            <p className="text-[#B9B9B9] text-[15px] font-[400] mt-20 lg:mt-0 lg:ml-40">
              Thanks to DataFluent Academy, our team gained essential skills in
              data analysis. The training was practical and effective, equipping
              us to handle real-world challenges confidently.
            </p>
            <div className="flex justify-start lg:justify-center items-center gap-4 mt-10 w-full lg:w-[90%]">
              <img
                className="h-16 w-16"
                src={profileTwo}
                alt="profile-img"
              />
              <div className="name">
                <h1 className="font-[500] text-[#FAFAFA]">David John</h1>
                <span className="font-[500] text-[#B9B9B9]">
                  Kravit Consult
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonial
