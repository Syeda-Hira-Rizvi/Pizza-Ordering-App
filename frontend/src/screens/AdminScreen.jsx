import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import Pizzaslist from "../components/Admin/Pizzaslist";
import Userlist from "../components/Admin/Userlist";
import EditPizza from "./../components/Admin/EditPizza";
import "./AdminScreen.css";
import backgroundImg from "../assets/admin-background.jpg";

const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const navigate=useNavigate();

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  
  return (
    <div className="admin-screen" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Container>
        <Row className="justify-content-center align-items-center full-height"  style={{padding:'100px'}}>
          <Col md={8} className="main-content">
            <Row>
              <Col md={12} className="sidebar">
                <div className="sidebar-header">
                  <h3>Admin Panel</h3>
                </div>
                <ButtonGroup vertical style={{display:'flex',justifyContent:'center'}} className="sidebar-menu">
                  <Button
                    onClick={() => navigate("/admin/userlist")}
                    variant="primary"
                    className="menu-item"
                  >
                    View All Registered Users
                  </Button>
                  <Button
                    onClick={() => navigate("/admin/pizzalist")}
                    variant="primary"
                    className="menu-item"
                  >
                    View All Pizzas
                  </Button>
                  <Button
                    onClick={() => navigate("/admin/addnewpizza")}
                    variant="primary"
                    className="menu-item"
                  >
                    Add New Pizza
                  </Button>
                  <Button
                    onClick={() => navigate("/admin/orderlist")}
                    variant="primary"
                    className="menu-item"
                  >
                    All Orders
                  </Button>
                </ButtonGroup>
              </Col>
              <Col md={9}>
                <Routes>
                  <Route path="/admin" element={<Userlist />} />
                  <Route path="/admin/userlist" element={<Userlist />} />
                  <Route path="/admin/editpizza/:pizzaId" element={<EditPizza />} />
                  <Route path="/admin/pizzalist" element={<Pizzaslist />} />
                  <Route path="/admin/addnewpizza" element={<AddNewPizza />} />
                  <Route path="/admin/orderlist" element={<OrderList />} />
                </Routes>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminScreen;





