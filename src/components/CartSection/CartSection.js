import React, { useState } from "react";
import "./CartSection.css";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";

const CartSection = ({ cart, setCart }) => {
  const removeItem = (id) => {
    const filterItem = cart.filter((product) => product.id !== id);
    setCart(filterItem);
  };

  const [plus, setPlus] = useState(1);

  const handleMinus = () => {
    plus === 1 ? setPlus(1) : setPlus(plus - 1);
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="cartemptycontainer">
          <div className="cartemptyshop">
            <div className="cartempty">
              <h2>Cart is Empty...</h2>
              <i className="fas fa-shopping-cart cart"></i>
            </div>
            <Link to="/allproducts">
              <div className="shopbtn">
                <button>Shop Now</button>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="cartSectionContainer">
          <div className="carttitlesection">
            <h3>Cart-Items</h3>
            <button>Buy Now</button>
          </div>
          <div className="cartsectionlayout">
            <Scrollbars>
              {cart.map((product, productIndex) => {
                return (
                  <>
                    <div className="cartproductlist">
                      <div className="cartLRSide">
                        <div className="cartleftside">
                          <div className="cartimg">
                            <img src={product.imgSrc} alt="" />
                          </div>
                        </div>
                        <div className="cartrightside">
                          <div className="cart1cart2cart3side">
                            <div className="cart1side">
                              <div className="carttitle">
                                <h4>{product.title.slice(0, 100)}...</h4>
                              </div>
                              <div className="cartpricedetail">
                                <div className="cartmainprice">
                                  <p>{product.price}</p>
                                </div>
                                <div className="cartactualprice">
                                  <p>{product.actualPrice}</p>
                                </div>
                                <div className="cartdiscount">
                                  <p>{product.discount}</p>
                                </div>
                              </div>
                            </div>
                            <div className="cart2side">
                              <div className="cartcounterbtn">
                                <button className="minus" onClick={handleMinus}>
                                  <i className="fas fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  placeholder={plus}
                                  className="count"
                                />
                                <button
                                  className="plus"
                                  onClick={() => setPlus(plus + 1)}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                            </div>
                            <div className="cart3side">
                              <div className="cartproductcount">
                                <span>{product.price}</span>
                              </div>
                            </div>
                            <div className="cart4side">
                              <div className="removebtn">
                                <i
                                  className="fas fa-trash clear"
                                  onClick={() => removeItem(product.id)}
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Scrollbars>
          </div>
          <div className="carttotalCounter">
            {cart.map((pro) => {
              return (
                <div className="totalcounttitle">
                  <h4>Total Amount: {pro.price}</h4>
                </div>
              );
            })}
          </div>
          <div className="totalcheckoutbtn">
            <button>Check Out</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSection;
