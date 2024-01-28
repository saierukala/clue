import React, { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState("");

  const addToCart = () => {
    if (item.trim() !== "") {
      setCart([...cart, item]);
      setItem("");
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addToCart}>Add to Cart</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFromCart(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
