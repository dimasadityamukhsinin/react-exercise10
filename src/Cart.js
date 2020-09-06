import React from 'react';
import './Cart.css';
import AppContext from './AppContext';

const Cart = () => {
    return(
        <AppContext.Consumer>
            {
                context => {
                    return (
                        <div className="Cart">
                            <h1>TOKO KOPI IMPACT</h1>
                            <h1>CHECKOUT</h1>
                            <div className="product">
                                <div>
                                    <div className="button">
                                        <div>Cart </div>
                                        <div>{context.saldo.cart} </div>
                                    </div>
                                    <div className="button">
                                        <div>Total </div>
                                        <div>Rp {context.saldo.totalPrice} </div>
                                    </div>
                                    <button>Process Order</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    );
}

export default Cart;