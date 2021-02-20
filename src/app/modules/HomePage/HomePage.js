import React, { useState } from "react";
import demoData from "../../assets/demoData";
import CompanyObjective from "../CompanyObjective/CompanyObjective";
import Footer from "../Footer/Footer";
import LatestBlog from "../LatestBlog/LatestBlog";
import SideNav from "../SideNav/SideNav";
import Products from "./Products";

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  let [productsData, setProductsData] = useState(demoData);
  const [itemToSearch, setItemToSearch] = useState("");
  const searchItems = (item) => {
    item.preventDefault();
    setItemToSearch(item.target.value);
  };
  if (itemToSearch.length > 0) {
    productsData = productsData.filter((i) => {
      return i.name.toLowerCase().includes(itemToSearch.toLowerCase());
    });
  }
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <SideNav />
        </div>
        <div className="col-md-9">
          {" "}
          <div className="justify-content-center mt-5">
            <h6>Search Product</h6>
            <div className="input-group mb-2 mr-sm-2">
              <input
                type="text"
                className="form-control"
                onChange={searchItems}
                value={itemToSearch}
                placeholder="search by product name"
              />
            </div>
          </div>
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
      <Footer />
    </>
  );
};

export default HomePage;
