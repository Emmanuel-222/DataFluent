import Swal from 'sweetalert2'

import formIcon from "../../src/assets/Contact/frame-icon.png";
import phone from "../../src/assets/Contact/phone.png";
import location from "../../src/assets/Contact/location.png";
import mail from "../../src/assets/Contact/mail.png";

import { Footer } from "../components";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "038e052e-5630-4b8d-9984-54729365ba27");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: 'Success!',
        text: 'The message was sent successfully!',
        icon: 'success',
        customClass: {
          confirmButton: 'custom-button'
        },
        buttonsStyling: false,
      })
    }
  };

  return (
    <div className="text-[#FAFAFA] h-screen w-screen">
      <section className="contact-background flex flex-col justify-center items-center gap-20 px-6">
        <div className="text-center mt-0 md:mt-32">
          <h1 className="text-[3rem] text-white font-[600] mt-6 md:mt-0 mb-4">Contact Us</h1>
          <p className="text-[#BDBDBD]">
            Get in touch with our team - we’re ready to assist you
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex justify-center flex-wrap items-start gap-20 border-solid border-[1px] p-4 md:p-8 rounded-[32px] border-[#2F2F2F] bg-[#222222] mb-20">
          <div className="xl:max-w-96 relative">
            <div className="bg-[#30A599] pt-10 px-8 pb-64 rounded-[32px]">
              <div className="flex flex-col justify-center gap-4">
                <p className="font-[600] text-[20px]">Contact Information</p>
                <p className="text-wrap">
                  We’re here to help with all your business and educational
                  needs. Reach out and let’s start a conversation.
                </p>
              </div>
              <div className="mt-16 flex flex-col justify-between gap-8">
                <div className="flex items-center gap-4">
                  <img
                    className="size-[20px] md:size-[36px]"
                    src={phone}
                    alt="phone-icon"
                  />
                  <p>+234 810 652 2242</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    className="size-[20px] md:size-[36px]"
                    src={mail}
                    alt="mail-icon"
                  />
                  <p>datafluent@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    className="size-[20px] md:size-[36px]"
                    src={location}
                    alt="location-icon"
                  />
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
            </div>
            <img className='size-40 md:size-56 absolute bottom-4 right-0' src={formIcon} alt="rec" />
          </div>
          <div className="flex-col flex items-start flex-wrap justify-center gap-4">
            <div className="flex md:justify-center flex-wrap items-center gap-4">
              <label className="flex flex-col items-start gap-2 w-full md:w-auto">
                Name
                <input
                  className="bg-transparent text-[#797979] rounded-[16px] px-6 py-3 outline-none border-[#939393] border-[1px] border-solid w-full md:w-auto"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  name="name"
                />
              </label>
              <label className="flex flex-col items-start gap-2 w-full md:w-auto">
                Email
                <input
                  className="bg-transparent text-[#797979] rounded-[16px] px-6 py-3 outline-none border-[#939393] border-[1px] border-solid w-full md:w-auto"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  name="email"
                />
              </label>
            </div>
            <label className="flex flex-col items-start justify-center w-full gap-2">
              Subject
              <input
                className="bg-transparent w-full text-[#797979] rounded-[16px] px-6 py-3 outline-none border-[#939393] border-[1px] border-solid"
                placeholder="Subject"
                type="text"
                required
                name="subject"
              />
            </label>
            <label className="flex flex-col items-start justify-center w-full gap-2">
              Message
              <textarea
                className="bg-transparent w-full text-[#797979] rounded-[16px] px-3 py-3 outline-none border-[#939393] border-[1px] border-solid"
                placeholder="Write your message"
                required
                name="message"
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
