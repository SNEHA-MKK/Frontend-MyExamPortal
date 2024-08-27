import React from "react";
import { InputGroup, Container, Row, Col, Button } from "react-bootstrap";


const Question = ({ number, answers, question, isAdmin = false }) => {


  return (
    <Container fluid className="mb-3 p-3 border rounded">
      <Row>
        <Col xs={12} className="mb-2">
          <h5>9 . bjhbhbhbh</h5>
        </Col>
        <Col xs={12}>
          <InputGroup
           
          >
            <Row className="w-100">
              <Col xs={12} md={6} className="d-flex mb-2">
                <InputGroup.Radio value={"option1"}  aria-label="option 1" />
                <span className="ms-2">lorem</span>
              </Col>
              <Col xs={12} md={6} className="d-flex mb-2">
                <InputGroup.Radio value={"option2"}  aria-label="option 2" />
                <span className="ms-2">epsum</span>
              </Col>
              <Col xs={12} md={6} className="d-flex mb-2">
                <InputGroup.Radio value={"option3"}  aria-label="option 3" />
                <span className="ms-2">jvhk</span>
              </Col>
              <Col xs={12} md={6} className="d-flex mb-2">
                <InputGroup.Radio value={"option4"}  aria-label="option 4" />
                <span className="ms-2">kjhbvhf</span>
              </Col>
            </Row>
          </InputGroup>
        </Col>
       
          <Col xs={12}>
            <p className="my-2">Correct Answer: hvn</p>
            <hr />
            <div className="d-flex justify-content-between">
              <Button
                variant="outline-success"
                
                className="me-2"
              >
                Update
              </Button>
              <Button variant="outline-danger">
                Delete
              </Button>
            </div>
          </Col>
        
      </Row>
    </Container>
  );
};

export default Question;
