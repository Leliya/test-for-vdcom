export const Button= ({
  type,
  classButton,
  buttonName,
  children,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`button button_${classButton}`}
      disabled={disabled}>
      {buttonName}
      {children}
    </button>
  )
}
