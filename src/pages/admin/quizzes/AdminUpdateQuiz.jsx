import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col ,Nav,Image} from "react-bootstrap";
import FormContainer from "../../../components/FormContainer";


const AdminUpdateQuiz = () => {


    return (
        <Container fluid>
            <Row>
                <Col md={2} className="d-none d-md-block bg-dark text-light vh-110 d-flex flex-column align-items-center py-4">
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
                <Col md={10} className="mt-3">
                    <FormContainer>
                        <h2>Update Quiz</h2>
                        <Form >
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Quiz Title"
                                    
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter Quiz Description"
                                    
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="maxMarks">
                                <Form.Label>Maximum Marks</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Maximum Marks"
                                    
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="numberOfQuestions">
                                <Form.Label>Number of Questions</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Number of Questions"
                                    
                                />
                            </Form.Group>

                            <Form.Check
                                className="mb-3"
                                type="switch"
                                id="publish-switch"
                                label="Publish Quiz"
                               
                            />

                            <Form.Group className="mb-3">
                                <Form.Label>Choose a Category</Form.Label>
                                <Form.Select
                                    aria-label="Choose Category"
                                   
                                >
                                    <option value="n/a">Choose Category</option>
                                    
                                      
                                            <option  value={67}>
                                                jhghj
                                            </option>
                                        
                                   
                                        <option value="">Choose one from below</option>
                                    
                                </Form.Select>
                            </Form.Group>

                            <Button
                                className="mt-4"
                                type="submit"
                                variant="success"
                            >
                                Update
                            </Button>
                        </Form>
                    </FormContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminUpdateQuiz;
