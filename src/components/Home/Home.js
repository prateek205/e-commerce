import React from "react";
import "./Home.css";
import img2 from "../../images/m5.webp";
import img3 from "../../images/nothing-phone-poster.webp";
import img4 from "../../images/m2.webp";
import img5 from "../../images/m4.webp";
import img9 from "../../images/laptop-offer-page.webp";
import img10 from "../../images/smartphone-offer-page.webp";
import img11 from "../../images/television-offer-page.webp";
import img12 from "../../images/samsung-offer-page.webp";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosNewIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { deals } from "../Data/Deals";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosNewIcon className="arrow-back" />
    </div>
  );
};

const NextBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosNewIcon className="arrow-forward" />
    </div>
  );
};

/************************************************************************ SLICK_SLIDER_FUNCTIONALITY *****************************************************************/

let slidesToShow = 5;
const PrevBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIosNewIcon className="arrow-back" />
        </div>
      )}
    </>
  );
};

const NxtBtn = (props) => {
  console.log(props);
  const { className, onClick, slideCount, currentSlide } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIosNewIcon className="arrow-forward" />
        </div>
      )}
    </>
  );
};

const Home = () => {
  return (
    <>
      <div className="productItemList">
        <Link to="/allproducts">
          <div className="mobilenavlist">
            <div className="mobileallproduct">
              <p>All Product</p>
            </div>
          </div>
        </Link>
        <Link to="/smartphone">
          <div className="mobilenavlist">
            <div className="mobileallproduct">
              <p>Mobiles</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Carousel Section */}
      <div className="carouselContainer">
        <Slider
          autoplay
          autoplaySpeed={2000}
          dots
          dotsClass="slick-dots custom-Indicator"
          initialSlide={2}
          infinite
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
        >
          <div className="carouselsImg">
            <img src={img2} alt="" />
          </div>
          <div className="carouselsImg">
            <img src={img3} alt="" />
          </div>
          <div className="carouselsImg">
            <img src={img4} alt="" />
          </div>
          <div className="carouselsImg">
            <img src={img5} alt="" />
          </div>
        </Slider>
      </div>

      <div className="maincontainer">
        <div className="dealcontainer">
          <div className="deallayout">
            <div className="dealHeading">
              <p>Best Deals on Smartphones</p>
            </div>

            <div className="dealviewbtn">
              <button>
                <Link to="/bestproducts">
                  <i className="fas fa-angle-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div className="dealslickContainer">
            <Slider
              prevArrow={<PrevBtn />}
              nextArrow={<NxtBtn />}
              slidesToShow={slidesToShow}
              infinite={false}
            >
              {deals.map((item) => {
                return (
                  <>
                    <Link to={`/dealsdetails/${item.id}`}>
                      <div className="dealscontainers">
                        <div className="dealslayout">
                          <div className="dealscarouselImg">
                            <img src={item.imgSrc} alt="" />
                          </div>
                          <div className="dealsmobiletitle">
                            <p>{item.title}</p>
                          </div>
                          <div className="dealsmobilelayout">
                            <p className="dealsmobileprice">{item.price}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="nothingsmartphone">
          <a href="/nothingproducts">
            <div className="nothingimg">
              <img
                src="https://nonprod-media.webdunia.com/public_html/amp-stories/en/img/thumb/898.jpg"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>

      {/* Offer Section */}
      <div className="offerSectionContainer">
        <div className="offertitle">
          <h5>Offers</h5>
        </div>

        {/* Grid Section */}
        <div className="gridsectionlayout">
          <div className="gridimg">
            <img src={img9} alt="" />
          </div>
          <div className="gridimg">
            <img src={img10} alt="" />
          </div>
          <div className="gridimg">
            <img src={img11} alt="" />
          </div>
          <div className="gridimg">
            <img src={img12} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
