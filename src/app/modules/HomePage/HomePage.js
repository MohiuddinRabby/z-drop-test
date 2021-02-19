import React, { useState } from "react";
import demoData from "../../assets/demoData";
import CompanyObjective from "../CompanyObjective/CompanyObjective";
import Footer from "../Footer/Footer";
import LatestBlog from "../LatestBlog/LatestBlog";
import SideNav from "../SideNav/SideNav";
import Products from "./Products";

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [productsData, setProductsData] = useState(demoData);
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <SideNav/>
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
      <CompanyObjective />
      <Footer/>
    </>
  );
};

export default HomePage;
