import propType from "prop-types";

const RadioButton = ({ item, register, required, name, error }) => { 
  return (
    <>
      <label className="radio-button">
        <input {...(register ? register(name, {required}) : {})} type="radio" value={item} />
        <div className={`radio-circle border-2 border-solid ${error ? 'border-[#FB3748]' : 'border-[#aaa]'}`}></div>
        <span className="font-[400] text-xl">{item}</span>
      </label>
    </>
  );
};

RadioButton.propTypes = {
  item: propType.string.isRequired,
  required: propType.bool.isRequired,
  error: propType.object.isRequired,
  register: propType.func.isRequired,
  name: propType.string.isRequired,
};

export default RadioButton;
