import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_lK71U1hLGIOuTiqRUvRLjtZR00q4Pc9CQp';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(error => {
            console.log(`Payment Error: ${JSON.parse(error)}`)
            alert('There was an error processing your payment.')
        })
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            amount={priceForStripe}
            currency='EUR'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is €${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;