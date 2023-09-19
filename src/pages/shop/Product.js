import React from "react";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <div className="cards">
      <img src={productImage} />
      <div className="discription">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
        <button className="add-btn">Add to Cart</button>

      </div>
      </div>
     
    </div>
  );
}

export default Product;
