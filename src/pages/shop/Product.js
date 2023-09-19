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
      </div>
      </div>
     
    </div>
  );
}

export default Product;
