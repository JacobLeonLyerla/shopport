import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";
const CheckoutPage = ({ cartItems, total }) => {
  return total ? (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>total:${total}</span>
      </div>
      <div className="alert">
        <span className="warning-text">
          *Please use the following test credit card for payments*
        </span>
        <span className="warning-text">
          {" "}
          Number: 4242 4242 4242 4242, Exp: 12/22, CVV: 123.
        </span>
      </div>

      <StripCheckoutButton price={total} />
    </div>
  ) : (
    <div className="checkout-page">
      <div className="alert">
        <span className="warning-text">You have no items in your cart</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
