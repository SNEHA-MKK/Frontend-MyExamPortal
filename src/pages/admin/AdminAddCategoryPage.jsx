import React, { useState } from 'react';
import { Container, Row, Col, Form, Button,Nav,Image } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';
import { useNavigate } from "react-router-dom";


function AdminAddCategoryPage() {




  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row>
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
        <Col md={10} className="p-3">
          <FormContainer>
            <h2 className='mt-5 text-center'>Add Category</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group className="my-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="my-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  placeholder="Enter Category Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Button
                className="w-100"
                type="submit"
                variant="success"
              >
                Add
              </Button>
            </Form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminAddCategoryPage;

