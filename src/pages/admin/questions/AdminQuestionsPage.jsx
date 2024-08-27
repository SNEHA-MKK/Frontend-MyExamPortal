import React, { useEffect, useState } from "react";

import { Button, Container, Row, Col, Nav, Image, InputGroup } from "react-bootstrap";
import Question from "../../../components/Questions";
import AddQue from "../../../components/AddQue";
import { Link, useParams } from "react-router-dom";
import { getAllAdmQuestion } from "../../../services/allAPI";
import AdminHeader from "../../../components/AdminHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'


const AdminQuestionsPage = () => {

    const [adminQuest, setAdminQuest] = useState([])
    const [adminUser , setAdminUser] = useState({})

    const { id } = useParams();
    console.log(id);

    const getAllQuestions = async (id) => {

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")

            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }

            const result = await getAllAdmQuestion(id, reqHeader)
            console.log(result.data);
            setAdminQuest(result.data)

        }

    }

    useEffect(() => {
        setAdminUser(sessionStorage.getItem("adminUser"))
        getAllQuestions(id)
    }, [])


    return (
        <Container fluid>
            <AdminHeader/>
            <Row>

                <Col md={12}>
                    <Container className="mt-4">
                        {/* <h2>Questions : kjhewfh</h2> */}

                       { adminUser?
                        <div>
                            <AddQue id={id} />
    
                            {adminQuest?.length >0 ?
    
                               adminQuest?.map((item,index)=>(
                                <Row className="mb-4">
                                <Col xs={12} className="mb-2">
                                    <h5>{index+1}.  {item.question}</h5>
                                </Col>
                                <Col xs={12}>
                                    <InputGroup
    
                                    >
                                        <Row className="w-100">
                                            <Col xs={12} md={6} className="d-flex mb-2">
                                                <InputGroup.Radio value={item.option1} aria-label="option 1" />
                                                <span className="ms-2">{item.option1}</span>
                                            </Col>
                                            <Col xs={12} md={6} className="d-flex mb-2">
                                                <InputGroup.Radio value={item.option2} aria-label="option 2" />
                                                <span className="ms-2">{item.option2}</span>
                                            </Col>
                                            <Col xs={12} md={6} className="d-flex mb-2">
                                                <InputGroup.Radio value={item.option3} aria-label="option 3" />
                                                <span className="ms-2">{item.option3}</span>
                                            </Col>
                                            <Col xs={12} md={6} className="d-flex mb-2">
                                                <InputGroup.Radio value={item.option4} aria-label="option 4" />
                                                <span className="ms-2">{item.option4}</span>
                                            </Col>
                                        </Row>
                                    </InputGroup>
                                </Col>
    
                                <Col xs={12}>
                                    <h5 className="my-2 text-danger">Correct Answer: {item.answer}</h5>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <Button
                                            variant="outline-success"
    
                                            className="me-2"
                                        >
                                           <FontAwesomeIcon icon={faPen} />
                                        </Button>
                                        <Button variant="outline-danger">
                                        <FontAwesomeIcon icon={faTrash} className='text-danger' />
                                        </Button>
                                    </div>
                                </Col>
    
                            </Row>
                               ))                           
    
                               
                              :
                            <h2 className="text-danger text-center mt-5 mb-4">No questions are present. Try adding some questions.</h2>}
    
                       </div>
                       :
                       <div className="d-flex justify-content-center align-items-center flex-column mt-5">
                        <h1>Login as Admin</h1>
                        <img src="https://static.vecteezy.com/system/resources/previews/032/403/801/original/yellow-padlock-with-green-checkmark-secure-and-protection-web-login-and-encryption-of-confidential-information-vector.jpg" alt="" width={'200px'} height={'200px'} />
                        <Link to={'/login'}><Button>Login</Button></Link>
                        </div>
                        
                       }

                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminQuestionsPage;
