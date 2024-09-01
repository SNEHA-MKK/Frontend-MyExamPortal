import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container, Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getAllHomeQuiz } from "../services/allAPI";

function HomeQuiz() {
    const [userQuiz, setUserQuiz] = useState([])
    // const [searchKey, setSearchKey] = useState("")

    // console.log(searchKey);


    const getAllHomeQuizzez = async () => {




        const result = await getAllHomeQuiz()
        console.log(result.data);
        setUserQuiz(result.data)



    }

    useEffect(() => {
        getAllHomeQuizzez()
    }, [])



    return (
        <Container fluid>
            <Navbar expand="lg" className="mx-3 rounded shadow navbar  mb-1 mt-3  " >
                <Container fluid className='justify-content-between align-items-center'>
                    <Navbar.Brand className='fw-bolder text-info'>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <img src="https://images.softwaresuggest.com/software_logo/1495539705_followclass-192.png" width={'50px'} height={'50px'} alt="" className='me-3' />
                            EXAM PORTAL
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className="ms-auto">
                  <Nav.Link  className='text-primary fw-bolder'><Link to={'/dashboard'} style={{textDecoration:"none"}}>HOME</Link></Nav.Link>
                  <Nav.Link  className='text-primary fw-bolder'><Link to={'/postjobs'} style={{textDecoration:"none"}} >PROFILE</Link></Nav.Link>
                  <Nav.Link  className='text-primary fw-bolder'><Link to={'/viewJobsAdmin'} style={{textDecoration:"none"}}>CATEGORY</Link></Nav.Link>
                </Nav> */}
                        <Nav className='ms-auto jusify-content-between'>


                            <Link to={'/homeQuiz'} >
                                <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
                                    Exams
                                </button>
                            </Link>
                            <Link to={'/register'} >
                                <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
                                    SignUp
                                </button>
                            </Link>
                            <Link to={'/login'}>
                                <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
                                    Login
                                </button>
                            </Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row>

                <Col md={12}>
                    <Container className="text-center mt-3">
                        {/* 
                        <div className="row mt-5 d-flex justify-content-center w-100">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 d-flex justify-content-center p-4">
                                <input type="text" className="form-control" placeholder="Search By Quiz Name" onChange={(e) => setSearchKey(e.target.value)} />
                                <FontAwesomeIcon style={{ 'marginTop': '10px' }} icon={faMagnifyingGlass} className='text-secondary' />
                            </div>
                            <div className="col-md-4"></div>
                        </div> */}

                        {userQuiz?.length > 0 ?
                            <div className="row mt-5">


                                {userQuiz.map((item) => (
                                    <div className="col-md-3 mb-5">
                                        <Card bg="light" text="dark" className="h-100">
                                            <Card.Body>
                                                <Card.Title className="mb-3">Category : <span className="text-danger">{item.category}</span></Card.Title>
                                                <Card.Subtitle className="mb-4 text-muted">
                                                    <h3>{item.title}</h3>
                                                </Card.Subtitle>
                                                <Card.Text>{item.description}</Card.Text>
                                                <div className="d-flex flex-wrap justify-content-around">
                                                <Link to={'/login'} >
                                                        <Button
                                                            variant="outline-danger"
                                                            className="m-1"

                                                        >
                                                            Start
                                                        </Button>
                                                    </Link>

                                                    {/* <Link to={'/quizManual'} >
                                                        <Button
                                                            variant="outline-primary"
                                                            className="m-1"

                                                        >
                                                            Rules
                                                        </Button>
                                                    </Link>

                                                    <Link to={`/questions/${item._id}`} >
                                                        <Button
                                                            variant="outline-success"
                                                            className="m-1"

                                                        >
                                                            Start
                                                        </Button>
                                                    </Link>

                                                    <Link to={`/userRank/${item._id}`} >
                                                        <Button
                                                            variant="outline-danger"
                                                            className="m-1"

                                                        >
                                                            Result
                                                        </Button>
                                                    </Link> */}



                                                    <Button
                                                        variant="outline-secondary"
                                                        className="m-1"
                                                    >
                                                        5 Minutes
                                                    </Button>

                                                    <Button
                                                        variant="outline-secondary"
                                                        className="m-1"
                                                    >
                                                        {item.numberOfQuestions} Questions
                                                    </Button>

                                                    <Button
                                                        variant="outline-secondary"
                                                        className="m-1"
                                                    >
                                                        Marks : {item.maxMarks}
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))
                                }



                            </div>
                            :
                            <div className="mt-5">
                                <h1>No Quiz to display</h1>
                            </div>}

                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeQuiz
