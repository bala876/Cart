import React, {Component} from "react";

const ProductQuantity = (props) => 
    <div className="column center-container">
        <span className="mobile-table-heading"> Quantity</span>
        <input id={props.id} className="quantity" type="number" name="quantity" min="1" max="100" 
            defaultValue={props.quantity} 
            onChange={props.changeQuantity} />
     </div>;

export default ProductQuantity;