import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Form = ({ titleText, subtitleText, welcomeText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleButtonClick = () => {
    console.log("Name:", inputValue); 
  };

  return (
    <main>
      <h1>{titleText}</h1>
      <p className="subtitle">{subtitleText}</p>
      <p className="welcome">👉 {welcomeText}</p>
      <Input type="text" value={inputValue} onChange={handleInputChange} placeholder={"Enter your name"} />
      <Button className="btn" buttonText="Submit" onClick={handleButtonClick} />
    </main>
  );
};

export default Form;
