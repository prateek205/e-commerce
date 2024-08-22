import React from "react";
import "./Smartphone.css";
import Slider from "react-slick";
import upcomingSale2 from "../../images/upcoming-sale1.webp";
import upcomingSale3 from "../../images/upcoming-sale3.webp";
import upcomingLaunches from "../../images/upcominglaunches.webp";
import justLaunches1 from "../../images/justlaunches1.webp";
import justLaunches2 from "../../images/justlaunches2.png";
import justLaunches3 from "../../images/justlaunches3.webp";
import justLaunches4 from "../../images/justlaunches4.webp";
import sale from "../../images/mobile-fest.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosNewIcon from "@mui/icons-material/ArrowForwardIos";
import { redmi, mobiledesc, samsung, apple } from "../Data/Mobile";

/* ------------------------------------------------------------------------- Slick_Slider_Funcnality ------------------------------------------------------------*/
let slidesToShow = 6;
const PreviousBtn = (props) => {
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

const NextBtn = (props) => {
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

const GridViewSmartphone = () => {

  return (
    <>
      <div className="mobiledescriptioncontainer">
        {mobiledesc.map((item) => {
          return (
            <>
              <div className="mobiledescription">
                <div className="mobileheading">
                  <p>{item.heading}</p>
                </div>
                <div className="mobileinformation">
                  <p>{item.information}</p>
                </div>
                <div className="saleimg">
                  <img src={sale} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="mobilehomepage">
        <div className="mobilehomerightside">
          {/* ------------------------------------------------------------- Smartphone_Launching_Images --------------------------------------------------------- */}
          <div className="smartphone-ads">
            <div className="upcomingSaleHeading">
              <p>upcoming sales</p>
              <hr className="hrLine" />
            </div>
            <a href="/motoProducts">
            <div className="upcoming-sale1">
              <img src={upcomingSale2} alt="" />
            </div>
            </a>
            <a href="/oppoProducts">
            <div className="upcoming-sale3">
              <img src={upcomingSale3} alt="" />
            </div>
            </a>
            <div className="upcomingLaunchHeading">
              <p>upcoming launched</p>
              <hr className="hrLine" />
            </div>
            <a href="/realme13pro">
            <div className="upcoming-launches">
              <img src={upcomingLaunches} alt="" />
            </div>
            </a>
            <div className="justLaunchHeading">
              <p>just launched</p>
              <hr className="hrLine" />
            </div>
            <a href="/redminewmodels">
            <div className="just-launches1">
              <img src={justLaunches1} alt="" />
            </div>
            </a>
            <a href="/samsungZFlip6">
            <div className="just-launches2">
              <img src={justLaunches2} alt="" />
            </div>
            </a>
            <a href="/realmeproducts">
            <div className="just-launches3">
              <img src={justLaunches3} alt="" />
            </div>
            </a>
            <a href="/Xiaomi14Civi">
            <div className="just-launches4">
              <img src={justLaunches4} alt="" />
            </div>
            </a>
          </div>

          {/* ------------------------------------------------------------- Apple_Smartphone_Container ---------------------------------------------------------- */}
          <div className="smartphonecontainer">
            <div className="smartphonelayout">
              <div className="smartphoneHeading">
                <p>apple smartphones</p>
              </div>

              <div className="smartphoneviewbtn">
                <button>
                  <a href="/appleproducts">view all</a>
                </button>
              </div>
            </div>
            <hr className="hrLine" />
            <div className="carouselimg">
              <Slider
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                slidesToShow={slidesToShow}
                infinite={false}
              >
                {apple.map((item) => {
                  return (
                    <>
                      <a href={`/appledetails/${item.id}`}>
                        <div className="containers">
                          <div className="productwishlists">
                            <i className="far fa-heart"></i>
                          </div>
                          <div className="carouselImg">
                            <img src={item.imgSrc} alt="" />
                          </div>
                          <div className="mobiletitle">
                            <p>{item.title.slice(0, 50)}...</p>
                          </div>
                          <div className="mobilepricelayout">
                            <p className="mobilemainprice">{item.price}</p>
                            <p className="mobileactualprice">
                              {item.actualPrice}
                            </p>
                            <p className="discountprice">{item.discount}</p>
                          </div>
                        </div>
                      </a>
                    </>
                  );
                })}
              </Slider>
            </div>
            <hr className="hrLine" />
          </div>

          {/* ------------------------------------------------------------- Redmi_Smartphone_Container ---------------------------------------------------------- */}
          <div className="smartphonecontainer">
            <div className="smartphonelayout">
              <div className="smartphoneHeading">
                <p>redmi smartphones</p>
              </div>
              <div className="smartphoneviewbtn">
                <button>
                  <a href="/redmiproducts">view all</a>
                </button>
              </div>
            </div>
            <hr className="hrLine" />
            <div className="carouselimg">
              <Slider
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                slidesToShow={slidesToShow}
                infinite={false}
              >
                {redmi.map((item) => {
                  return (
                    <>
                      <a href={`/redmidetails/${item.id}`}>
                        <div className="containers">
                          <div className="productwishlists">
                            <i className="far fa-heart"></i>
                          </div>
                          <div className="carouselImg">
                            <img src={item.imgSrc} alt="" />
                          </div>
                          <div className="mobiletitle">
                            <p>{item.title.slice(0, 50)}...</p>
                          </div>
                          <div className="mobilepricelayout">
                            <p className="mobilemainprice">{item.price}</p>
                            <p className="mobileactualprice">
                              {item.actualPrice}
                            </p>
                            <p className="discountprice">{item.discount}</p>
                          </div>
                        </div>
                      </a>
                    </>
                  );
                })}
              </Slider>
            </div>
            <hr className="hrLine" />
          </div>

          {/* ------------------------------------------------------------- Samsung_Smartphone_Container -------------------------------------------------------- */}
          <div className="smartphonecontainer">
            <div className="smartphonelayout">
              <div className="smartphoneHeading">
                <p>samsung smartphones</p>
              </div>
              <div className="smartphoneviewbtn">
                <button>
                  <a href="/samsungproducts">view all</a>
                </button>
              </div>
            </div>
            <hr className="hrLine" />
            <div className="carouselimg">
              <Slider
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                slidesToShow={slidesToShow}
                infinite={false}
              >
                {samsung.map((item) => {
                  return (
                    <>
                      <a href={`/samsungdetails/${item.id}`}>
                        <div className="containers">
                          <div className="productwishlists">
                            <i className="far fa-heart"></i>
                          </div>
                          <div className="carouselImg">
                            <img src={item.imgSrc} alt="" />
                          </div>
                          <div className="mobiletitle">
                            <p>{item.title.slice(0, 50)}...</p>
                          </div>
                          <div className="mobilepricelayout">
                            <p className="mobilemainprice">
                              {item.price}
                            </p>
                            <p className="mobileactualprice">
                              {item.actualPrice}
                            </p>
                            <p className="discountprice">{item.discount}</p>
                          </div>
                        </div>
                      </a>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridViewSmartphone;
