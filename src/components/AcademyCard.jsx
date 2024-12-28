import propType from "prop-types";

const AcademyCard = ({ img, title, paragraph }) => {
  return (
    <div className="card-border flex flex-col items-stretch flex-auto border-[1px] border-none px-4 bg-gradient-to-b from-[#1A1A1AB2] to-[#1A1A1A66] rounded-[32px] blur-[0.5px] pt-8 pb-10 bg-cover bg-center">
      <img className="h-[60px] w-[60px]" src={img} alt="icon" />
      <div className="card-text flex flex-col items-start gap-4">
        <h1 className="font-[600] text-[20px] md:text-[24px] mt-20">{title}</h1>
        <p className="font-[400] text-[#B9B9B9] max-w-xs">{paragraph}</p>
      </div>
    </div>
  );
};

AcademyCard.propTypes = {
  img: propType.string.isRequired,
  title: propType.string.isRequired,
  paragraph: propType.string.isRequired,
};

export default AcademyCard;