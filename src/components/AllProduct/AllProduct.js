import React, { useState } from "react";
import "./AllProduct.css";
import { Accordion } from "react-bootstrap";
import { mobiledesc } from "../Data/Mobile";
import sale from "../../images/mobile-fest.png";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const AllProduct = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 11;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = items.slice(firstPostIndex, lastPostIndex);

  const [inputValue, setInputValue] = useState("");

  const selectItem = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  if (inputValue == "A to Z") {
    items.sort((a,b)=>{
      let nameA = a.name;
      let nameB = b.name;

      if(nameA < nameB){
        console.log(nameA);
        console.log(nameB);

        return -1
      }
    })
  }
  if (inputValue == "Z to A") {
    items.sort((a,b)=>{
      let nameA = a.name;
      let nameB = b.name;

      if(nameA > nameB){
        console.log(nameA);
        console.log(nameB);

        return -1
      }
    })
  }

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
      <div className="applecontainer">
        {/* --------------------------------------------------------------- Filter Section -------------------------------------------------------------------*/}
        <div className="appleleftcontainer">
          <div className="filter-heading">
            <p>Filters</p>
          </div>
          <hr className="hrLine" />
          <div className="filterbrands">
            <Accordion defaultActiveKey="0" className="accordion">
              <Accordion.Item eventKey="1" className="item">
                <Accordion.Header className="brandheading">
                  <p>price</p>
                </Accordion.Header>
                <Accordion.Body className="pricelist">
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>₹5000</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>₹20000</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>₹40000</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>₹80000 +</p>
                    </div>
                  </label>
                </Accordion.Body>
              </Accordion.Item>
              <hr className="hrLine" />
              <Accordion.Item eventKey="0" className="item">
                <Accordion.Header className="brandheading">
                  <p>brands</p>
                </Accordion.Header>
                <Accordion.Body className="brandslist">
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>Apple</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>SAMSUNG</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>REDMI</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>realme</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>Xiaomi</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>MOTOROLA</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>vivo</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>OPPO</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>Nothing</p>
                    </div>
                  </label>
                </Accordion.Body>
              </Accordion.Item>
              <hr className="hrLine" />
              <Accordion.Item eventKey="3" className="item">
                <Accordion.Header className="brandheading">
                  <p>ram</p>
                </Accordion.Header>
                <Accordion.Body className="ramlist">
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxs"></div>
                    <div className="brandtitle">
                      <p>4 GB</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxs"></div>
                    <div className="brandtitle">
                      <p>6 GB</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxs"></div>
                    <div className="brandtitle">
                      <p>8 GB</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxs"></div>
                    <div className="brandtitle">
                      <p>12 GB</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxs"></div>
                    <div className="brandtitle">
                      <p>16 GB</p>
                    </div>
                  </label>
                </Accordion.Body>
              </Accordion.Item>
              <hr className="hrLine" />
              <Accordion.Item eventKey="4" className="item">
                <Accordion.Header className="brandheading">
                  <p>internal storage</p>
                </Accordion.Header>
                <Accordion.Body className="internallists">
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxs"></div>
                    <div className="brandtitle">
                      <p>1 TB</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxs"></div>
                    <div className="brandtitle">
                      <p>512 GB</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxs"></div>
                    <div className="brandtitle">
                      <p>256 GB</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxs"></div>
                    <div className="brandtitle">
                      <p>128 GB</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxs"></div>
                    <div className="brandtitle">
                      <p>64 GB</p>
                    </div>
                  </label>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="applerightcontainer">
          {/* ------------------------------------------------------------- Sort Section --------------------------------------------------------------------- */}
          <div className="applesortsection">
            <div className="appleheading">
              <p>Mobiles</p>
              <p className="appleproductcount">
                (Showing <span>{firstPostIndex + 1}</span> -{" "}
                <span>{firstPostIndex + 1 * currentPosts.length}</span> products
                of <span>{items.length}</span> products)
              </p>
            </div>
            <div className="applesortlist">
              <div className="applesortheading">
                <label>
                  <p>sort by</p>
                </label>
              </div>
              <select
                onChange={selectItem}
                id="select"
                className="applesortbtns"
              >
                <option value="A to Z">
                  A to Z
                </option>
                <option value="Z to A">
                  Z to A
                </option>
                <option value="Price -- Low to High">
                  Price -- Low to High
                </option>
                <option value="Price -- High to Low">
                  Price -- High to Low
                </option>
              </select>
            </div>
          </div>
          <hr className="hrLine" />
          {/* ------------------------------------------------------------- Product Section ------------------------------------------------------------------*/}

          <div className="pagenumber">
            <Pagination
              totalPosts={items.length}
              postPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
          <div className="appleproductlists">
            {currentPosts.map((item, index) => {
              return (
                <>
                  <Link to={`/productdetails/${item.id}`}>
                    <div className="appleproductlayout" key={index}>
                      <div className="applewishlist">
                        <i className="far fa-heart"></i>
                      </div>
                      <div className="appleproductimage">
                        <img src={item.imgSrc} alt={item.name} />
                      </div>
                      <div className="appledetailing">
                        <div className="appleproductheading">
                          <p>{item.title}</p>
                        </div>
                        <div className="appleproductspecifications">
                          <ul>
                            <li>
                              <p>{item.description1}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{item.description2}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{item.description3}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{item.description4}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{item.description5}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{item.description6}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{item.description7}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{item.description8}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{item.description9}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="applepricesection">
                        <div className="applediscountprice">
                          <p>{item.price}</p>
                        </div>
                        <div className="appleactaulprice">
                          <div className="appleoriginalprice">
                            <p>{item.actualPrice}</p>
                          </div>
                          <div className="applediscount">
                            <p>{item.discount}</p>
                          </div>
                        </div>
                        <div className="applefreedelivery">
                          <p>Free delivery</p>
                        </div>
                        <div className="appleoffer">
                          <p>{item.offer}</p>
                        </div>
                        <div className="appleexchange">
                          <p>{item.exchange}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <hr className="hrLine" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
