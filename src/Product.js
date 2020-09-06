import React, { useContext, useState } from 'react';
import AppContext from './AppContext';
import { tambahSaldo, kurangiSaldo } from './actions/saldoActions';
import {saldoReducer} from './reducers/Saldo';
import './App.css';

const Product = () => {
    const appContext = useContext(AppContext);

    let [mochaCart, setMocha] = useState(0);
    let [cappucinoCart, setCappucino] = useState(0);
    let [chocolateCart, setChocolate] = useState(0);
    let [teaCart, setTea] = useState(0);
  
    const handleBuyCappucino = () => {
      const saldo  = saldoReducer(appContext.saldo, tambahSaldo(appContext.cappucino.price))
      setCappucino(cappucinoCart + 1);
      appContext.saldo = saldo;
    }
  
    const handleReduceCappucino = () => {
      const saldo  = saldoReducer(appContext.saldo, kurangiSaldo(appContext.cappucino.price))
      setCappucino(cappucinoCart - 1);
      appContext.saldo = saldo;
    }
  
    const handleBuyChocolate = () => {
      const saldo = saldoReducer(appContext.saldo, tambahSaldo(appContext.chocolate.price));
      setChocolate(chocolateCart + 1);
      appContext.saldo = saldo;
    }
  
    const handleReduceChocolate = () => {
      const saldo = saldoReducer(appContext.saldo, kurangiSaldo(appContext.chocolate.price));
      setChocolate(chocolateCart - 1);
      appContext.saldo = saldo;
    }
  
    const handleBuyMocha = () => {
      const saldo = saldoReducer(appContext.saldo, tambahSaldo(appContext.mocha.price));
      appContext.saldo = saldo;
      setMocha(mochaCart + 1);
      console.log(saldo);
    }
  
    const handleReduceMocha = () => {
      const saldo = saldoReducer(appContext.saldo, kurangiSaldo(appContext.mocha.price));
      appContext.saldo = saldo;
      setMocha(mochaCart - 1);
      console.log(saldo);
    }
  
    const handleBuyTea = () => {
      const saldo = saldoReducer(appContext.saldo, tambahSaldo(appContext.tea.price))
      setTea(teaCart + 1);
      appContext.saldo = saldo;
    }
  
    const handleReduceTea = () => {
      const saldo = saldoReducer(appContext.saldo, kurangiSaldo(appContext.tea.price))
      setTea(teaCart - 1);
      appContext.saldo = saldo;
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (
                        <div className="App">
                            <h1>TOKO KOPI IMPACT</h1>
                            <h1>{context.saldo.cart}</h1>
                            <div className="product">
                                <div className="button">
                                <div className="total">
                                    <div>TOTAL HARGA: Rp {context.saldo.totalPrice}</div>
                                </div>
                                </div>
                            </div>
                            <div className="product">
                                <h1>PRODUCTS</h1>
                                <div>
                                    <div className="button">
                                        <div>Coffe Mocha Rp {context.mocha.price}</div>
                                        <div>
                                        <button onClick={() => handleReduceMocha()}>-</button>
                                            &nbsp; {mochaCart} &nbsp;
                                        <button onClick={() => handleBuyMocha()}>+</button>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <div>Cappucino Rp {context.cappucino.price}</div>
                                        <div>
                                        <button onClick={() => handleReduceCappucino()}>-</button>
                                            &nbsp; {cappucinoCart} &nbsp;
                                        <button onClick={() => handleBuyCappucino()}>+</button>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <div>Chocolate Rp {context.chocolate.price}</div>
                                        <div>
                                        <button onClick={() => handleReduceChocolate()}>-</button>
                                            &nbsp; {chocolateCart} &nbsp;
                                        <button onClick={() => handleBuyChocolate()}>+</button>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <div>Tea Rp {context.tea.price}</div>
                                        <div>
                                        <button onClick={() => handleReduceTea()}>-</button>
                                            &nbsp; {teaCart} &nbsp;
                                        <button onClick={() => handleBuyTea()}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    );
}

export default Product;