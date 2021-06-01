
import React, {Component} from "react";

import Product from "./product";

import CheckoutForm from "./checkoutForm";
import data from "../data/data";




class ShoppingCart extends React.Component {
            constructor(props, context) {
                const products = data.products;
                super(props, context);
                this.state = {
                    productComponents: [] // An array to hold all the products
                };
                // Pushing all products to state.productComponents
                let total = 0; // Used to calculate the total cost 
                for(let product of products) {
                    this.state.productComponents.push(<Product key={product.code} image={product.image} description={product.description} 
                    code={product.code} changeQuantity={this.changeQuantity} totalCost={product.quantity * product.price} quantity={product.quantity} price={product.price} />);
                    total += Number(product.quantity) * Number(product.price);
                }

                this.state.total = total;
            }

            // this function get executed when changing the quantity of a product 
            changeQuantity = (e) => {

                let newState;
                
                for(let i = 0; i < this.state.productComponents.length; i++) {
                    
                    if (this.state.productComponents[i].props.code == e.target.id) {
                        
                        newState = this.state.productComponents.slice(); 
                        
                        
                        let oldTotalCost = newState[i].props.totalCost;
                       
                        
                        let newProps = Object.assign({}, newState[i].props);
                        newProps.totalCost = (e.target.value * newState[i].props.price).toFixed(2);
                        
                        let product = Object.assign({}, newState[i]);
                        product.props = newProps;

                        newState[i] = product;

                        this.setState( (prevState, props) => ({
                            productComponents: newState,
                            total: (Number(prevState.total) + Number(newProps.totalCost) - Number(oldTotalCost)).toFixed(2) 
                        }));     
                    } 
                }
                e.preventDefault(); 
            }

            
            render() {    
                return(
                    <div>                     
                        {this.state.productComponents}
                        <section className="columns checkout">
                            <CheckoutForm total={this.state.total}/>
                        </section>
                    </div>
                );
            }
        }

export default ShoppingCart;