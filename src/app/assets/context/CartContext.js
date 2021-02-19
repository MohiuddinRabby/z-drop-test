import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const ContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
