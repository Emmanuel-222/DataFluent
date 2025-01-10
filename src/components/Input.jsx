import propType from "prop-types";

const Input = ({ type, input, register, name, required, validation, onChange }) => {
  const combinedValidation = {
    required: required ? `This field is required. Please input your ${input}` : undefined,
    ...validation, // Include other specific validation rules
  };
  
   return (
    <div className="relative w-full">
      <input
        type={type}
        {...(register ? register (name, combinedValidation) : {})}
        className="bg-transparent border border-[#747474] rounded-lg px-3 py-3 text-white peer placeholder-transparent focus:outline-none focus:border-[#FAFAFA] w-full"
        placeholder="Input field 1"
        onChange={onChange}
      />
      <label
        htmlFor={name}
        className="absolute left-3 -top-0.5 text-sm transition-all 
                       peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                       peer-placeholder-shown:text-[#ADADAD] peer-focus:-top-0.5 
                       peer-focus:text-sm peer-focus:text-[#FAFAFA] bg-transparent px-1"
      >
        {input}
        <span className="text-center peer-focus:bg-[#FB3748] spinner">{input === 'Location' ? "" : "*"}</span>
      </label>
    </div>
  );
};

Input.propTypes = {
  type: propType.string.isRequired,
  input: propType.string.isRequired,
  name: propType.string.isRequired,
  required: propType.bool,
  validation: propType.object,
  onChange: propType.func,
};

export default Input;
