import React, { useState } from "react";
import { Button, Form, Container, Row, Col,Nav,Image } from "react-bootstrap";
import FormContainer from "../../../components/FormContainer";


const AdminAddQuestionsPage = () => {
 

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-dark text-light vh-150 d-flex flex-column align-items-center py-4">
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
        <Col md={10}>
          <Container className="mt-4">
            <FormContainer>
              <h2>Add Question</h2>
              <Form >
                <Form.Group className="my-3" controlId="content">
                  <Form.Label>Question</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Enter Question Content"
                    
                  />
                </Form.Group>

                <Form.Group className="my-3" controlId="option1">
                  <Form.Label>Option 1</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    placeholder="Enter Option 1"
                    
                  />
                </Form.Group>

                <Form.Group className="my-3" controlId="option2">
                  <Form.Label>Option 2</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    placeholder="Enter Option 2"
                    
                  />
                </Form.Group>

                <Form.Group className="my-3" controlId="option3">
                  <Form.Label>Option 3</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    placeholder="Enter Option 3"
                   
                  />
                </Form.Group>

                <Form.Group className="my-3" controlId="option4">
                  <Form.Label>Option 4</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    placeholder="Enter Option 4"
                    
                  />
                </Form.Group>

                <Form.Group className="my-3">
                  <Form.Label htmlFor="answer-select">Choose Correct Option:</Form.Label>
                  <Form.Select
                    aria-label="Choose Correct Option"
                    id="answer-select"
                    
                  >
                    <option value="n/a">Choose Option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </Form.Select>
                </Form.Group>

                <Button
                  className="my-3 w-100"
                  type="submit"
                  style={{ backgroundColor: "rgb(68 177 49)", color: "white" }}
                >
                  Add
                </Button>
              </Form>
            </FormContainer>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddQuestionsPage;
