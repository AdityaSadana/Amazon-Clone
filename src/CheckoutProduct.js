import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price}) {
    const [{basket} , dispatch] = useStateValue();
    console.log(id, title, image, price)
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkout_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}> Remove From Basket </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
