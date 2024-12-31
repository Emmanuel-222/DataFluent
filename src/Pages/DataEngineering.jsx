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
import DataEngineeringImg from "../../src/assets/academy/course-2.png";
import dataEng from "../../src/assets/about-course/dataEng.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";

const DataEngineering = () => {
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
      title: "Introduction to Data Engineering",
      content:
        "Gain a foundational understanding of data science, its importance, and how it drives decision-making in various industries. Learn key concepts, tools, and data lifecycle.",
    },
    {
      title: "Introduction to Python",
      content: "This is the content of Section 2.",
    },
    {
      title: "Python for visualization, pipeline, and web scraping",
      content: "This is the content of Section 1.",
    },
    {
      title: "SQL Fundamentals",
      content: "This is the content of Section 2.",
    },
    { 
        title: "Advanced SQL", 
        content: "This is the content of Section 1." 
    },
    { 
        title: "Database management and Data warehousing", 
        content: "This is the content of Section 2." },
    {
      title: "Introduction to Linux",
      content: "This is the content of Section 1.",
    },
    { 
        title: "Integrated Development Environment (IDE) and Version Control", 
        content: "This is the content of Section 2." 
    },
    { 
        title: "Non-Relational Databases", 
        content: "This is the content of Section 2." 
    },
    { 
        title: "Introduction to MongoDB", 
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
          title={"Data Engineering"}
          paragraph="Learn to build and optimize data pipelines, ensuring reliable and efficient data flow for analytics"
          img={DataEngineeringImg}
          size={"70px"}
        />
        <NextCohort />
        <AboutCourse
          paragraph={
            "This course equips you with the skills to design, build, and maintain scalable data infrastructure. Learn how to process and manage large datasets efficiently using industry-standard tools and techniques. From mastering ETL pipelines to deploying cloud-based solutions, this course prepares you for a critical role in today’s data-driven organizations. Perfect for anyone looking to dive into the world of big data and analytics."
          }
          item1={"Learn to create robust and efficient ETL processes"}
          item2={"Gain expertise in SQL and NoSQL databases"}
          item3={"Master cloud platforms like AWS, Google Cloud, and Azure"}
          img={dataEng}
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
      <EnrollToday price="500,000"/>
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Footer />
    </div>
  );
};

export default DataEngineering;
