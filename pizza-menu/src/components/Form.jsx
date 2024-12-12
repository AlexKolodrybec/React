import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const { setUsername } = useContext(UserContext); 
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue); 
    navigate('/menu'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Введіть ваше ім'я:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
      </label>
      <button type="submit">Підтвердити</button>
    </form>
  );
};

export default Form;