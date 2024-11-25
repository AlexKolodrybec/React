const Button = ({ buttonText, className, onClick, disabled }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
