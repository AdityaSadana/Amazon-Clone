import React from 'react';
import {useStateValue} from './StateProvider';
import './Product.css';

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt={title} />
            <div className="button">
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
