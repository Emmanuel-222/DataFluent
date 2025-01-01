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
import DataScienceImg from "../../src/assets/academy/course-1.png";
import dataScience from "../../src/assets/about-course/datascience.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";

const DataScience = () => {
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
      title: "Introduction to Data Science",
      content:
        "Gain a foundational understanding of data science, its importance, and how it drives decision-making in various industries. Learn key concepts, tools, and data lifecycle.",
    },
    {
      title: "Data Analysis with Excel",
      content: "This is the content of Section 2.",
    },
    {
      title: "Advance Excel for Data Analysis",
      content: "This is the content of Section 1.",
    },
    {
      title: "Data Manipulation with SQL",
      content: "This is the content of Section 2.",
    },
    { title: "Advanced SQL", content: "This is the content of Section 1." },
    { title: "Python Basics", content: "This is the content of Section 2." },
    {
      title: "Intermediate Pendas and Machine Learning",
      content: "This is the content of Section 1.",
    },
    { title: "Capsone Project", content: "This is the content of Section 2." },
  ];
  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col bg-black w-screen">
        <GradientBackground />
        <MainContent
          title={"Data Science"}
          paragraph="Master data analysis, visualization, and machine learning to uncover
            insights and drive decision-making."
          img={DataScienceImg}
          size={"72px"}
        />
        <NextCohort />
        <AboutCourse
          paragraph="This course is designed to provide a comprehensive introduction to
                  Data Science, equipping you with the practical skills and knowledge
                  needed to analyze and interpret complex data. From understanding
                  foundational concepts to applying tools like Python, SQL, and Excel,
                  you’ll gain hands-on experience through real-world projects. Whether
                  you’re starting a new career or advancing in your current role, this
                  course prepares you to thrive in today’s data-driven world."
          item1={"Learn the fundamentals of data science."}
          item2={"Master tools like Python, SQL, and Excel."}
          item3={"Work on real-world projects with expert guidance."}
          img={dataScience}
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
      <EnrollToday price="300,000"/>
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Footer />
    </div>
  );
};

export default DataScience;
