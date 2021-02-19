import React from "react";
import footerImg from "../../assets/productImages/footer-img.svg";
import contactImg from "../../assets/productImages/customer-service-2-line.png";
import phoneImg from "../../assets/productImages/phone-line.png";
import emailImg from "../../assets/productImages/mail-send-line.png";
const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <img className="mb-2" src={footerImg} alt="" width="300" height="" />
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="/">
                Cool stuff
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Random feature
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Team feature
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Stuff for developers
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Another one
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Last time
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="/">
                Resource
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Resource name
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Another resource
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Final resource
              </a>
            </li>
          </ul>
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
