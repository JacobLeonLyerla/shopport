import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey =
    "pk_test_51JoZP2J8uV9KNDZMKsj6aJzdRuYUgKUITmLfXWTAM0rrMhWDlxLqOoDDZjGvqB7zzZejbHiKCytvpNOGidhe18yT00MVSHFIpS";

    const onToken = token  =>{
        console.log(token)
    }
  return (
    <StripeCheckout
      label="Pay Now"
      name="shopport"
      billing
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
