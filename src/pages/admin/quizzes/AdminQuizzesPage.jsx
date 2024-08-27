import React, { useEffect, useState } from "react";
import { Button, ListGroup, Container, Row, Col, Nav, Image } from "react-bootstrap";
import AdminHeader from "../../../components/AdminHeader";
// import { useParams } from "react-router-dom";
import AddQuizzes from "../../../components/AddQuizzes";
import { Link, useParams } from "react-router-dom";
import { getAllAdmCategory, getAllAdmQuiz } from "../../../services/allAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faTrophy } from '@fortawesome/free-solid-svg-icons'




const AdminQuizzesPage = () => {


    const [adminQuiz, setAdminQuiz] = useState([])
    const [adminCategory, setAdminCategory] = useState([])


    const { id } = useParams();
    console.log(id);

    const getAllQuizzez = async (id) => {

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")

            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }

            const result = await getAllAdmQuiz(id, reqHeader)
            console.log(result.data);
            setAdminQuiz(result.data)

        }

    }



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

    useEffect(() => {
        getAllQuizzez(id)
        getAllCategory()
    }, [])


    return (
        <Container fluid>
            <AdminHeader />
            <div className="row mb-3">
                <div className="col-md-2"></div>
                <div className="col-md-8">



                    <AddQuizzes adminCategory={adminCategory} id={id} />

                    {adminQuiz?.length > 0 ?

                        adminQuiz?.map((item) => (
                            <ListGroup className="mb-5 rounded shadow " >
                                <ListGroup.Item className="border-0" >
                                    <div className="row">
                                        <div className="col-md-9 ">
                                            <h4 className="fw-bold">{item.title}</h4>
                                            <p>{item.description}</p>

                                            <div className="row d-flex justify-content-evenly align-items-center">
                                                <Button variant="success" className="w-25 py-1"><Link to={`/adminQuizzes/:id/adminQuestions/${item._id}`} className="text-light" style={{ textDecoration: 'none' }} >Questions</Link></Button>

                                                <Button className="w-25" variant="primary"><Link to={`/topperAdmin/${item._id}`} className="text-light" style={{ textDecoration: 'none' }}>Winner <FontAwesomeIcon icon={faTrophy} /></Link></Button>
                                            </div>
                                        </div>
                                        <div className="col-md-3  mt-1">

                                            <div className="row ">


                                                <Button variant="light" className="m-1 w-25">
                                                    Marks: {item.maxMarks}
                                                </Button>
                                                <Button variant="light" className="m-1 w-25">
                                                    Quest: {item.numberOfQuestions}
                                                </Button>
                                            </div>

                                            <div className="row">
                                                <button className="w-25 text-success border-0"><FontAwesomeIcon icon={faPen} /></button>

                                                <button className="w-25 ms-3 border-0"><FontAwesomeIcon icon={faTrash} className='text-danger' /></button>

                                            </div>




                                        </div>
                                    </div>

                                </ListGroup.Item>
                            </ListGroup>
                        ))

                        :
                        <h2 className="text-danger text-center mt-5 mb-4">No quizzes are present. Try adding some quizzes.</h2>}


                </div>
                <div className="col-md-2"></div>
            </div>
        </Container>
    );
};

export default AdminQuizzesPage;


