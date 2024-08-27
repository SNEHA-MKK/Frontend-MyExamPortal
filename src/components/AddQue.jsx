
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormContainer from './FormContainer';
import { addQueApi } from '../services/allAPI';

function AddQue({ id }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [questDetails, setQuestDetails] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: ""
    });

    const handleClose1 = () => {
        setQuestDetails({
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            answer: ""
        });
        setShow(false); // Close the modal on cancel
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = async (e, id) => {
        e.preventDefault();
        const { question, option1, option2, option3, option4, answer } = questDetails;

        if (!question || !option1 || !option2 || !option3 || !option4 || !answer) {
            toast.info('Please fill the form completely');
        } else {
            const token = sessionStorage.getItem("token");
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                };

                try {
                    const result = await addQueApi(questDetails, reqHeader, id); // Assuming you have an API function addQueApi
                    if (result.status === 200) {
                        toast.success('Question added successfully');
                        console.log(result);

                        handleClose1();

                    } else if (result.status === 406) {
                        toast.warn('Question already exists');
                    } else {
                        toast.error('Something went wrong, it might already exist');
                    }
                } catch (error) {
                    toast.error('Failed to add Question');
                    console.error('Error adding Question:', error);
                }
            }
        }
    };

    return (
        <>
            <Button onClick={handleShow}
                className="mb-4"
               variant='danger'
            >
                Add Question
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-success">Add Quiz Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormContainer>
                        <h2>Add Question</h2>
                        <Form>
                            <Form.Group className="my-3" controlId="question">
                                <Form.Label>Question</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"

                                    placeholder="Enter Question"
                                    name="question"
                                    value={questDetails.question}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="option1">
                                <Form.Label>Option 1</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="1st option"
                                    name="option1"
                                    value={questDetails.option1}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="option2">
                                <Form.Label>Option 2</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="2nd option"
                                    name="option2"
                                    value={questDetails.option2}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="option3">
                                <Form.Label>Option 3</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="3rd option"
                                    name="option3"
                                    value={questDetails.option3}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="option4">
                                <Form.Label>Option 4</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="4th option"
                                    name="option4"
                                    value={questDetails.option4}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="answer">
                                <Form.Label htmlFor="answer-select">Choose Correct Option:</Form.Label>
                                <Form.Select
                                    aria-label="Choose Correct Option"
                                    id="answer-select"
                                    name="answer"
                                    value={questDetails.answer}
                                    onChange={handleChange}
                                >
                                    <option value="">Choose Option</option>
                                    <option value="option1">{questDetails.option1}</option>
                                    <option value="option2">{questDetails.option2}</option>
                                    <option value="option3">{questDetails.option3}</option>
                                    <option value="option4">{questDetails.option4}</option>
                                </Form.Select>
                            </Form.Group>

                            <Button
                                onClick={(e) => handleSubmit(e, id)}
                                className="my-3 w-100"
                                type="submit"
                                style={{ backgroundColor: "rgb(68 177 49)", color: "white" }}
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

export default AddQue;
