import "./input.css";

export const Input = ({
  type,
  name,
  autoFocus,
  required,
  label,
  onChange,
  value,
}) => {
  function handlerChange(e) {
    const value = e.target.value;
    const nameInput = e.target.name;
    onChange(nameInput, value);
  }
  return (
    <label className="input">
      {label}
      <input
        type={type}
        className="input__field"
        name={name}
        autoFocus={autoFocus}
        required={required}
        onChange={handlerChange}
        value={value}
      />
    </label>
  );
};
