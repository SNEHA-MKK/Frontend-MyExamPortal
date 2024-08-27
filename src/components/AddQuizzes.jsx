
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import FormContainer from './FormContainer';
import { addAdmQuizApi } from '../services/allAPI';


function AddQuizzes({ id,adminCategory }) {

    // console.log("Quiz ID:", id);
    
    const [show, setShow] = useState(false);

    

    const [quizDetails, setQuizDetails] = useState({
        title: "",
        description: "",
        maxMarks: "",
        numberOfQuestions: "",
        publish: false,
        category: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => {
        setQuizDetails({
            title: "",
            description: "",
            maxMarks: "",
            numberOfQuestions: "",
            publish: false,
            category: ""
        });
        setShow(false); // Close the modal on cancel
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setQuizDetails((prevDetails) => ({
            ...prevDetails,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e,id) => {
        e.preventDefault();
        const { title, description, maxMarks, numberOfQuestions, publish, category } = quizDetails;

        if (!title || !description || !maxMarks || !numberOfQuestions || !category) {
            toast.info('Please fill the form completely');
        } else {
            const token = sessionStorage.getItem("token");
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                };
              
                try {
                    const result = await addAdmQuizApi(quizDetails, reqHeader, id);
                    if (result.status === 200) {
                        toast.success('Quiz added successfully');
                        handleClose1();
                    } else if (result.status === 406) {
                        toast.warn('Quiz already exists');
                    } else {
                        toast.error('Something went wrong, it might already exist');
                    }
                } catch (error) {
                    toast.error('Failed to add Quiz');
                    console.error('Error adding Quiz:', error);
                }
            }
        }
    };

    // const { id } = useParams();
    // console.log(id);

    return (
        <>
            <Button
                onClick={handleShow}
                variant="danger"
                className="d-block mx-auto my-4"
            >
                Add Quiz
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-success">Add Quiz Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormContainer>
                        <h2>Add Quiz</h2>
                        
                        <Form >
                            <Form.Group className="my-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Quiz Title"
                                    name="title"
                                    value={quizDetails.title}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    placeholder="Enter Quiz Description"
                                    name="description"
                                    value={quizDetails.description}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="maxMarks">
                                <Form.Label>Maximum Marks</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Maximum Marks"
                                    name="maxMarks"
                                    value={quizDetails.maxMarks}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="numberOfQuestions">
                                <Form.Label>Number of Questions</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Number of Questions"
                                    name="numberOfQuestions"
                                    value={quizDetails.numberOfQuestions}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Check
                                className="my-3"
                                type="switch"
                                id="publish-switch"
                                label="Publish Quiz"
                                name="publish"
                                checked={quizDetails.publish}
                                onChange={handleChange}
                            />

                            <div className="my-3">
                                <label htmlFor="category-select">Choose a Category:</label>
                                <Form.Select
                                    aria-label="Choose Category"
                                    id="category-select"
                                    name="category"
                                    value={quizDetails.category}
                                    onChange={handleChange}
                                >
                                    <option value="">Choose Category</option>
                                    { adminCategory?.map((item)=>(
                                         <option value={item.title}>{item.title}</option>
                                    ))
                                        }
                                    {/* <option value="category2">Category 2</option> */}
                                    {/* Add more categories as needed */}
                                </Form.Select>
                            </div>

                            <Button onClick={(e) => handleSubmit(e,id)}
                                className="my-5"
                                type="submit"
                                variant="primary"
                            >
                                Add
                            </Button>
                        </Form>
                    </FormContainer>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose1}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer theme="colored" position="top-center" autoClose={2000} />
        </>
    );
}

export default AddQuizzes;


