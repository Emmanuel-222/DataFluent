import propType from "prop-types";

const Input = ({ type, name, value, onChange, input}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-gray-800 border border-[#747474] rounded px-3 py-2 text-white peer placeholder-transparent focus:outline-none focus:border-[#FAFAFA] w-full"
        placeholder="Input field 1"
      />
      <label
        htmlFor="inputValue1"
        className="absolute left-3 -top-0.5 text-sm transition-all 
                       peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                       peer-placeholder-shown:text-[#ADADAD] peer-focus:-top-0.5 
                       peer-focus:text-sm peer-focus:text-[#FAFAFA] bg-transparent px-1"
      >
        {input}<span className="text-center peer-focus:bg-[#FB3748]">*</span>
      </label>
    </div>
  );
};

Input.propTypes = {
    type: propType.string.isRequired,
    name: propType.string.isRequired,
    value: propType.string.isRequired,
    onChange: propType.func.isRequired,
    input: propType.string.isRequired,
}

export default Input;
