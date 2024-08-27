import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, ListGroup, Container, Row, Col, Nav, Image, Form } from "react-bootstrap";
import AdminUpdateCategoryPage from "./AdminUpdateCategoryPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from "../../components/AdminHeader";
import AddCat from "../../components/AddCat";
import { deleteACategoryApi, getAllAdmCategory } from "../../services/allAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { AddCategoryResponseStatusContext, EditCategoryContext } from "../../context/Context";



const AdminCategoriesPage = () => {

  const [adminCategory, setAdminCategory] = useState([])
  const {AddResponse} = useContext(AddCategoryResponseStatusContext)
  const {EditResponse} = useContext(EditCategoryContext)

  const getAllCategory = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await getAllAdmCategory(reqHeader)
      console.log(result.data);
      setAdminCategory(result.data)

    }

  }

  const deleteAdmCategory = async (id) => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await deleteACategoryApi(id, reqHeader)
      console.log(result);

      if (result.status == 200) {
        getAllCategory()
      } else {
        alert('Something went wrong')
      }
 
    }

  }

  useEffect(() => {
    getAllCategory()
  }, [AddResponse,EditResponse])

  // const { id } = useParams();


  return (
    <Container fluid>

      <AdminHeader />
      <div className="row mt-1">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h2 className="text-center mt-5 mb-5 text-danger">Categories</h2>



          {adminCategory?.length > 0 ?

            adminCategory?.map((item) => (


              <ListGroup className="mt-2 mb-4 rounded shadow box " >
                <ListGroup.Item
                  className="d-flex justify-content-between align-items-center "

                >
                  <div>
                    <h4 style={{ fontFamily: "Playfair Display" }} className="fw-bold text-primary ">{item.title}</h4>
                    <h6 className="text-dark">{item.description}</h6>
                  </div>
                  <div className="d-flex">


                    <Link to={`/adminQuizzes/${item._id}`} ><Button variant="success">More</Button></Link>

                    <AdminUpdateCategoryPage category={item} />


                    <FontAwesomeIcon icon={faTrash} className='text-danger mx-3' onClick={() => deleteAdmCategory(item._id)} />
                  </div>
                </ListGroup.Item>
              </ListGroup>

            ))

            :
            <h1 className="text-danger text-center">Nothing To Display</h1>}





        </div>
        <div className="col-md-2"></div>
      </div>
      <AddCat />
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </Container>
  );
};

export default AdminCategoriesPage;


