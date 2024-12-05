import { useState, useEffect } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');
        const data = await response.json();

        if (response.ok && data.status === 'success' && Array.isArray(data.data)) {
          setMenuItems(data.data);
        } else {
          throw new Error('Invalid data API');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {menuItems.map(({ id, name }) => (
        <div key={id} className="menu-item">
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Menu;
