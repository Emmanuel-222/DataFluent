import propType from "prop-types";

const RadioButton = ({ data }) => {
    return (
      <>
        {data.map((item, index) => (
          <label key={index} className="radio-button">
            <input type="radio" name="option" value={item} />
            <div className="radio-circle"></div>
            <span className="radio-label">{item}</span>
          </label>
        ))}
      </>
    );
  };

RadioButton.propTypes = {
  data: propType.array.isRequired,
};

export default RadioButton;
