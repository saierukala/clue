import React, { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCartDelete() {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState("");

  const addToCart = () => {
    if (item.trim() !== "") {
      setCart([...cart, { text: item, completed: false }]);
      setItem("");
    }
  };

  const toggleComplete = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].completed = !updatedCart[index].completed;
    setCart(updatedCart);
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
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(index)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => removeFromCart(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCartDelete;
