import React from "react";

const ProductCard = ({description, image}) => {
    return (
        <div className="product-card">
            <h3>Product Name:{description}</h3>
            <img src={image} alt={description} />
            <br />
            <button disabled>SOLDOUT</button>
            <br />
        </div>
    )
}

export default ProductCard