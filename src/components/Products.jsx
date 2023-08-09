import React, { useState } from "react";

const Products = ({ products }) => {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name}
                </li>
            ))}
        </ul>
    );
};

export default Products;
