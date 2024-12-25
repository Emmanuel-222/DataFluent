import { Footer, Card, ProjectCard, Pagination } from "../components";

const Projects = () => {
  return (
    <div className="container text-[#FAFAFA] h-screen w-screen bg-black">
      <section className="flex items-center flex-col contact-background w-screen">
        <h1 className="text-2xl md:text-[3rem] text-white font-[600] mt-6 md:mt-20 mb-4">Our Projects</h1>
        <p className="text-[#BDBDBD]">Explore our diverse portfolio of impactful digital solutions</p>
        <h1 className="md:mt-96 font-[600] text-[20px] md:text-[40px] text-center mb-4">Explore Our Projects</h1>
      </section>
      <section className="flex items-center flex-col w-screen academy-background">
        <div className="bg-[#1A1A1AB2] rounded-3xl border-solid border-[1px] border-transparent">
          <ProjectCard />
          <Pagination />
        </div>
      </section>
      
      <Card 
      title={"Ready to Transform Your Business?"} 
      buttonText={"Request a Consultation"}
      showButton={true}
      showParagraph={true}
      paragraphText={"Get in touch to discuss how we can help you achieve your digital goals"}
      />
      <Footer />
    </div>
  )
}
export default Projects;