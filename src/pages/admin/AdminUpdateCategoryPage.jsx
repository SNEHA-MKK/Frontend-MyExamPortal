
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import FormContainer from '../../components/FormContainer';
import { updateCategoryApi } from "../../services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EditCategoryContext } from "../../context/Context";

const AdminUpdateCategoryPage = ({ category }) => {

  const {setEditResponse} = useContext(EditCategoryContext)
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState({
    title: category.title,
    description: category.description
  });

  const handleClose = () => {
    setShow(false);
    handleClose1();
  };

  const handleShow = () => {
    setUpdate({
      title: category.title,
      description: category.description
    });
    setShow(true);
  };

  const handleClose1 = () => {
    setUpdate({
      title: category.title,
      description: category.description
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { title, description } = update;
    if (!title || !description) {
      toast.info('Please fill the form completely');
    } else {
      const token = sessionStorage.getItem("token");

      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };

        const result = await updateCategoryApi(category._id, update, reqHeader);

        if (result.status === 200) {
          setShow(false);
          setEditResponse(result.data)
          toast.success('Category updated successfully');
        } else {
          console.log(result); 
          toast.error('Something went wrong');
        }
      }
    }
  };

  return (
    <>
      <FontAwesomeIcon onClick={handleShow} icon={faPenToSquare} className="text-info mx-3" />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Edit Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormContainer>
            <h2 className='mt-5 text-center'>Update Category</h2>
            <Form onSubmit={handleUpdate}>
              <Form.Group className="my-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category Title"
                  value={update.title}
                  onChange={(e) => setUpdate({ ...update, title: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="my-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  placeholder="Enter Category Description"
                  value={update.description}
                  onChange={(e) => setUpdate({ ...update, description: e.target.value })}
                />
              </Form.Group>
            </Form>
          </FormContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  );
};

export default AdminUpdateCategoryPage;
