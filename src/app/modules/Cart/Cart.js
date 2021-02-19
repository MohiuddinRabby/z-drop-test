import React, { useContext } from "react";
import { CartContext } from "../../assets/context/CartContext";

const Cart = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useContext(CartContext);
  console.log("cart", cart);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
