import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col, Nav, Image } from "react-bootstrap";
import FormContainer from "../../../components/FormContainer";


const AdminAddQuiz = () => {

  return (
    
    <Row className="adminAddQuizPage__container">
      <Col md={2} className="bg-dark text-light vh-100 d-flex flex-column align-items-center py-4">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
          alt="Profile"
          height="80px"
          width="80px"
          className="mb-2"
          roundedCircle
        />
        <h3 className="text-light">WELCOME</h3>
        <h6 className="text-light">Sneha Mohandas</h6>
        <Nav className="flex-column w-100 mt-5">
          <Nav.Link href="#" className="text-light text-center mb-3">Dashboard</Nav.Link>
          <Nav.Link href="#" className="text-light text-center mb-3">Exams</Nav.Link>
          <Nav.Link href="#" className="text-light text-center">Settings</Nav.Link>
        </Nav>
      </Col>
      <Col md={10} className="adminAddQuizPage__content">
        <FormContainer>
          <h2>Add Quiz</h2>
          <Form>
            <Form.Group className="my-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Quiz Title"

              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                style={{ textAlign: "top" }}
                as="textarea"
                rows="3"
                type="text"
                placeholder="Enter Quiz Description"

              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-3" controlId="maxMarks">
              <Form.Label>Maximum Marks</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Maximum Marks"

              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-3" controlId="numberOfQuestions">
              <Form.Label>Number of Questions</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Number of Questions"

              ></Form.Control>
            </Form.Group>

            <Form.Check
              className="my-3"
              type="switch"
              id="publish-switch"
              label="Publish Quiz"

            />

            <div className="my-3">
              <label htmlFor="category-select">Choose a Category:</label>
              <Form.Select
                aria-label="Choose Category"
                id="category-select"

              >
                <option value="n/a">Choose Category</option>


                <option  value={9}>
                  nvgjhbmhg
                </option>


                <option value="">Choose one from below</option>

              </Form.Select>
            </div>
            <Button
              className="my-5"
              type="submit"
              variant="primary"
            >
              Add
            </Button>
          </Form>
        </FormContainer>
      </Col>
    </Row>
  );
};

export default AdminAddQuiz;
