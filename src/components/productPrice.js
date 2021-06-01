import React, {Component} from "react";

const ProductPrice = (props) => 
    <div className="column center-container">
            <span className="mobile-table-heading"> Price</span> ${props.price}
    </div>;
            
export default ProductPrice;