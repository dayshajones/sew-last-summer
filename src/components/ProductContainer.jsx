import React from "react";
import products from "./ProductData";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
    return (
    <div>
        <h2>All Products</h2>
        {products.map((product, i) => <ProductCard {...product} key={i} />)}
    </div>
    )
}

export default ProductContainer