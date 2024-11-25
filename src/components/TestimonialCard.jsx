import propType from 'prop-types'; 

const TestimonialCard = ({ profile, testimony, name, company}) => {
  return (
    <div className="left-quote-bg flex justify-center items-end flex-col bg-[#1A1A1A] rounded-[32px] border-solid border-[#2F2F2F] border-[1px] py-14 px-6 lg:px-10 lg:max-w-[49%]">
      <p className="text-[#B9B9B9] text-[15px] font-[400] mt-20 lg:mt-0 lg:ml-40">
        {testimony}
      </p>
      <div className="flex justify-start lg:justify-center items-center gap-4 mt-10 w-full md:w-[90%]">
        <img className="h-16 w-16" src={profile} alt="profile-img" />
        <div className="name">
          <h1 className="font-[500] text-[#FAFAFA]">{name}</h1>
          <span className="font-[500] text-[#B9B9B9]">{company}</span>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
    profile: propType.string.isRequired,
    testimony: propType.string.isRequired,
    name: propType.string.isRequired,
    company: propType.string.isRequired,
}

export default TestimonialCard;
