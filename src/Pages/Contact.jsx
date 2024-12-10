import formRectangle from "../../src/assets/Contact/Frame 1618873507.png";
import phone from "../../src/assets/Contact/phone.png";
import location from "../../src/assets/Contact/location.png";
import mail from "../../src/assets/Contact/mail.png";

import { Footer } from "../components";

const Contact = () => {
  return (
    <div className="text-[#FAFAFA] h-screen w-screen">
      <section className="contact-background flex flex-col justify-center items-center gap-20">
        <div className="text-center mt-4 md:mt-32">
          <h1 className="text-[3rem] text-white font-[600] mb-4">Contact Us</h1>
          <p className="text-[#BDBDBD]">
            Get in touch with our team - we’re ready to assist you
          </p>
        </div>
        <form className="flex justify-center items-start gap-20 border-solid border-[1px] p-8 rounded-[32px] border-[#2F2F2F] bg-[#222222] mb-20">
          <div className="w-full md:max-w-96 relative">
            <img src={formRectangle} alt="rec" />
            <div className="absolute top-16 left-4">
              <div className="flex flex-col justify-center gap-4">
                <p className="font-[600] text-[20px]">Contact Information</p>
                <p className="text-wrap">
                  We’re here to help with all your business and educational
                  needs. Reach out and let’s start a conversation.
                </p>
              </div>
              <div className="mt-16 flex flex-col justify-between gap-8">
                <div className="flex items-center gap-4">
                  <img className="w-[36px] h-[36px]" src={phone} alt="phone-icon" />
                  <p>+234 810 652 2242</p>
                </div>
                <div className="flex items-center gap-4">
                  <img className="w-[36px] h-[36px]" src={mail} alt="mail-icon" />
                  <p>datafluent@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <img className="w-[36px] h-[36px]" src={location} alt="location-icon" />
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col flex items-start justify-center gap-4">
            <div className="flex justify-center items-center gap-4">
              <label className="flex flex-col items-start gap-2">
                Name
                <input
                  className="bg-transparent text-[#797979] rounded-[16px] px-6 py-3 outline-none border-[#939393] border-[1px] border-solid"
                  type="text"
                  placeholder="Enter your full name"
                />
              </label>
              <label className="flex flex-col items-start gap-2">
                Email
                <input
                  className="bg-transparent text-[#797979] rounded-[16px] px-6 py-3 outline-none border-[#939393] border-[1px] border-solid"
                  type="email"
                  placeholder="Enter your email address"
                />
              </label>
            </div>
            <label className="flex flex-col items-start justify-center w-full gap-2">
              Subject
              <input
                className="bg-transparent w-full text-[#797979] rounded-[16px] px-6 py-3 outline-none border-[#939393] border-[1px] border-solid"
                placeholder="Subject"
                type="text"
              />
            </label>
            <label className="flex flex-col items-start justify-center w-full gap-2">
              Message
              <textarea
                className="bg-transparent w-full text-[#797979] rounded-[16px] px-3 py-3 outline-none border-[#939393] border-[1px] border-solid"
                placeholder="Write your message"
              ></textarea>
            </label>
            <button className="btn w-full md:w-60 mt-0 md:mt-10 bg-[#43E8D8] text-black">
              Send Message
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
