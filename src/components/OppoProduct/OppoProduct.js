import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { oppo } from "../Data/OpposProduct";


const OppoProduct = () => {

  const [currentPage] = useState(1);
  const postPerPage = 11;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = oppo.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="applecontainer">
        {/* --------------------------------------------------------------- Filter Section -------------------------------------------------------------------*/}
        <div className="appleleftcontainer">
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
                    <div className="blankboxPricelists"></div>
                    <div className="brandtitle">
                      <p>₹5000</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxPricelists"></div>
                    <div className="brandtitle">
                      <p>₹20000</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxPricelists"></div>
                    <div className="brandtitle">
                      <p>₹40000</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankboxPricelists"></div>
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
                    <div className="blankbox"></div>
                    <div className="brandtitle">
                      <p>6 GB</p>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <div className="blankbox"></div>
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
        <div className="applerightcontainer">
          {/* ------------------------------------------------------------- Sort Section --------------------------------------------------------------------- */}
          <div className="applesortsection">
            <div className="appleheading">
              <p>mobiles</p>
              <p className="appleproductcount">
              (Showing <span>{firstPostIndex + 1}</span> -{" "}
                <span>{firstPostIndex + 1 * currentPosts.length}</span> products
                of <span>{oppo.length}</span> products)
              </p>
            </div>
            <div className="applesortlist">
              <div className="applesortheading">
                <p>sort by</p>
              </div>
              <div className="applesortbtns">
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
          {/* ------------------------------------------------------------- Product Section ------------------------------------------------------------------*/}
          <div className="appleproductlists">
            {oppo.map((item) => {
              return (
                <>
                  <a href={`/oppodetails/${item.id}`}>
                    <div className="appleproductlayout">
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
                  </a>
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

export default OppoProduct;
