import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import './navbar.css'
import { useDispatch } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
export const Pay=({total})=>{
    const dispatch= useDispatch();
    const tokenHandler= (token)=>{
        dispatch(placeOrder(token,total))
        console.log(token)
    }
    return(
        <StripeCheckout
        amount={total*100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51L1oJgSAcF0NmIGsYZIKtTyRnLfh99kZSDJDcdbLyXiancH1YTpCKENqfSl92AF5p2jNyom9I8IHMQJtSQB1hd1A00N7PpFaeI"
        currency='INR'
        >
            <Button type='button' className='addtocart'>Pay Now</Button>
        </StripeCheckout>
    )
}
