import React from "react";
import "./LatestBlog.css";
import imgOne from "../../assets/productImages/26801830821918.png";
import imgTwo from '../../assets/productImages/Hair-Care.png'
import imgThree from '../../assets/productImages/26824312324126.png'
import imgFour from '../../assets/productImages/Image 117.png'
const LatestBlog = () => {
  return (
    <div className="text-center py-5">
      <h1 className="text-success">Latest Blogs</h1>
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
                  <h4>Shop Now</h4>
                  <span>OCT 12, 2020</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src={imgTwo} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Shop Now</h4>
                  <span>OCT 12, 2020</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src={imgThree} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Shop Now</h4>
                  <span>OCT 12, 2020</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="member-img">
                  <img src={imgFour} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Shop Now</h4>
                  <span>OCT 12, 2020</span>
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
