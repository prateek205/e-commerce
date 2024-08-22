import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { items } from "../Data/Items";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const [searchData] = useState(items);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchItem}`);
    setSearchItem("");
  };

  const onSearch = (searchTerm) => {
    setSearchItem(searchTerm);
  };

  return (
    <>
      {/* Navbar Section */}
      <div className="navContainer">
        <div className="navLogo">
          <Link to="/">Electronic</Link>
        </div>

        {/* Navbar Search */}
        <div className="navSearchSection">
          <div onSubmit={handleSubmit} className="navSearch">
            <div className="navSearchIcon">
              <i className="fas fa-search search" onClick={handleSubmit}></i>
            </div>
            <input
              type="text"
              placeholder="Search for products, Brands and More"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
          <div className="suggestionlist">
            {searchData
              .filter((data) => {
                const searchTerm = searchItem.toLowerCase();
                const title = data.title.toLowerCase();
                return (
                  searchTerm &&
                  title.startsWith(searchTerm) &&
                  title !== searchTerm
                );
              })
              .map((data) => {
                return (
                  <>
                    <div
                      onClick={() => onSearch(data.title)}
                      className="suggestlist"
                    >
                      <p>{data.title}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>

        {/* Navbar Content */}
        <div className="navContent">
          <div className="navLogin">
            <a href="/login" target="_blank">
              Login
            </a>
          </div>
          <Link to="/wishlist">
            <div className="navCart">
              <i className="fas fa-heart cart"></i>
              <span className="nav-count">0</span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="navCart">
              <i className="fas fa-shopping-cart cart"></i>
              <span className="nav-count">{cart.length}</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Navbar Menu List */}
    </>
  );
};

export default Navbar;
