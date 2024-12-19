const Button = ({ buttonText, className, onClick, disabled, type }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
