import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "./OrderScreen.css";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userLogin;
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;

  useEffect(() => {
    if (currentUser) {
      dispatch(getUserOrders());
    }
  }, [dispatch, currentUser]);

  return (
    <div className="order-screen-container">
      <h1 className="order-screen-title">Your Orders</h1>

      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}

      {orders && orders.length === 0 ? (
        <Error error="You have no orders" />
      ) : (
        <Table striped bordered hover responsive variant="light" className="order-table">
          <thead className="table-header">
            <tr>
              <th>Order ID</th>
              <th>Order Date & Time</th>
              <th>Order Amount</th>
              <th>Items</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .filter((order) => order.email === currentUser?.email)
              .map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                  <td>{order.orderAmount}</td>
                  <td>
                    <ul className="order-items-list">
                      {order.orderItems.map((item) => (
                        <li key={item._id}>
                          {item.name} [{item.varient}] * {item.quantity} ={" "}
                          {item.price}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <strong>Street:</strong> {order.shippingAddress.street}<br />
                    <strong>City:</strong> {order.shippingAddress.city}<br />
                    <strong>PinCode:</strong> {order.shippingAddress.pincode}<br />
                    <strong>Country:</strong> {order.shippingAddress.country}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default OrderScreen;
