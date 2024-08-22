import React, { useEffect, useState } from "react";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import { items } from "../items";

const ItemDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const filterItems = items.filter((product) => product.id == id);
    setProduct(filterItems[0]);
  }, [id]);

  return (
    <>
      <div className="itemdetailcontainer">
        <div className="itemdetailleftcontainer">
          <div className="imagecontainer">
            <img src={product.imgSrc} alt="" />
          </div>
          <div className="cartbtn">
            <div className="addtocartbtn">
              <button>Add to Cart</button>
            </div>
            <div className="buynowbtn">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="itemdetailrightcontainer">
          <div className="itemtitle">
            <h3>{product.title}</h3>
          </div>
          <div className="itemprice">
            <p>
              <i className="fas fa-indian-rupee-sign"></i> {product.price}
            </p>
          </div>
          <div className="cartprices">
            <div className="cartactualprice">
              <p>
                <i className="fas fa-indian-rupee-sign"></i>{" "}
                {product.actualPrice}
              </p>
            </div>
            <div className="cartdiscountprice">
              <p>{product.discount}</p>
            </div>
          </div>
          <div className="itemcartdescription">
            <div className="itemcarttitle">
              <p className="desc">{product.description}</p>
              <p className="info">{product.information}</p>
            </div>
          </div>
          <div className="itemcartcolor">
            <div className="itemcolortitle">
              <p className="colordesc">{product.colors}</p>
              <div className="colorList-btn">
                <button className="col-1-btn">{product.color1}</button>
                <button className="col-2-btn">{product.color2}</button>
                <button className="col-3-btn">{product.color3}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
