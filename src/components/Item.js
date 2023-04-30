import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCartClick = () => {
    setIsInCart(prevIsInCart => !prevIsInCart)
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>{isInCart ? "Remove from cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
