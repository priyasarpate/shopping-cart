import React from "react";
import { useContext } from "react";
import { shopContext } from "../../context/ShoContext";

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;


//   last step add to cart and remove to cart
  const { cartItems, addToCart, removeFromCart } = useContext(shopContext);


  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>RS.{price}</p>
        <div className="countHandler">

            {/* remove from card  */}
            {/* <butto> - </butto> */}
            <button onClick={() => removeFromCart(id)}>  -  </button>
            <input value={cartItems[id]} onChange={(e) => {}}/>
            {/* <butto> + </butto> */}
            <button onClick={() => addToCart(id)}> + </button>


        </div>
      </div>
    </div>
  );
}

export default CartItem;
