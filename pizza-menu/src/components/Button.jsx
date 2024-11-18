const Button = ( props ) => {
    const { buttonName, className } = props;
    return (
        <button className={className}>
            {buttonName}
        </button>
    );
};
export default Button;