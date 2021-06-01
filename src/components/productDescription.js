import React, {Component} from "react";

 const ProductDescription = (props) => 
                    <div className="column is-half product-title">
                        <h1>{props.description}</h1>
                        <h2>Product code:  {props.code}</h2>
                    </div>; 


export default ProductDescription;