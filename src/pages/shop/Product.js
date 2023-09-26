import React, { useContext } from "react";
//10
import {shopContext} from "../../context/ShoContext"

function Product(props) {

  // 12
const {addToCart, cartItems} = useContext(shopContext)


  const { id, productName, price, productImage } = props.data;
  const cartItemAmount = cartItems[id]
  return (
    <div className="product">
      <div className="cards">
      <img src={productImage} />
      <div className="discription">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
        <button className="add-btn" onClick={() => 
          addToCart(id)
        }>Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
      </div>
      </div>
     
    </div>
  );
}

export default Product;
