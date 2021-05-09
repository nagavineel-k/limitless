import React from 'react';
import { useStateValue } from '../Management/StateProvider';
import '../Stylesheets/CheckoutProduct.css';

const CheckoutProduct = ({ id, title, price, image, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    //Remove item from Basket
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-image" src={image} />
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct-rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
