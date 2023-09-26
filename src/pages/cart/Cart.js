import React from "react";
import { PRODUCTS } from "../../Products";
import { useContext } from "react";
import { shopContext } from "../../context/ShoContext";
import CartItem from "./CartItem";
import './Cart.css';

function Cart() {
  //1
  const { cartItems } = useContext(shopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your cart Items</h1>
      </div>
      <div className="cartItems">
        {/* 2 */}
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return<CartItem data={product} />
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
