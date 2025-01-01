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
import SoftwareDevImg from "../../src/assets/academy/course-6.png";
import softwareDev from "../../src/assets/about-course/softwareEng.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";

const SoftwareDev = () => {
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
      title: "HTML",
      content:
        "Learn the fundamentals of HTML, the backbone of web development. Discover how to structure web pages with elements, tags, and attributes to create well-organized content.",
    },
    {
      title: "CSS",
      content: "This is the content of Section 2.",
    },
    {
      title: "Version Control with GIT",
      content: "This is the content of Section 1.",
    },
    {
      title: "Backend Development and Deployment",
      content: "This is the content of Section 2.",
    },
    { title: "Javascript", content: "This is the content of Section 1." },
    { title: "Frontend Development for Advanced", content: "This is the content of Section 2." },
    {
      title: "Responsive Design",
      content: "This is the content of Section 1.",
    },
    { title: "RESTful APIs", content: "This is the content of Section 2." },
    { title: "Authentication and Authorization", content: "This is the content of Section 2." },
    { title: "Testing and Debugging", content: "This is the content of Section 2." },
    { title: "Development and DevOps", content: "This is the content of Section 2." },
    { title: "Capstone Project", content: "This is the content of Section 2." },
  ];

  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col bg-black w-screen">
        <GradientBackground />
        <MainContent
          title={"Software Development"}
          paragraph="Build what works and while at it, iterate quickly and efficiently."
          img={SoftwareDevImg}
          size={"3rem"}
        />
        <NextCohort />
        <AboutCourse
          paragraph="This course provides a solid foundation in software development, guiding you through the entire process of building robust and scalable applications. Learn key programming languages, development frameworks, and best practices for creating modern web and mobile applications. With a focus on hands-on projects, this course equips you with the technical and problem-solving skills needed to thrive as a software developer in today’s tech-driven world."
          item1={"Learn both front-end and back-end development for building dynamic applications"}
          item2={"Collaborate efficiently and manage codebases using Git and Github"}
          item3={"Learn how to design and consume RESTful APIs for seamless connectivity"}
          img={softwareDev}
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
      <EnrollToday price="500,000" />
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Footer />
    </div>
  );
};

export default SoftwareDev;
