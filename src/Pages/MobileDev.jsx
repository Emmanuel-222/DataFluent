import {
  AcademyCard,
  Footer,
  Testimonial,
  MainContent,
  AboutCourse,
  Accordion,
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
import MobileDevImg from "../../src/assets/academy/course-5.png";
import mobileDev from "../../src/assets/about-course/mobileDev.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";

const MobileDev = () => {
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
      title: "Introduction to Mobile Development",
      content:
        "Understand the basics of mobile app development, the differences between native and cross-platform apps, and the tools used in the industry.",
    },
    {
      title: "Programming Basics for Mobile Development",
      content: "This is the content of Section 2.",
    },
    {
      title: "UI/UX Design for Mobile Apps",
      content: "This is the content of Section 1.",
    },
    {
      title: "Cross-Platform Development with Flutter or React Native",
      content: "This is the content of Section 2.",
    },
    { 
        title: "API Integration", 
        content: "This is the content of Section 1." 
    },
    { 
        title: "Database Integration and Backend Connectivity", 
        content: "This is the content of Section 2." },
    {
      title: "Mobile App Testing",
      content: "This is the content of Section 1.",
    },
    { 
        title: "App Deployment", 
        content: "This is the content of Section 2." 
    },
    { 
        title: "Advanced Features and Optimization", 
        content: "This is the content of Section 2." 
    },
    { 
        title: "Capstone Project", 
        content: "This is the content of Section 2." 
    },
  ];

  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col bg-black w-screen">
        <MainContent
          title={"Mobile Development"}
          paragraph="Build, test, and deploy mobile applications with a focus on user experience and functionality."
          img={MobileDevImg}
          size={"3rem"}
        />
        <NextCohort />
        <AboutCourse
          paragraph={
            "This course provides a comprehensive introduction to mobile application development, equipping you with the skills to design, build, and deploy robust apps for iOS and Android platforms. Learn to code with industry-standard programming languages and frameworks while mastering UI/UX design principles for mobile. Through hands-on projects, this course prepares you to create functional, user-friendly apps that meet real-world demands."
          }
          item1={"Learn to build apps for both iOS and Android using frameworks like Flutter or React Native"}
          item2={
            "Learn to connect apps to databases using Firebase or SQLite for real-time data management"
          }
          item3={
            "Build apps that interact with external APIs for advanced functionality"
          }
          img={mobileDev}
        />
        <Accordion data={data}/>
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
      <EnrollToday price="700,000"/>
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Footer />
    </div>
  );
};

export default MobileDev;
