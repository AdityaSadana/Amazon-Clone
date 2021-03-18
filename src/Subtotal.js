import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider'; 
import './Subtotal.css';
import { getBasketTotal } from './reducer';
import {db} from './firebase';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const [user] = useStateValue();

    const OrderProducts = () => {
        var total=getBasketTotal(basket);
        var d=new Date;
        var r=Number(Math.floor(Math.random()*10000000000000000))
        db.collection("Orders").doc("OrdId"+r.toString()).set({
            Items: basket,
            User: user.user.email,
            Time: d,
            Total: total
        })
        .then(() => {
            console.log("Order Placed");
            dispatch({type: 'CLEAR_BASKET'});
        })
    }
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => 
                (
                   <>
                   <p>Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                   </p>
                   {/* <small className="subtotal_gift">
                       <input type="checkbox" /> This order contains a gift
                   </small> */}
               </>
               )}
               decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"₹"}
                />
            {user.user ? 
                <button onClick={() => OrderProducts()}>Proceed to Checkout</button>
                :
                <h4>You must be Signed In to Place Order</h4>
            }
            
            
            
        </div>
    )
}

export default Subtotal
