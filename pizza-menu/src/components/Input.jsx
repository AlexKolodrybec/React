const Input = ( props ) => {
    const { text, placeholder, ariaLabel } = props;
    return (
        <input
            type={text}
            placeholder={placeholder}
            aria-label={ariaLabel}
        />
    );
};
export default Input;