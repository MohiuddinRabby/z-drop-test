import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../assets/context/CartContext";

const Cart = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useContext(CartContext);
  const checkOut = () => {
    setCart([]);
  };
  return (
    <div>
      <Link to="/" className="btn btn-success" style={{ marginBottom: "30px" }}>
        Back To Home
      </Link>
      <div className="">
        {cart.length > 0 ? (
          ""
        ) : (
          <h3 className="text-danger">Your cart is empty</h3>
        )}
      </div>
      <div className="py-5">
        {cart.map((items) => (
          // <li>{items.name}</li>
          <table className="table" key={items.id}>
            <tbody>
              <tr>
                <td>
                  <img
                    src={items.img}
                    style={{ width: "50px", height: "50px" }}
                    alt=""
                  />
                </td>
                <td>{items.name}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
      {cart.length > 0 ? (
        <button className="btn btn-primary" onClick={checkOut}>
          Chekc out
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
