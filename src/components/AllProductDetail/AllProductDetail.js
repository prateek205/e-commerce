import React, { useEffect, useState } from "react";
import "./AllProductDetail.css";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { items } from "../Data/Items";
import "react-toastify/dist/ReactToastify.css";

const AllProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const filterProduct = items.filter(
      (product) => product.id === parseInt(id)
    );
    setProduct(filterProduct[0]);
  }, [id]);

  const addToCart = (id, imgSrc, title, price, actualPrice, discount) => {
    const object = {
      id,
      imgSrc,
      title,
      price,
      actualPrice,
      discount,
    };
    setCart([...cart, object]);
    console.log("cart product: ", cart);
    toast.success("Item Added Successfully !!!", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="productContainer">
        <div className="productlayout">
          <div className="productimgandbtn">
            <div className="productimages">
              <div className="productsecondaryimg">
                <img src={product.smallImg1} alt="" />
                <img src={product.smallImg2} alt="" />
                <img src={product.smallImg3} alt="" />
                <img src={product.smallImg4} alt="" />
                <img src={product.smallImg5} alt="" />
              </div>
              <div className="apple_wishlist">
                <i className="far fa-heart heart"></i>
              </div>
              <div className="apple_wishlist">
                <i className="fas fa-heart heart"></i>
              </div>
              <div className="productmainimg">
                <img src={product.imgSrc} alt="" />
              </div>
            </div>
            <div className="productbtns">
              <div className="productaddbtn">
                <button
                  onClick={() =>
                    addToCart(
                      product.id,
                      product.imgSrc,
                      product.title,
                      product.price,
                      product.actualPrice,
                      product.discount
                    )
                  }
                >
                  <i className="fas fa-shopping-cart productbtn"></i>
                  add to cart
                </button>
              </div>
              <div className="productaddbtn">
                <button>
                  <i className="fas fa-bolt-lightning productbtn"></i>
                  buy now
                </button>
              </div>
            </div>
          </div>
          <div className="productdescription">
            <div className="producttitle">
              <p>{product.title}</p>
            </div>
            <div className="productextraoff">
              <p>{product.extraOff}</p>
            </div>
            <div className="productallprice">
              <div className="productdiscountprice">
                <p>{product.price}</p>
              </div>
              <div className="productmainprice">
                <p>{product.actualPrice}</p>
              </div>
              <div className="productdiscount">
                <p>{product.discount}</p>
              </div>
            </div>
            <div className="mobilewarranty">
              <div className="mobilewarrentyimg">
                <img src={product.warrentyImg} alt="" />
              </div>
              <div className="mobilewarrentydetails">
                <p>{product.warrentyDetail}</p>
              </div>
            </div>
            <div className="productcolorandstorage">
              <div className="productcolor">
                <div className="productcolorheading">
                  <p>{product.colors}</p>
                </div>
                <div className="productcolorimg">
                  <div className="Colorimg1">
                    <img src={product.Color1} alt="" />
                  </div>
                  <div className="Colorimg1">
                    <img src={product.Color2} alt="" />
                  </div>
                  <div className="Colorimg1">
                    <img src={product.Color3} alt="" />
                  </div>
                </div>
              </div>
              <div className="productstorage">
                <div className="productstorageheading">
                  <p>{product.storage}</p>
                </div>
                <div className="productdifferentstorage">
                  <button className="productstr1">
                    <p>{product.str1}</p>
                  </button>
                  <button className="productstr1">
                    <p>{product.str2}</p>
                  </button>
                  <button className="productstr1">
                    <p>{product.str3}</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="producthighlights">
              <div className="producthighlighttitle">
                <p>{product.highlights}</p>
              </div>
              <div className="productspecification">
                <ul>
                  <li>{product.highlts1}</li>
                </ul>
                <ul>
                  <li>{product.highlts2}</li>
                </ul>
                <ul>
                  <li>{product.highlts3}</li>
                </ul>
                <ul>
                  <li>{product.highlts4}</li>
                </ul>
              </div>
            </div>
            <div className="productdescriptions">
              <div className="productdesc">
                <p>{product.DescHeading}</p>
              </div>
              <div className="productdescriptive">
                <p>{product.shortDesc}</p>
              </div>
            </div>
            <div className="productindepthdesc">
              <div className="productdescheading">
                <p>{product.productDescription}</p>
              </div>
              <div className="productmainlayout1">
                <div className="productdynamic">
                  <div className="productdynamicheading">
                    <p>{product.heading1}</p>
                  </div>
                  <div className="productdynamicinformation">
                    <p>{product.info1}</p>
                  </div>
                </div>
                <div className="productdynamicimages">
                  <div className="productdynamicimg">
                    <img src={product.heading1Img} alt="" />
                  </div>
                </div>
              </div>
              <div className="productmainlayout2">
                <div className="producthighlydurableimg">
                  <img src={product.heading2Img} alt="" />
                </div>
                <div className="producthighlydurable">
                  <div className="producthightitle">
                    <p>{product.heading2}</p>
                  </div>
                  <div className="producthighinformation">
                    <p>{product.info2}</p>
                  </div>
                </div>
              </div>
              <div className="productlayout3">
                <div className="productcamera">
                  <div className="productcameratitle">
                    <p>{product.heading3}</p>
                  </div>
                  <div className="productcamerinformation">
                    <p>{product.info3}</p>
                  </div>
                </div>
                <div className="productcameraimg">
                  <img src={product.heading3Img} alt="" />
                </div>
              </div>
              <div className="productlayout4">
                <div className="productprocessorimg">
                  <img src={product.heading4Img} alt="" />
                </div>
                <div className="productprocessor">
                  <div className="productprocessortitle">
                    <p>{product.heading4}</p>
                  </div>
                  <div className="productprocessorinformation">
                    <p>{product.info4}</p>
                  </div>
                </div>
              </div>
              <div className="productlayout5">
                <div className="productUSB">
                  <div className="productUSBtitle">
                    <p>{product.heading5}</p>
                  </div>
                  <div className="productUSBinformation">
                    <p>{product.info5}</p>
                  </div>
                </div>
                <div className="productUSBimg">
                  <img src={product.heading5Img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductDetail;
