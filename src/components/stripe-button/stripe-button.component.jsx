import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_lK71U1hLGIOuTiqRUvRLjtZR00q4Pc9CQp';

    const onToken = token => {
        console.log(token);
        alert('Payment successful!')
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