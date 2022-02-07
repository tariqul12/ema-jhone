import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    let shipping=0
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;
        shipping=shipping+product.shipping;

    }
    const tex=total/10;
    const grantTotal=total+shipping+tex;
    const formetNumber = num => {
        const precision =num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h5>Items Ordered : {cart.length}</h5>
            <h5>Items Price: {formetNumber(total)} </h5>
            <h5>Shipping Cost: {formetNumber(shipping)}</h5>
            <h5>Tex : {formetNumber(tex)} </h5>
            <p>Total Amount: {formetNumber(grantTotal)} </p>
        </div>
    );
};

export default Cart;