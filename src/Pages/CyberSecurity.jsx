import {
  AcademyCard,
  Footer,
  Testimonial,
  MainContent,
  AboutCourse,
  Accordion,
  GradientBackground,
} from "../components";
import NextCohort from "../components/NextCohort";

import imageOne from "../../src/assets/course-academyCard/Frame-1.png";
import imageTwo from "../../src/assets/course-academyCard/Frame-2.png";
import imageThree from "../../src/assets/course-academyCard/Frame-3.png";
import imageFour from "../../src/assets/course-academyCard/Frame-4.png";
import imageFive from "../../src/assets/course-academyCard/Frame-5.png";
import imageSix from "../../src/assets/course-academyCard/Frame-6.png";
import profileOne from "../../src/assets/card/image1.png";
import profileTwo from "../../src/assets/card/image2.png";
import CyberSecurityImg from "../../src/assets/academy/course-7.png";
import cyberSecurity from "../../src/assets/about-course/cyberSecurity.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";

const CyberSecurity = () => {
  const testimonials = [
    {
      name: "Seun Lawrence",
      testimony:
        "DataFluent Enterprise transformed our digital presence. Their team brought our vision to life with sleek, intuitive website that has driven customer engagement to new heights!",
      profile: profileOne,
      company: "Darren Hub",
    },
    {
      name: "David John",
      testimony:
        "Thanks to DataFluent Academy, our team gained essential skills in data analysis. The training was practical and effective, equipping us to handle real-world challenges confidently.",
      profile: profileTwo,
      company: "Kravit Consult",
    },
  ];

  const data = [
    {
      title: "Introduction to Cybersecurity",
      content:
        "Understand the importance of cybersecurity, its key principles, and the current threat landscape.",
    },
    {
      title: "Network Security Basics",
      content: "This is the content of Section 2.",
    },
    {
      title: "Cryptography and Data Protection",
      content: "This is the content of Section 1.",
    },
    {
      title: "Ethical Hacking and Penetration Testing",
      content: "This is the content of Section 2.",
    },
    {
      title: "Malware and Threat Analysis",
      content: "This is the content of Section 1.",
    },
    {
      title: "Risk Assessment and Management",
      content: "This is the content of Section 2.",
    },
    {
      title: "Incident Response and Recovery",
      content: "This is the content of Section 1.",
    },
    {
      title: "Cloud Security Fundamentals",
      content: "This is the content of Section 2.",
    },
    {
      title: "Cybersecurity Tools and Techniques",
      content: "This is the content of Section 2.",
    },
    { title: "Capstone Project", content: "This is the content of Section 2." },
  ];

  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col bg-black w-screen">
        <GradientBackground />
        <MainContent
          title={"Cyber Security"}
          paragraph="Learn and develop processes and tools to protect systems, and networks."
          img={CyberSecurityImg}
          size={"3rem"}
        />
        <NextCohort />
        <AboutCourse
          paragraph="This course equips you with the essential skills and knowledge to protect digital systems and data from cyber threats. Explore key concepts like network security, ethical hacking, risk management, and cryptography while gaining hands-on experience with tools used by cybersecurity professionals. Designed for both beginners and professionals, this course prepares you for a career in one of the most in-demand fields of the tech industry."
          item1={"Learn how to secure and monitor network systems"}
          item2={
            "Develop strategies to assess and mitigate cybersecurity risks"
          }
          item3={"Explore encryption techniques to protect sensitive data"}
          img={cyberSecurity}
        />
        <Accordion data={data} />
      </section>
      <section className="flex items-center flex-col bg-black w-screen gap-8">
        <h1 className="font-[600] text-[20px] md:text-[40px]">
          Why Enroll in This Course?
        </h1>
        <div className="flex justify-center items-stretch gap-4 flex-wrap w-screen bg-black mx-4 px-4 md:px-28">
          <AcademyCard
            title="Hands-On Project"
            img={imageOne}
            paragraph="Work on real-world scenarios."
          />
          <AcademyCard
            title="Expert Instructors"
            img={imageTwo}
            paragraph="Learn from seasoned professionals."
          />
          <AcademyCard
            title="Certification"
            img={imageThree}
            paragraph="Receive a recognized certificate of completion."
          />
          <AcademyCard
            title="Community Access"
            img={imageFour}
            paragraph="Join a network of like-minded learners."
          />
          <AcademyCard
            title="Mentorship"
            img={imageFive}
            paragraph="You’ll have a 1-on-1 session from a dedicated career coach."
          />
          <AcademyCard
            title="Internship Placement"
            img={imageSix}
            paragraph="Gain valuable industry experience through internship."
          />
        </div>
      </section>
      <GradWorkIn />
      <EnrollToday price="400,000" />
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Footer />
    </div>
  );
};

export default CyberSecurity;
