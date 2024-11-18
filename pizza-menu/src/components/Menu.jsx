import { pizzas } from "../data/data";

const Menu = () => {
    return (
        <div className="menu-container">
            {pizzas.map((pizza) => (
                <div key={pizza.id} className="pizza-item">
                    <img 
                    src={pizza.imageUrl} 
                    alt={pizza.name} 
                    className="pizza-image" />
                    <div className="pizza-info">
                        <h2>{pizza.name}</h2>
                        <p>{pizza.ingredients.join(", ")}</p>
                        {pizza.soldOut ? (
                            <p className="sold-out">SOLD OUT</p>
                        ) : (
                            <p>€{pizza.unitPrice}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;