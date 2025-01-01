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
import DigitalMarketImg from "../../src/assets/academy/course-10.png";
import digitalMarket from "../../src/assets/about-course/digitalMarket.png";

import GradWorkIn from "../components/GradWorkIn";
import EnrollToday from "../components/EnrollToday";

const DigitalMarket = () => {
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
      title: "Introduction to Digital Marketing",
      content:
        "Understand the fundamentals of digital marketing, its channels, and its role in modern business.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      content: "This is the content of Section 2.",
    },
    {
      title: "Social Media Marketing",
      content: "This is the content of Section 1.",
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      content: "This is the content of Section 2.",
    },
    {
      title: "Content Marketing and Copywriting",
      content: "This is the content of Section 1.",
    },
    {
      title: "Email Marketing",
      content: "This is the content of Section 2.",
    },
    {
      title: "Analytics and Data-Driven Marketing",
      content: "This is the content of Section 1.",
    },
    {
      title: "Affiliate and Influencer Marketing",
      content: "This is the content of Section 2.",
    },
    {
      title: "Digital Marketing Tools and Automation",
      content: "This is the content of Section 2.",
    },
    { title: "Capstone Project", content: "This is the content of Section 2." },
  ];

  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col bg-black w-screen relative">
          <GradientBackground />
          <MainContent
            title={"Digital Marketing"}
            paragraph="Learn the science of communication art in a fast-paced digital world."
            img={DigitalMarketImg}
            size={"4rem"}
          />
          <NextCohort />
          <AboutCourse
            paragraph="This course equips you with the essential skills and strategies to create, manage, and optimize digital marketing campaigns across various channels. Learn how to drive traffic, engage audiences, and convert leads using SEO, social media, email marketing, and analytics tools. With practical assignments and expert guidance, this course prepares you to excel in the fast-paced world of digital marketing."
            item1={
              "Learn how to optimize websites for search engines and improve organic rankings"
            }
            item2={
              "Master platforms like Facebook, Instagram, and LinkedIn to build brand awareness"
            }
            item3={
              "Gain insights into campaign performance using tools like Google Analytics"
            }
            img={digitalMarket}
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
      <EnrollToday price="200,000" />
      <Testimonial testimonials={testimonials} name="What clients say" />
      <Footer />
    </div>
  );
};

export default DigitalMarket;
