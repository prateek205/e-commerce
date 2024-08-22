import React from "react";
import "./BestSmartphone.css";
import { deallist } from "../Data/Deallist";
import { Link } from "react-router-dom";

const BestSmartphone = () => {
  return (
    <>
      <div className="bestcontainer">
        <div className="bestlayout">
          <div className="bestheading">
            <p>Deals On Smartphones</p>
          </div>
          <div className="besttotalcount">
            <p>{deallist.length} items</p>
          </div>
        </div>
        <hr className="bestHr" />
        <div className="bestcontainerlayout">
          {deallist.map((item) => {
            return (
              <>
                <div className="bestcard">
                  <Link to={`/dealsdetails/${item.id}`}>
                    <div className="bestcardimage">
                      <img src={item.imgSrc} alt={item.name} />
                    </div>
                    <div className="bestcardtitle">
                      <p>{item.title}</p>
                    </div>
                    <div className="bestcardprice">
                      <p>{item.price}</p>
                    </div>
                    <div className="bestprices">
                      <p className="mainprice">{item.mainPrice}</p>
                      <p>{item.mainPrices}</p>
                    </div>
                    <div className="bestfeatured">
                      <p>{item.feature}</p>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BestSmartphone;
