import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      {subTotal > 0 ? (
        <StripeCheckout
          amount={subTotal * 100}
          shippingAddress
          token={tokenHandler}
          stripeKey="pk_test_51P2AwG02j2K2zxTSXBVmInUCse0JOH017Yjmoc2lqsw4921a7sA6m3XMu72tAQzEr5atztJOU1TNAfrmUNWmDVUy00jTjtfryB"
          currency="USD"
          
        >
          <Button>Pay Now</Button>
        </StripeCheckout>
      ) : (
        <div>Your cart is empty!</div>
      )}

    </>
  );
};

export default Checkout;
