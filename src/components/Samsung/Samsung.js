import React, { useState } from "react";
import "./Samsung.css";
import { Accordion } from "react-bootstrap";
import { samsung } from "../Data/Samsunglist";

const Samsung = () => {
  const [currentPage] = useState(1);
  const postPerPage = 11;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = samsung.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      {/* ---------------------------------------------------- Products Section -------------------------------------------------------*/}
      <div className="samsungitemcontainer">
        {/* ------------------------------------------------------ Filter Section -----------------------------------------------------------*/}
        <div className="samsungfiltercontainer">
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
              <Accordion.Item eventKey="3" className="item">
                <Accordion.Header className="brandheading">
                  <p>ram</p>
                </Accordion.Header>
                <Accordion.Body className="ramlist">
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
                      <p>16 GB</p>
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
        <div className="samsungproductlistcontainer">
          {/* ------------------------------------------------------ Sort Section ----------------------------------------------------------*/}
          <div className="samsungsortsection">
            <div className="samsungheading">
              <p>mobiles</p>
              <p className="samsungproductcount">
                (Showing <span>{firstPostIndex + 1}</span> -{" "}
                <span>{firstPostIndex + 1 * currentPosts.length}</span> products
                of <span>{samsung.length}</span> products)
              </p>
            </div>
            <div className="samsungsortlist">
              <div className="samsungsortheading">
                <p>sort by</p>
              </div>
              <div className="samsungsortbtns">
                <button>
                  <p>Price -- Low to High</p>
                </button>
                <button>
                  <p>Price -- High to Low</p>
                </button>
              </div>
            </div>
          </div>
          <hr className="hrLine" />
          {/* ------------------------------------------------------ Product Section -------------------------------------------------------*/}
          <div className="samsungproductlists">
            {samsung.map((item) => {
              return (
                <>
                  <a href={`/samsungdetails/${item.id}`}>
                    <div className="samsungproductlayout">
                      <div className="samsungwishlist">
                        <i className="far fa-heart"></i>
                      </div>
                      <div className="samsungproductimage">
                        <img src={item.imgSrc} alt={item.name} />
                      </div>
                      <div className="samsungdetailing">
                        <div className="samsungproductheading">
                          <p>{item.title}</p>
                        </div>
                        <div className="samsungproductspecifications">
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
                      <div className="samsungpricesection">
                        <div className="samsungdiscountprice">
                          <p>{item.price}</p>
                        </div>
                        <div className="samsungactaulprice">
                          <div className="samsungoriginalprice">
                            <p>{item.actualPrice}</p>
                          </div>
                          <div className="samsungdiscount">
                            <p>{item.discount}</p>
                          </div>
                        </div>
                        <div className="samsungfreedelivery">
                          <p>Free delivery</p>
                        </div>
                        <div className="samsungoffer">
                          <p>{item.offers}</p>
                        </div>
                        <div className="samsungexchange">
                          <p>{item.exchange}</p>
                        </div>
                      </div>
                    </div>
                    <hr className="hrLine" />
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Samsung;
