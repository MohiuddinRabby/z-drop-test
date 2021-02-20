import React from "react";
import "./Footer.css";
import footerImg from "../../assets/productImages/footer-img.svg";
import contactImg from "../../assets/productImages/customer-service-2-line.png";
import phoneImg from "../../assets/productImages/phone-line.png";
import emailImg from "../../assets/productImages/mail-send-line.png";
import bkasLogo from "../../assets/productImages/BKash-bKash-Logo.wine.png";
import nagadLogo from "../../assets/productImages/nagad-logo-7A70CCFEE0-seeklogo.com.png";
import mCardLogo from "../../assets/productImages/Mastercard-logo.png";
import vCardLogo from "../../assets/productImages/g4158.png";
const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <img className="mb-2" src={footerImg} alt="" width="300" height="" />
        </div>
        <div className="col-8 col-md py-2">
          <h5>SUBSCRIBE</h5>
          <h6 className="pb-3">Get the latest news from zDrop</h6>
          <div class="input-group">
            <input
              type="email"
              class="form-control"
              placeholder="Enter your email"
            />
            <span class="input-group-btn">
              <button class="btn btn-success" type="submit">
                Subscribe
              </button>
            </span>
          </div>
          <div className="footer-sub-nav">
            <div className="row">
              <div className="col-md-3">
                <p>About zDrop</p>
              </div>
              <div className="col-md-3">
                <p>FAQ & Support</p>
              </div>
              <div className="col-md-3">
                <p>Terms & Conditions</p>
              </div>
              <div className="col-md-3">
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-3">
                <img src={bkasLogo} alt="" />
              </div>
              <div className="col-md-3">
                <img src={nagadLogo} alt="" />
              </div>
              <div className="col-md-3">
                <img src={vCardLogo} alt="" />
              </div>
              <div className="col-md-3">
                <img src={mCardLogo} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <p>
              <img src={contactImg} alt="" /> Hotline :
              <br />
              +8801929459195 (10am-10pm/Sat-Thur)
            </p>
            <p>
              <img src={phoneImg} alt="" /> WholeSales :
              <br />
              01929459195 (10am-12pm)
            </p>
            <p>
              <img src={emailImg} alt="" /> Email :
              <br />
              support.example@gmail.com
            </p>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
