import React from 'react';

const Cart = (props) => {
    console.log("H", props);
    const cart = props.cart;
    return (
        <div>
            <h3>Attend & Donate</h3>
            <p>Attend: {cart.length}</p>
            <h6>Donate money double your age</h6>
            
        </div>
    );
};

export default Cart;