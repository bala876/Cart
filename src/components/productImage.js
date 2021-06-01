import React, {Component} from "react";

const ProductImage = (props) => 
    <div className="column product-image">
        <img src={props.url} alt={props.imageAlt} />
    </div>;

export default ProductImage;