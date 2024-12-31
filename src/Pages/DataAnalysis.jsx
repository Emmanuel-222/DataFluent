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
import DataAnalysisImg from "../../src/assets/academy/course-4.png";
import dataAnalysis from "../../src/assets/about-course/dataAnalysis.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";

const DataAnalysis = () => {
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
      title: "Introduction to Data Analysis",
      content:
        "Understand the basics of data analysis, its importance, and the key steps involved in turning raw data into actionable insights.",
    },
    {
      title: "Data Cleaning and Preprocessing",
      content: "This is the content of Section 2.",
    },
    {
      title: "Data Visualization with Excel and Tableau",
      content: "This is the content of Section 1.",
    },
    {
      title: "Descriptive and Inferential Statistics",
      content: "This is the content of Section 2.",
    },
    { 
        title: "Advanced Excel Techniques", 
        content: "This is the content of Section 1." 
    },
    { 
        title: "Introduction to Python for Data Analysis", 
        content: "This is the content of Section 2." },
    {
      title: "Exploratory Data Analysis (EDA)",
      content: "This is the content of Section 1.",
    },
    { 
        title: "Introduction to SQL for Data Analysis", 
        content: "This is the content of Section 2." 
    },
    { 
        title: "Data Reporting and Storytelling", 
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
          title={"Data Analysis"}
          paragraph="Accelerate your career in data, and earn a data analysis certification."
          img={DataAnalysisImg}
          size={"70px"}
        />
        <NextCohort />
        <AboutCourse
          paragraph={
            "This comprehensive course introduces you to the fundamentals of data analysis, teaching you how to collect, clean, explore, and visualize data to drive informed decisions. Gain hands-on experience with tools like Excel, Tableau, Python, and SQL while mastering techniques for uncovering insights and solving real-world problems. Designed for both beginners and professionals, this course prepares you for success in a data-driven world."
          }
          item1={
            "Learn to prepare and preprocess raw data for analysis"
          }
          item2={
            "Master descriptive and inferential statistics for meaningful insights"
          }
          item3={
            "Create stunning visualizations with Tableau, Excel, and Python libraries"
          }
          img={dataAnalysis}
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

export default DataAnalysis;
