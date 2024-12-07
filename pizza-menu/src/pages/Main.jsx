import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма відправлена');
    navigate('/menu'); 
  };

  return (
    <div>
      <h1>Головна сторінка</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Введіть ім'я:
          <input type="text" name="name" required />
        </label>
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
};

export default Main;
