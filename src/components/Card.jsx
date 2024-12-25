import PropType from "prop-types";

const Card = ({
  title,
  buttonText,
  showButton,
  paragraphText,
  showParagraph,
}) => {
  return (
    <div>
      <section className="flex items-center py-14 px-4 md:px-32 justify-between gap-8 flex-col bg-black w-screen">
        <div className="bg-[#1A1A1A] left-bg rounded-[32px] w-full p-16 md:p-28 flex justify-center items-center flex-col border-[#2F2F2F] border-solid border-[1px] text-white">
          <h1 className="font-[600] text-[32px] text-center md:text-5xl mb-8">
            {title}
          </h1>
          {showParagraph && (
            <p className="md:text-[20px] font-[400] mb-12 text-center">{paragraphText}</p>
          )}
          {showButton && (
            <button className="btn bg-[#20E4D1] text-black font-[500] text-center">
              {buttonText}
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

Card.propTypes = {
  title: PropType.string.isRequired,
  buttonText: PropType.string.isRequired,
  showButton: PropType.bool.isRequired,
  paragraphText: PropType.string,
  showParagraph: PropType.bool,
}

export default Card;
