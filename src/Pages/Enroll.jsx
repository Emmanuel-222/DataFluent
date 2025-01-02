import { GradientBackground, Footer, MultiStateForm } from "../components";

const Enroll = () => {
  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col bg-black w-screen">
        <GradientBackground />
        <div className="flex items-center flex-col gap-4 mb-32 max-w-5xl mx-auto px-4 my-32">
          <p className="font-[700] text-[2rem] md:text-7xl text-center">
            Enroll Now and Start Your Learning Journey
          </p>
          <p>
            Take the first step toward mastering new skills and achieving your
            goals
          </p>
        </div>
      </section>
      <section className="flex items-center flex-col bg-black w-screen">
        <MultiStateForm />
      </section>
      <Footer />
    </div>
  );
};

export default Enroll;
