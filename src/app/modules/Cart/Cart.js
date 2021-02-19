import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../assets/context/CartContext";

const Cart = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useContext(CartContext);
  const checkOut=()=>{
    setCart([])
  }
  return (
    <div>
      <Link to="/" className="btn btn-success">
        Back To Home
      </Link>
      <h1>Cart</h1>
      {cart.map((items) => (
        <li>{items.name}</li>
      ))}
      <button className="btn btn-primary" onClick={checkOut}>Chekc out</button>
    </div>
  );
};

export default Cart;
