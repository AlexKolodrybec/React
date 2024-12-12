import { useContext } from 'react';
import { UserContext } from '../UserContext';

const Menu = () => {
  const { username } = useContext(UserContext); 

  return (
    <div>
      <h1>Меню</h1>
      <p>Вітаємо, {username || "гостю"}!</p> {}
    </div>
  );
};

export default Menu;