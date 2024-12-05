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
    <div className="menu">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <h2>{item.name || 'Unnamed'}</h2>
          <p>{item.ingredients ? item.ingredients.join(', ') : 'No description available'}</p>
          <p>{item.unitPrice ? `€${item.unitPrice.toFixed(2)}` : 'Price not available'}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
