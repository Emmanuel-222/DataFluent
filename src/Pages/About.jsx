import { Footer, Card } from "../components";

const About = () => {
  return (
    <div className="h-screen w-full text-[#FAFAFA] ">
      <section className="about-background flex items-center pt-10 md:pt-40 justify-center flex-col bg-black w-screen">
        <div className="title text-center mb-32 px-4 md:px-0">
          <h1 className="font-[700] text-[2rem] md:text-[4rem] text-center">
            About Us
          </h1>
          <p className="text-[#BDBDBD] text-base md:text-[20px] font-[400]">
            Driving innovation in digital solutions and professional training
          </p>
        </div>
        <div className="about-card flex flex-col justify-center items-center bg-[#1A1A1A] border-solid border-2 border-[#2F2F2F] mb-64 my-0 mx-auto w-[80%] p-10 md:p-20 rounded-[32px] text-center text-white">
          <p className="mb-4 text-[18px]">
            At DataFluent Enterprise, we are dedicated to advancing both
            businesses and individuals in today’s digital world. Through our
            dual focus, DataFluent Services and DataFluent Academy, we provide
            comprehensive digital solutions and educational programs tailored to
            meet the needs of a tech-driven future.
          </p>
          <p className="mb-4 text-[18px]">
            DataFluent Services offers expert-driven support in full-stack
            development, data management, machine learning, UX/UI design, and
            cybersecurity. We work closely with our clients to deliver impactful
            solutions that propel their digital transformation, ensuring they
            stay ahead in a competitive landscape.
          </p>
          <p className="mb-4 text-[18px]">
            DataFluent Academy equips aspiring professionals with knowledge and
            skills required for success in high-demand fields such as Data
            Science, Web Development, and Cybersecurity. Our industry-aligned
            training programs are designed to empower learners with practical
            expertise, preparing them to thrive in their careers.
          </p>
          <p className="mb-4 text-[18px]">
            Whether you’re seeking top-tier digital services or looking to
            enhance your skills, DataFluent Enterprise is your partner in growth
            and innovation. Join us as we shape the future, one solution and one
            student at a time.
          </p>
        </div>
        <Card
          title={"Take the Next Step with DataFluent"}
          showButton={true}
          buttonText={"Request a Consultation"}
        />
        <Footer />
      </section>
    </div>
  );
};

export default About;
