import "./button.css";

export const Button = ({
  type,
  classButton,
  buttonName,
  children,
  disabled,
  onClick
}) => {
  return (
    <button
      type={type}
      className={`button button_${classButton}`}
      disabled={disabled}
      onClick={onClick}
    >
      {buttonName}
      {children}
    </button>
  );
};
