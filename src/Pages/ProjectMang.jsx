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
import ProjectMangImg from "../../src/assets/academy/course-9.png";
import projectMang from "../../src/assets/about-course/projectMang.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";


const ProjectMang = () => {
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
      title: "Introduction to Project Management",
      content:
        "Understand the basics of project management, including key terms, frameworks, and the project lifecycle.",
    },
    {
      title: "Project Planning and Scheduling",
      content: "This is the content of Section 2.",
    },
    {
      title: "Risk and Issue Management",
      content: "This is the content of Section 1.",
    },
    {
      title: "Resource Allocation and Budgeting",
      content: "This is the content of Section 2.",
    },
    { title: "Stakeholder Communication and Collaboration", content: "This is the content of Section 1." },
    {
      title: "Agile Project Management",
      content: "This is the content of Section 2.",
    },
    {
      title: "Quality Assurance and Performance Monitoring",
      content: "This is the content of Section 1.",
    },
    { title: "Leadership and Team Management", content: "This is the content of Section 2." },
    {
      title: "Leadership and Team Management",
      content: "This is the content of Section 2.",
    },
    { title: "Capstone Project", content: "This is the content of Section 2." },
  ];

  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col bg-black w-screen">
        <GradientBackground />
        <MainContent
          title={"Project Management"}
          paragraph="Develop expertise in planning, executing, and leading projects across various industries."
          img={ProjectMangImg}
          size={"3rem"}
        />
        <NextCohort />
        <AboutCourse
          paragraph="This course equips you with the tools, techniques, and frameworks needed to successfully manage projects of any scale. Learn how to plan, execute, and deliver projects on time and within budget while aligning with organizational goals. Covering both traditional and Agile methodologies, this course provides hands-on experience with industry-standard tools and prepares you for certifications like PMP, Scrum Master, or PRINCE2."
          item1={
            "Learn how to define scope, set milestones, and allocate resources effectively"
          }
          item2={
            "Gain expertise in Agile principles and tools like Scrum boards and sprints"
          }
          item3={
            "Develop skills to manage project budgets and optimize resource utilization"
          }
          img={projectMang}
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
      <EnrollToday price="300,000" />
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Footer />
    </div>
  );
};

export default ProjectMang;
