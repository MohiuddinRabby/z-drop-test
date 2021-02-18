import React from "react";

const Products = (props) => {
  const { name, price, img } = props.products;
  return (
    <div className="card text-center">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p>{name}</p>
        <p>BDT {price}</p>
      </div>
    </div>
  );
};

export default Products;
