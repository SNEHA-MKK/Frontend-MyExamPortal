
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import FormContainer from '../../../components/FormContainer';
import { updateQuizApi } from '../../../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EditQuizContext } from '../../../context/Context';



function AdminUpdateQuiz({ quiz }) {

    const { setEditQuizResponse } = useContext(EditQuizContext)

    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState({
        title: quiz.title,
        description: quiz.description,
        maxMarks: quiz.maxMarks,
        numberOfQuestions: quiz.numberOfQuestions,
        publish: quiz.publish,
        category: quiz.category
    });


    const handleShow = () => {
        setUpdate({
            title: quiz.title,
            description: quiz.description,
            maxMarks: quiz.maxMarks,
            numberOfQuestions: quiz.numberOfQuestions
            // publish: quiz.publish,
            // category: quiz.category
        });
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        handleClose1();
    };

    const handleClose1 = () => {
        setUpdate({
            title: quiz.title,
            description: quiz.description,
            maxMarks: quiz.maxMarks,
            numberOfQuestions: quiz.numberOfQuestions
            // publish: quiz.publish,
            // category: quiz.category
        });
    };


    const handleUpdate = async (e) => {
        e.preventDefault();
        const { title, description, maxMarks, numberOfQuestions } = update;
        if (!title || !description || !maxMarks || !numberOfQuestions) {
            toast.info('Please fill the form completely');
        } else {
            const token = sessionStorage.getItem("token");

            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                };

                const result = await updateQuizApi(quiz._id, update, reqHeader);

                if (result.status === 200) {
                    setShow(false);
                    setEditQuizResponse(result.data)
                    alert('Quiz updated successfully');
                } else {
                    console.log(result);
                    alert('Something went wrong');
                }
            }
        }
    };


    return (
        <>
            <FontAwesomeIcon onClick={handleShow} icon={faPenToSquare} className="text-info m-0 p-0 w-100 mt-4" />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-success">Edit Quiz Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormContainer>
                        <h2>Add Quiz</h2>

                        <Form onSubmit={handleUpdate}>
                            <Form.Group className="my-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Quiz Title"
                                    name="title"
                                    value={update.title}
                                    onChange={(e) => setUpdate({ ...update, title: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    placeholder="Enter Quiz Description"
                                    name="description"
                                    value={update.description}
                                    onChange={(e) => setUpdate({ ...update, description: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="maxMarks">
                                <Form.Label>Maximum Marks</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Maximum Marks"
                                    name="maxMarks"
                                    value={update.maxMarks}
                                    onChange={(e) => setUpdate({ ...update, maxMarks: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="numberOfQuestions">
                                <Form.Label>Number of Questions</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Number of Questions"
                                    name="numberOfQuestions"
                                    value={update.numberOfQuestions}
                                    onChange={(e) => setUpdate({ ...update, numberOfQuestions: e.target.value })}
                                />
                            </Form.Group>

                            {/* <Form.Check
                                className="my-3"
                                type="switch"
                                id="publish-switch"
                                label="Publish Quiz"
                                name="publish"
                                checked={update.publish}

                                onChange={(e) => setUpdate({ ...update, title: e.target.value })}
                            />

                            <div className="my-3">
                                <label htmlFor="category-select">Choose a Category:</label>
                                <Form.Select
                                    aria-label="Choose Category"
                                    id="category-select"
                                    name="category"
                                    value={update.category}
                                    onChange={(e) => setUpdate({ ...update, title: e.target.value })}
                                >
                                    <option value="">Choose Category</option>
                                    {adminCategory?.map((item) => (
                                        <option value={item.title}>{item.title}</option>
                                    ))
                                    }
                                    
                                </Form.Select>
                            </div> */}

                            <Button onClick={(e) => handleUpdate}
                                className="my-5"
                                type="submit"
                                variant="primary"
                            >
                                Update
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
    )
}

export default AdminUpdateQuiz
