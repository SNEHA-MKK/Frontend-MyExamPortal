

import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import FormContainer from './FormContainer';
import { addAdCategoryApi } from '../services/allAPI';
import { AddCategoryResponseStatusContext } from '../context/Context';

function AddCat() {

  const {setAddResponse} = useContext(AddCategoryResponseStatusContext)

  const [show, setShow] = useState(false);
  const [catDetails, setCatDetails] = useState({ title: "", description: "" });
  const [token, setToken] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => {
    setCatDetails({ title: "", description: "" });
    setShow(false); // Close the modal on cancel
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, description } = catDetails;
    if (!title || !description) {
      toast.info('Please fill the form completely');
    } else {

      
      
      if (token) {
        console.log(token);
        let reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };
        try {
          const result = await addAdCategoryApi(catDetails, reqHeader);
          console.log(result);
          if (result.status === 200) {
            alert('Category added successfully');
            handleClose1();
            setAddResponse(result.data)
           
          } else if (result.status === 406) {
            toast.warn('Category already exists');
          } else {
            toast.error('Something went wrong might it alreay exists');
          }
        } catch (error) {
          toast.error('Failed to add category');
          console.error('Error adding category:', error);
        } finally {
          handleClose();
        }
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  return (
    <>
      <div className='text-center'><Button variant="danger"  onClick={handleShow}>Add Category</Button></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormContainer>
            <h2 className='mt-5 text-center'>Add Category</h2>
            <Form onSubmit={handleAdd}>
              <Form.Group className="my-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category Title"
                  value={catDetails.title}
                  onChange={(e) => setCatDetails({ ...catDetails, title: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="my-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  placeholder="Enter Category Description"
                  value={catDetails.description}
                  onChange={(e) => setCatDetails({ ...catDetails, description: e.target.value })}
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

export default AddCat;

