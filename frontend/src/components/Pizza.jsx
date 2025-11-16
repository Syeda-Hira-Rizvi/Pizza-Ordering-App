import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
import "./Pizza.css"; // Import CSS file for Pizza component styles

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="pizza-card">
        <Card.Img
          variant="top"
          src={pizza.image}
          className="pizza-image"
          onClick={handleShow}
        />

        <Card.Body>
          <Card.Title className="pizza-name">{pizza.name}</Card.Title>
          <hr />
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="variant-selection">
              <h6>Variants</h6>
              <select
                value={varient}
                onChange={(e) => setVarient(e.target.value)}
              >
                {pizza.varients.map((varient) => (
                  <option key={varient}>{varient}</option>
                ))}
              </select>
            </div>
            <div className="quantity-selection">
              <h6>Quantity</h6>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(10).keys()].map((v, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="pizza-price">Price: {pizza.prices[0][varient] * quantity} /-RS</div>
            <Button
              onClick={addToCartHandler}
              className="add-to-cart-button"
            >
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} className="pizza-modal">
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-3">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="modal-pizza-image"
            />
          </div>
          <div>
            <h5 className="modal-description-heading">Description:</h5>
            <p className="modal-description">{pizza.description}</p>
            <div className="modal-close-button">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
