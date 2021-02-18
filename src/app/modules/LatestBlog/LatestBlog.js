import React from "react";
import './LatestBlog.css';
import imgOne from '../../assets/productImages/26801830821918.png'
const LatestBlog = () => {
  return (
    <div className="text-center">
      <h1>Latest Blogs</h1>
      <h4>
        This is a place devoted to giving you deeper insight into the news,
        trends, people and technology behind Bing.
      </h4>
      <section id="team" className="py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src={imgOne} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>RICK SIMMONS</h4>
                  <span>OWNER</span>
                  <div className="social-links">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src="img/team/team-6.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>JANE PETERSON</h4>
                  <span>FARM MANAGER</span>
                  <div className="social-links">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src="img/team/team-5.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>KATE MCMILLAN</h4>
                  <span>SALES MANAGER</span>
                  <div className="social-links">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src="img/team/team-7.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>SUZI WILLIAMS</h4>
                  <span>FARMER</span>
                  <div className="social-links">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestBlog;
