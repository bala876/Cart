import React, {Component} from "react";

const ProductTotalCost = (props) => 
    <div className="column center-container">
        <span className="mobile-table-heading"> Total</span> ${props.totalCost}
    </div>;

export default ProductTotalCost;