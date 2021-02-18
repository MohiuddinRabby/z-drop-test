import React, { useState } from "react";
import demoData from "../../assets/demoData";
import Products from "./Products";

const HomePage = () => {
  const [productsData, setProductsData] = useState(demoData);
  return (
    <div className="row">
      {productsData.map((products) => (
        <div className="col-md-3 py-2 " key={products.id}>
          <Products products={products}></Products>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
