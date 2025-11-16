import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer, addPizzaReducer, getPizzaByIdReducer, updatePizzaByIdReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer, getAllUsersReducer,  forgotPasswordReducer,
  updateRoleReducer } from "./reducers/userReducer";
import { placeOrderReducer, getUserOrdersReducer, allUserOrdersReducer } from "./reducers/orderReducer";

let cartItems;
try {
  const cartItemsJson = localStorage.getItem("cartItems");
  cartItems = cartItemsJson ? JSON.parse(cartItemsJson) : [];
} catch (error) {
  console.error('Error parsing cart items from local storage:', error);
  cartItems = [];
}

let currentUser;
try {
  const currentUserJson = localStorage.getItem("currentUser");
  currentUser = currentUserJson ? JSON.parse(currentUserJson) : null;
} catch (error) {
  console.error('Error parsing current user from local storage:', error);
  currentUser = null;
}

const rootReducer = combineReducers({
  getAllPizzaReducer,
  cartReducer,
  registerUserReducer,
  loginUserReducer,
  placeOrderReducer,
  getUserOrdersReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaByIdReducer,
  allUserOrdersReducer,
  getAllUsersReducer,
  forgotPasswordReducer,
  updateRoleReducer,
});

const initialState = {
  cartReducer: { cartItems },
  loginUserReducer: { currentUser },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store

