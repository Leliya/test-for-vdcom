import "./button.css";

export const Button = ({
  type,
  classButton,
  buttonName,
  children,
  disabled,
  onSubmit
}) => {
  return (
    <button
      type={type}
      className={`button button_${classButton}`}
      disabled={disabled}
      onSubmit={onSubmit}
    >
      {buttonName}
      {children}
    </button>
  );
};
