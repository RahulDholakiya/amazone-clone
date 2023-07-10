import React from "react";
import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./Component/CartPage";
import LoginPage from "./Component/LoginPage";
import PlaceOrder from "./Component/PlaceOrder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderCom from "./Component/HeaderCom";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <HeaderCom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
