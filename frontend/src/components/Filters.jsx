import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";

const SearchFilter = () => {
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(filterPizza(searchKey, category));
  };

  return (
    <div className="p-4" style={{ backgroundColor: "#006991", width: "100%" }}>
      <Form>
        <Row className="align-items-center">
          <Col>
            <Form.Control
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search pizza"
            />
          </Col>
          <Col>
            <Form.Select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
            </Form.Select>
          </Col>
          <Col>
            <Button onClick={handleSearch}>Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchFilter;
