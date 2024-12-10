import propType from "prop-types";
 
import { TestimonialCard } from "../components";

const Testimonial = ({ testimonials, name }) => {
  return (
    <section className="flex items-center py-14 md:px-32 justify-between gap-8 flex-col bg-black w-screen">
      <div className="top text-center">
        <h1 className="font-[500] text-[#20E4D1] text-base md:text-[20px]">
          Testimonials
        </h1>
        <h1 className="font-[600] text-[24px] md:text-[40px] text-[#FAFAFA]">
          {name}
        </h1>
      </div>
      <div className="bottom cards-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            company={testimonial.company}
            profile={testimonial.profile}
            testimony={testimonial.testimony}
          />
        ))}
      </div>
    </section>
  );
};

Testimonial.propTypes = {
  testimonials: propType.array.isRequired,
  name: propType.string.isRequired,
};

export default Testimonial;
