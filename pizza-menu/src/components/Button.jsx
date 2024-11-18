const Button = ( props ) => {
    const { buttonName } = props;
    return (
        <button className="btn">
            {buttonName}
        </button>
    );
};
export default Button;