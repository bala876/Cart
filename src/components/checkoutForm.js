import React, {Component} from "react";

import TotalCost from "./totalCost";

const CheckoutForm = (props) => 
                
                <div className="column submit-form">
                            <div id="total">
                                <TotalCost total ={props.total} />    
                            </div>
                            <div className="field is-grouped">
                                    <p className="control">
                                        <button className="button is-dark" >
                                            Back to shop
                                        </button>                                        
                                    </p>
                                    <p className="control">
                                        <button className="button is-link" href="#">
                                            Continue to checkout
                                        </button>
                                    </p>
                            </div>
                </div>




export default CheckoutForm;