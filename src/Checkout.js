import React from 'react'
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" 
                src="https://etimg.etb2bimg.com/photo/55507429.cms"
                alt="ad"
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To add an item in your basket click "Add to Basket" button of the respective item.</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket.map(item => {
                        return <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                         />
                    })}
                </div>
            )}
            </div>
            {basket.length>0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            ) }
        </div>
    )
}

export default Checkout
