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
import AiImg from "../../src/assets/academy/course-8.png";
import ai from "../../src/assets/about-course/ai.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";

const ArtificialIntel = () => {
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
      title: "Introduction to Artificial Intelligence",
      content:
        "Explore the history, key concepts, and potential of AI to solve real-world problems.",
    },
    {
      title: "Basics of Python for AI",
      content: "This is the content of Section 2.",
    },
    {
      title: "Machine Learning Fundamentals",
      content: "This is the content of Section 1.",
    },
    {
      title: "Neural Networks and Deep Learning",
      content: "This is the content of Section 2.",
    },
    {
      title: "Natural Language Processing (NLP)",
      content: "This is the content of Section 1.",
    },
    {
      title: "Computer Vision Basics",
      content: "This is the content of Section 2.",
    },
    {
      title: "Reinforcement Learning",
      content: "This is the content of Section 1.",
    },
    {
      title: "AI Tools and Frameworks",
      content: "This is the content of Section 2.",
    },
    {
      title: "Ethics and Future of AI",
      content: "This is the content of Section 2.",
    },
    { title: "Capstone Project", content: "This is the content of Section 2." },
  ];

  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col bg-black w-screen">
        <GradientBackground />
        <MainContent
          title={"Artificial Intelligence"}
          paragraph="Explore AI fundamentals, including neural networks, natural language processing, and computer vision."
          img={AiImg}
          size={"3rem"}
        />
        <NextCohort />
        <AboutCourse
          paragraph="This course provides a comprehensive introduction to Artificial Intelligence, covering its core concepts, algorithms, and applications. Learn how to build intelligent systems that can solve real-world problems using machine learning, deep learning, and natural language processing. Through hands-on projects and practical training, this course prepares you to excel in the rapidly growing AI industry."
          item1={
            "Understand the principles and history of artificial intelligence"
          }
          item2={
            "Learn supervised, unsupervised, and reinforcement learning techniques"
          }
          item3={
            "Build AI-powered systems such as chatbots, image classifiers, and recommendation engines"
          }
          img={ai}
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
      <EnrollToday price="850,000" />
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Footer />
    </div>
  );
};

export default ArtificialIntel;
