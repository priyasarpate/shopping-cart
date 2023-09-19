import React from "react";
import { PRODUCTS } from "../../Products";
import HomePage from "../../assets/yellow5.png";
import "./Shop.css";
import Product from "./Product";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>WELCOME TO OUR CHAIRMART!!</h1>
      </div>

      <div className="shopImage">
        <img src={HomePage} alt="" className="homepage" />
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
