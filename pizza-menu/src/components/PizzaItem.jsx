const PizzaItem = ({ pizza }) => {
    return (
      <div className="pizza-item">
        <img
          src={pizza.imageUrl}
          alt={`${pizza.name} Pizza`}
          className="pizza-image"
        />
        <div className="pizza-info">
          <h2>{pizza.name}</h2>
          <p className="ingredients">{pizza.ingredients.join(', ')}</p>
          {pizza.soldOut ? (
            <p className="sold-out">SOLD OUT</p>
          ) : (
            <p className="price">€{pizza.unitPrice.toFixed(2)}</p>
          )}
        </div>
        {!pizza.soldOut && <button className="add-to-cart">ADD TO CART</button>}
      </div>
    );
  }
  
  export default PizzaItem;