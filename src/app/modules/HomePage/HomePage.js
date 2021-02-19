import React, { useState } from "react";
import demoData from "../../assets/demoData";
import LatestBlog from "../LatestBlog/LatestBlog";
import Products from "./Products";

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [productsData, setProductsData] = useState(demoData);
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <h1>Sidebar</h1>
        </div>
        <div className="col-md-9">
          <div className="row">
            {productsData.map((products) => (
              <div className="col-md-3 py-2 " key={products.id}>
                <Products products={products}></Products>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LatestBlog />
    </>
  );
};

export default HomePage;
