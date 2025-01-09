import propType from "prop-types";

const RadioButton = ({ item, option }) => {
  return (
    <>
      <label className="radio-button">
        <input type="radio" name={option} value={item} />
        <div className="radio-circle"></div>
        <span className="font-[400] text-xl">{item}</span>
      </label>
    </>
  );
};

RadioButton.propTypes = {
    item: propType.string.isRequired,
    option: propType.string.isRequired,
}

export default RadioButton;
