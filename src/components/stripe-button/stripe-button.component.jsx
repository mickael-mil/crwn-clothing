import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_51HgX7ZLbyGMI6t9b6XpGJ9edKl6fAXZoE9nS3qisWp18fu8pfCJ6VcxmHwZzOBRv9M2lgs4zyj4dJ49oWx7v0xp700dbMnjpz4';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  };

  return(
    <StripeCheckout
      label='Pay now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;