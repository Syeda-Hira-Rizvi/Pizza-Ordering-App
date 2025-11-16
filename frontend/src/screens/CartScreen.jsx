import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import "./CartScreen.css";
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <Container className="py-4">
      <Row>
        <Col md={6}>
          <div className="cart-section">
            <h1 className="cart-heading">My Cart</h1>
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <Row className="align-items-center">
                  <Col md={4} className="text-center">
                    <img alt={item.name} src={item.image} className="cart-item-image" />
                  </Col>
                  <Col md={8}>
                    <h5 className="cart-item-name">{item.name} [{item.varient}]</h5>
                    <p className="cart-item-price">Price: {item.quantity} X {item.prices[0][item.varient]} = {item.price}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <FaMinusCircle
                          className="text-danger cursor-pointer"
                          onClick={() => dispatch(addToCart(item, item.quantity - 1, item.varient))}
                        />
                        <span className="mx-2">{item.quantity}</span>
                        <FaPlusCircle
                          className="text-success cursor-pointer"
                          onClick={() => dispatch(addToCart(item, item.quantity + 1, item.varient))}
                        />
                      </div>
                      <FaTrash
                        className="text-danger cursor-pointer"
                        onClick={() => dispatch(deleteFromCart(item))}
                      />
                    </div>
                  </Col>
                </Row>
                <hr className="my-3" />
              </div>
            ))}
          </div>
        </Col>
        <Col md={6}>
          <div className="pay-now-section">
            <h1 className="pay-now-heading">Pay Now</h1>
            <div className="text-center">
              <h4 className="sub-total-heading">Sub Total</h4>
              <h4 className="sub-total-amount">RS: {subTotal} /-</h4>
            </div>
            <div className="text-center">
              <Checkout subTotal={subTotal} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
