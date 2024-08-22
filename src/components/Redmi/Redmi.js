import React, { useState } from "react";
import "./Redmi.css";
import { Accordion } from "react-bootstrap";
import { redmi } from "../Data/Redmilist";

const Redmi = () => {
  const [currentPage] = useState(1);
  const postPerPage = 11;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = redmi.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      {/* ------------------------------------------------------ Products Container -------------------------------------------------------*/}
      <div className="redmiitemcontainer">
        {/* ------------------------------------------------------ Filter Section -----------------------------------------------------------*/}
        <div className="redmifiltercontainer">
          <div className="filter-heading">
            <p>Filters</p>
          </div>
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
        <div className="redmiproductlistcontainer">
          {/* ------------------------------------------------------ Sort Section ----------------------------------------------------------*/}
          <div className="redmisortsection">
            <div className="redmiheading">
              <p>mobiles</p>
              <p className="redmiproductcount">
                (Showing <span>{firstPostIndex + 1}</span> -{" "}
                <span>{firstPostIndex + 1 * currentPosts.length}</span> products
                of <span>{redmi.length}</span> products)
              </p>
            </div>
            <div className="redmisortlist">
              <div className="redmisortheading">
                <p>sort by</p>
              </div>
              <div className="redmisortbtns">
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
          <div className="redmiproductlists">
            {redmi.map((item) => {
              return (
                <>
                  <a href={`/redmidetails/${item.id}`}>
                    <div className="redmiproductlayout">
                      <div className="redmiwishlist">
                        <i className="far fa-heart"></i>
                      </div>
                      <div className="redmiproductimage">
                        <img src={item.imgSrc} alt={item.name} />
                      </div>
                      <div className="redmidetailing">
                        <div className="redmiproductheading">
                          <p>{item.title}</p>
                        </div>
                        <div className="redmiproductspecifications">
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
                        </div>
                      </div>
                      <div className="redmipricesection">
                        <div className="redmidiscountprice">
                          <p>{item.price}</p>
                        </div>
                        <div className="redmiactaulprice">
                          <div className="redmioriginalprice">
                            <p>{item.actualPrice}</p>
                          </div>
                          <div className="redmidiscount">
                            <p>{item.discount}</p>
                          </div>
                        </div>
                        <div className="redmifreedelivery">
                          <p>Free delivery</p>
                        </div>
                        <div className="redmioffer">
                          <p>{item.offers}</p>
                        </div>
                        <div className="redmiexchange">
                          <p>{item.exchange}</p>
                        </div>
                        <div className="redmioffer">
                          <p>{item.offer}</p>
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

export default Redmi;
