import React from 'react'
import '../Stylesheets/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Management/StateProvider';
import { getBasketTotal } from '../Management/reducer';

const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                        <small className="subtotal-gift">
                            <input type="checkbox" />This order contains a gift wrap.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />
            <button className="subtotal-checkoutButton">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
