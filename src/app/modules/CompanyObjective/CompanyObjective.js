import React from "react";
import objectiveOneImg from "../../assets/productImages/objective1.png";
import objectiveTwoImg from "../../assets/productImages/objective2.png";
import objectiveThreeImg from "../../assets/productImages/objective3.png";
import objectiveFourImg from "../../assets/productImages/objective4.png";
const CompanyObjective = () => {
  const styleImg = {
    width: "50px",
  };
  return (
    <>
      <div className="row">
        <div className="col-md-3 text-center">
          <div className="card text-center" style={{ border: "none" }}>
            <div className="card-body">
              <img
                src={objectiveThreeImg}
                className="card-img-top"
                style={{ width: styleImg.width }}
                alt="..."
              />
              <h6>Quality and Saving</h6>
              <p>Comprehensive quality control and affordable prices</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card text-center" style={{ border: "none" }}>
            <div className="card-body">
              <img
                src={objectiveOneImg}
                className="card-img-top"
                style={{ width: styleImg.width }}
                alt="..."
              />
              <h6>Global Brands</h6>
              <p>Buy you favorite items from your favorite global brands</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card text-center" style={{ border: "none" }}>
            <div className="card-body">
              <img
                src={objectiveFourImg}
                className="card-img-top"
                style={{ width: styleImg.width }}
                alt="..."
              />
              <h6>Fast Delivery</h6>
              <p>Fast and convenient door to door delivery</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card text-center" style={{ border: "none" }}>
            <div className="card-body">
              <img
                src={objectiveTwoImg}
                className="card-img-top"
                style={{ width: styleImg.width }}
                alt="..."
              />
              <h6>Secure Payment</h6>
              <p>Efficient customer support from passionate team</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyObjective;
