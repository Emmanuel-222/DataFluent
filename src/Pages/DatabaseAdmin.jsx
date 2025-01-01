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
import DatabaseAdminImg from "../../src/assets/academy/course-3.png";
import databaseAdmin from "../../src/assets/about-course/databaseAdmin.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";

const DatabaseAdmin = () => {
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
      title: "Introduction to Database Administration",
      content:
        "Gain a foundational understanding of data science, its importance, and how it drives decision-making in various industries. Learn key concepts, tools, and data lifecycle.",
    },
    {
      title: "Relational Database Design",
      content: "This is the content of Section 2.",
    },
    {
      title: "SQL Basics and Advanced Querying",
      content: "This is the content of Section 1.",
    },
    {
      title: "Database Installation and Configuration",
      content: "This is the content of Section 2.",
    },
    { 
        title: "Backup and Recovery Strategies", 
        content: "This is the content of Section 1." 
    },
    { 
        title: "Database Security", 
        content: "This is the content of Section 2." },
    {
      title: "Performance Optimization",
      content: "This is the content of Section 1.",
    },
    { 
        title: "NoSQL Databases", 
        content: "This is the content of Section 2." 
    },
    { 
        title: "Monitoring and Maintenance", 
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
        <GradientBackground />
        <MainContent
          title={"Data Adminstration"}
          paragraph="Gain skills in database management, security, and performance tuning for high-availability systems."
          img={DatabaseAdminImg}
          size={"60px"}
        />
        <NextCohort />
        <AboutCourse
          paragraph={
            "This course provides a comprehensive guide to database administration, equipping you with the skills to design, manage, and secure databases for enterprise-level applications. Learn how to optimize performance, ensure data integrity, and implement backup and recovery strategies using industry-standard tools. With hands-on training and real-world projects, this course prepares you for a career as a database administrator in today’s data-driven world."
          }
          item1={"Learn to design logical and physical database structures for optimal performance"}
          item2={"Gain expertise with platforms like MySQL, PostgreSQL, and Oracle"}
          item3={"Understand how to protect databases from breaches using encryption and access control"}
          img={databaseAdmin}
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
      <EnrollToday price="250,000"/>
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Footer />
    </div>
  );
};

export default DatabaseAdmin;
