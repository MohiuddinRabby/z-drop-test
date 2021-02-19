import React, { useContext } from "react";
import { CartContext } from "../../assets/context/CartContext";
import "./Products.css";
const Products = (props) => {
  const { name, price, img } = props.products;
  const [cart, setCart] = useContext(CartContext);
  const handleCart = () => {
    const items = { name: name, price: price };
    const count = cart?.filter((item) => item?.id === items?.id).length;
    if (count === 0) {
      setCart((prevCart) => [...prevCart, items]);
    } else {
      console.log("duplicate");
    }
  };
  return (
    <div className="card text-center">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p>{name}</p>
        <p>BDT {price}</p>
        <div className="cart-btn">
          <i className="fas fa-cart-plus" onClick={handleCart}></i>
        </div>
      </div>
    </div>
  );
};

export default Products;
