import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { items } from "../Data/Items";
import { Accordion } from "react-bootstrap";


const SearchItem = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter(
        (product) =>
          product.title.toLowerCase().includes(term.toLowerCase()) ||
          product.category.toLowerCase().includes(term.toLowerCase())
      );
      // console.log(data);
      setFilterData(data);
    };
    filteredData();
  }, [term]);

  return (
    <>
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
              <Accordion.Item eventKey="4" className="item ">
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
                (product show : <span>{filterData.length}</span>)
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
            {filterData.map((value) => {
              return (
                <>
                  <Link to={`/productdetails/${value.id}`}>
                    <div className="appleproductlayout">
                      <div className="applewishlist">
                        <i className="fas fa-heart"></i>
                      </div>
                      <div className="appleproductimage">
                        <img src={value.imgSrc} alt={value.name} />
                      </div>
                      <div className="appledetailing">
                        <div className="appleproductheading">
                          <p>{value.title}</p>
                        </div>
                        <div className="appleproductspecifications">
                          <ul>
                            <li>
                              <p>{value.description1}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{value.description2}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{value.description3}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{value.description4}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{value.description5}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{value.description6}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{value.description7}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{value.description8}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>{value.description9}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="applepricesection">
                        <div className="applediscountprice">
                          <p>{value.price}</p>
                        </div>
                        <div className="appleactaulprice">
                          <div className="appleoriginalprice">
                            <p>{value.actualPrice}</p>
                          </div>
                          <div className="applediscount">
                            <p>{value.discount}</p>
                          </div>
                        </div>
                        <div className="applefreedelivery">
                          <p>Free delivery</p>
                        </div>
                        <div className="appleoffer">
                          <p>{value.offer}</p>
                        </div>
                        <div className="appleexchange">
                          <p>{value.exchange}</p>
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

export default SearchItem;
