import * as style from "./style.module.css";

const Input = ({
  type,
  name,
  value,
  placeholder,
  label,
  click,
  action,
  isChecked,
  pattern,
  required,
  minLength,
  maxLength,
  min,
  max
}) => {
  function handleInput(e) {
    click && click({ type: action, value: e.target.value });
  }

  return (
    <label>
      <input
        className={style.input}
        type={type}
        defaultChecked={value === isChecked}
        name={name}
        value={value}
        placeholder={placeholder}
        onClick={(e) => handleInput(e)}
        onChange={(e) => handleInput(e)}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        step="1"
        pattern={pattern}
        required={required}
      />
      {label}
    </label>
  );
};

export default Input;
