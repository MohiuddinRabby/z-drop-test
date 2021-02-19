import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import demoData from "../../assets/demoData";

const ProductDetails = () => {
  const history = useHistory();
  const productID = history.location.state;
  // eslint-disable-next-line no-unused-vars
  const [findProductFromDemoData, setFindProductFromDemoData] = useState(
    demoData
  );
  const findMatchItem = findProductFromDemoData.find(
    (item) => item.id === productID
  );
  return (
    <div>
      <h1 className="text-success" style={{ marginBottom: "30px" }}>
        Product Details
      </h1>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <div className="row py-5">
        <div className="col-md-4">
          <img src={findMatchItem.img} style={{ width: "300px" }} alt="" />
        </div>
        <div className="col-md-8">
          <div style={{ marginLeft: "50px", marginTop: "50px" }}>
            <h5>{findMatchItem.name}</h5>
            <h4>BDT: {findMatchItem.priceRange}</h4>
            <p>{findMatchItem.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
