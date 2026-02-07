import axios from "axios";
import { clearCart } from './cartAction';

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/orders/placeorder`, {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    dispatch(clearCart());
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL", payload: error.message });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  dispatch({ type: "USER_ORDER_REQUEST" });

  try {
    const currentUser = getState().loginUserReducer.currentUser;
    if (!currentUser) {
      throw new Error("User not found. Please log in again.");
    }

    const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/orders/getuserorder`, {
      userid: currentUser._id,
    });
    dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    console.error("getUserOrders error:", error);
    dispatch({ type: "USER_ORDER_FAIL", payload: error.message });
  }
};
export const getAllOrders = () => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "ALL_ORDER_REQUEST",
  });
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/orders/alluserorder`);
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAIL", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "GET_ALL_ORDER_REQUEST",
  });
  try {
    await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/orders/deliverorder`, { orderid });
    alert("Deliverd Success");
    const orders = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/orders/alluserorder`);
    dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });
    window.location.href = "/admin/orderlist";
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
  }
};
