import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import ForgetPassword from "./screens/ForgetPassword";
import ResetPassword from "./screens/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/admin" element={<AdminScreen/>} />
        <Route path="/orders" element={<OrderScreen/>} />
        <Route path="/login" element={<Login/>} exact />
        <Route path="/register" element={<Register/>}  />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/reset-password" element={<ResetPassword/>}  />
        <Route path="/cart" element={<CartScreen/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/contact" element={<Contact/>}  />
        <Route path="/policy" element={<Policy/>}  />
        <Route path="/" element={<HomeScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
