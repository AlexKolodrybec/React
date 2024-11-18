import Input from './Input';
import Button from './Button';
const Form = ( props ) => {
    const { titleText, subtitleText, welcomeText} = props;
    return (
        <main>
            <h1>{titleText}</h1>
            <p className="subtitle">{subtitleText,}</p>
            <p className="welcome">👉 {welcomeText}</p>
            <Input/>
            <Button/>
        </main>
    );
};
export default Form;