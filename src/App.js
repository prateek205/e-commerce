import React, { useState } from "react";
import "./Styles.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppleProducts from "./pages/AppleProducts";
import {items} from "./components/Data/Items"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AppleProductDetails from "./pages/AppleProductDetails";
import Cart from "./pages/Cart";
import SmartPhones from "./pages/Smartphones";
import SearchItem from "./components/SearchItem/SearchItem";
import RedmiProducts from "./pages/RedmiProducts";
import SamsungProducts from "./pages/SamsungProducts";
import RedmiProductDetails from "./pages/RedmiProductDetails";
import SamsungProductDetails from "./pages/SamsungProductDetails";
import MotorolaProductDetails from "./pages/MotorolaProductDetails";
import MotorolaProducts from "./pages/MotorolaProducts";
import RedmiNewModelDetails from "./pages/RedmiNewModelDetails";
import RedmiNewModel from "./components/RedmiNewModel/RedmiNewModel";
import SamsungZFlip6New from "./components/SamsungZFlip6New/SamsungZFlip6New";
import SamsungZFlip6Details from "./pages/SamsungZFlip6Details";
import RealmeNew from "./components/RealmeNew/RealmeNew";
import RealmeProductDetails from "./pages/RealmeproductDetails";
import XiaomiProduct from "./components/XiaomiProduct/XiaomiProduct";
import XiaomiProductDetails from "./pages/XiaomiProductDetails";
import AllProducts from "./pages/AllProducts";
import AllProductDetails from "./pages/AllProductDetails";
import Deals from "./pages/Deal";
import DealDetails from "./pages/DealDetails";
import NothingProducts from "./pages/NothingProducts";
import NothingProductDetails from "./pages/NothingProductDetails";
import OppoProducts from "./pages/OppoProducts";
import OppoProductDetails from "./pages/OppoProductDetails";
import Realme13proProduct from "./pages/Realme13proProduct";
import Realme13proDetails from "./pages/Realme13proDetails";


function App() {

  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  
  const addToCart = (data) => {
    setCart([...cart, {...data, quantity: 1}])
  }
  

  return (
  <>
  <Router>
    <Navbar cart={cart} setData={setData}/>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/allproducts" element={<AllProducts items={data}/>}/>
    <Route path="/smartphone" element={<SmartPhones/>}/>
    <Route path="/appleproducts" element={<AppleProducts/>}/>
    <Route path="/redmiproducts" element={<RedmiProducts/>}/>
    <Route path="/samsungproducts" element={<SamsungProducts/>}/>
    <Route path="/motoproducts" element={<MotorolaProducts/>}/>
    <Route path="/redminewmodels" element={<RedmiNewModel/>}/>
    <Route path="/samsungZFlip6" element={<SamsungZFlip6New/>}/>
    <Route path="/realmeproducts" element={<RealmeNew/>}/>
    <Route path="/Xiaomi14Civi" element={<XiaomiProduct/>}/>
    <Route path="/bestProducts" element={<Deals/>}/>
    <Route path="/oppoProducts" element={<OppoProducts/>}/>
    <Route path="/nothingProducts" element={<NothingProducts/>}/>
    <Route path="/realme13pro" element={<Realme13proProduct/>}/>
    <Route path="/productdetails/:id" element={<AllProductDetails cart={cart} setCart={setCart} addToCart={addToCart}/>}/>
    <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart}/>}/>
    <Route path="/dealsdetails/:id" element={<DealDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/oppodetails/:id" element={<OppoProductDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/nothingdetails/:id" element={<NothingProductDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/realme13prodetails/:id" element={<Realme13proDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/appledetails/:id" element={<AppleProductDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/redmidetails/:id" element={<RedmiProductDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/samsungdetails/:id" element={<SamsungProductDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/motoroladetails/:id" element={<MotorolaProductDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/redminewdetails/:id" element={<RedmiNewModelDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/samsungZFlip6details/:id" element={<SamsungZFlip6Details cart={cart} setCart={setCart}/>}/>
    <Route path="/realmeproductdetails/:id" element={<RealmeProductDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/xiaomiproductdetails/:id" element={<XiaomiProductDetails cart={cart} setCart={setCart}/>}/>
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
