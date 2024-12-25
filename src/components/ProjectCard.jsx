import projectOne from "../assets/project-card/image1.png";
import projectTwo from "../assets/project-card/image2.png";
import projectThree from "../assets/project-card/image3.png";
import projectFour from "../assets/project-card/image4.png";
import projectFive from "../assets/project-card/image5.png";
import projectSix from "../assets/project-card/image6.png";
import projectSeven from "../assets/project-card/image7.png";
import projectEight from "../assets/project-card/image8.png";
import projectNine from "../assets/project-card/image9.png";

const ProjectCard = () => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-3 mx-auto gap-4 lg:gap-8 bg-[#1A1A1AB2] border-t-[#2F2F2F99] border-transparent border-[1px] border-solid px-8 py-12 rounded-t-3xl">
            <div className="rounded-xl"><img className="h-80 w-80 rounded-xl" src={projectOne} alt="projectOne" /></div>
            <div className="rounded-xl"><img className="h-80 w-80 rounded-xl" src={projectTwo} alt="" /></div>
            <div className="rounded-xl"><img className="h-80 w-80 rounded-xl" src={projectThree} alt="" /></div>
            <div className="rounded-xl"><img className="h-80 w-80 rounded-xl" src={projectFour} alt="" /></div>
            <div className="rounded-xl"><img className="h-80 w-80 rounded-xl" src={projectFive} alt="" /></div>
            <div className="rounded-xl"><img className="h-80 w-80 rounded-xl" src={projectSix} alt="" /></div>
            <div className="rounded-xl"><img className="h-80 w-80 rounded-xl" src={projectSeven} alt="" /></div>
            <div className="rounded-xl"><img className="h-80 w-80 rounded-xl" src={projectEight} alt="" /></div>
            <div className="rounded-xl"><img className="h-80 w-80 rounded-xl" src={projectNine} alt="" /></div>
        </div>
  )
}

export default ProjectCard;
