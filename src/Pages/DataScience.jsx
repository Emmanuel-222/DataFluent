import { AcademyCard, Footer, Testimonial } from "../components";
import NextCohort from "../components/NextCohort";

import imageOne from "../../src/assets/course-academyCard/Frame-1.png";
import imageTwo from "../../src/assets/course-academyCard/Frame-2.png";
import imageThree from "../../src/assets/course-academyCard/Frame-3.png";
import imageFour from "../../src/assets/course-academyCard/Frame-4.png";
import imageFive from "../../src/assets/course-academyCard/Frame-5.png";
import imageSix from "../../src/assets/course-academyCard/Frame-6.png";
import profileOne from "../../src/assets/card/image1.png";
import profileTwo from "../../src/assets/card/image2.png";
import MainContent from "../components/MainContent";
import AboutCourse from "../components/AboutCourse";

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
  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col bg-black w-screen">
        <MainContent />
        <NextCohort />
        <AboutCourse />
      </section>
      <section className="flex items-center flex-col bg-black w-screen gap-8">
        <h1 className="font-[600] text-[20px] md:text-[40px]">Why Enroll in This Course?</h1>
        <div className="flex justify-center items-stretch gap-4 flex-wrap w-screen bg-black px-28">
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
      <Testimonial testimonials={testimonials} name="What clients say"/>
      <Footer />
    </div>
  );
};

export default DataScience;
