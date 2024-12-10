import propType from "prop-types";

const CourseCard = ({img, courseTitle, description}) => {
  return (
    <div className="min-h-11 flex w-full lg:flex-1 bg-[#1A1A1A] flex-col rounded-[32px] justify-center items-center px-1 pt-1 pb-8 gap-4">
      <div className="top flex justify-center items-center bg-black w-full rounded-[32px] h-full">
        <img src={img} alt="course image" />
      </div>
      <div className="bottom flex justify-center flex-col px-8 gap-4">
        <h1 className="font-[500] text-[20px] text-white">{courseTitle}</h1>
        <p className="text-[#BDBDBD] font-[400] text-sm">{description}</p>
        <button className="btn w-48 text-[#43E8D8]">Learn More</button>
      </div>
      
    </div>
  )
}

CourseCard.propTypes ={
    img: propType.string.isRequired,
    courseTitle: propType.string.isRequired,
    description: propType.string.isRequired,
}

export default CourseCard
