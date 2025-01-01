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
import DevopsImg from "../../src/assets/academy/course-11.png";
import devops from "../../src/assets/about-course/devops.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";

const Devops = () => {
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
      title: "Introduction to DevOps",
      content:
        "Explore the principles of DevOps, its benefits, and how it bridges the gap between development and operations.",
    },
    {
      title: "Version Control with Git",
      content: "This is the content of Section 2.",
    },
    {
      title: "Continuous Integration/Continuous Delivery (CI/CD)",
      content: "This is the content of Section 1.",
    },
    {
      title: "Containerization with Docker",
      content: "This is the content of Section 2.",
    },
    {
      title: "Orchestration with Kubernetes",
      content: "This is the content of Section 1.",
    },
    {
      title: "Infrastructure as Code (IaC)",
      content: "This is the content of Section 2.",
    },
    {
      title: " Cloud Platforms for DevOps",
      content: "This is the content of Section 1.",
    },
    {
      title: "Monitoring and Logging",
      content: "This is the content of Section 2.",
    },
    {
      title: "DevOps Security (DevSecOps)",
      content: "This is the content of Section 2.",
    },
    { title: "Capstone Project", content: "This is the content of Section 2." },
  ];

  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col bg-black w-screen">
      <GradientBackground />
        <MainContent
          title={"DevOps"}
          paragraph="Learn CI/CD, automation, and cloud deployment to streamline development and operations collaboration."
          img={DevopsImg}
          size={"4rem"}
        />
        <NextCohort />
        <AboutCourse
          paragraph="This course introduces you to the world of DevOps, focusing on the practices, tools, and methodologies that streamline software development and IT operations. Learn to build, deploy, and manage applications efficiently using industry-standard tools like Docker, Kubernetes, and Jenkins. Gain hands-on experience with CI/CD pipelines, cloud computing, and infrastructure as code, preparing you to excel in a fast-paced DevOps environment."
          item1={
            "Understand the fundamentals of DevOps culture and its impact on software delivery"
          }
          item2={
            "Explore cloud platforms like AWS, Azure, and Google Cloud for DevOps workflows"
          }
          item3={
            "Learn how to monitor applications and analyze logs for performance optimization"
          }
          img={devops}
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
      <EnrollToday price="250,000" />
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Footer />
    </div>
  );
};

export default Devops;
