import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container, Button, Nav, Image } from "react-bootstrap";
import { getAllUserQuiz } from "../../services/allAPI";
import { Link } from "react-router-dom";
import UserHeader from "../../components/UserHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const UserQuizzesPage = () => {

  const [userQuiz, setUserQuiz] = useState([])
  const [searchKey, setSearchKey] = useState("")

  console.log(searchKey);


  const getAllUserQuizzez = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await getAllUserQuiz(searchKey, reqHeader)
      console.log(result.data);
      setUserQuiz(result.data)

    }

  }

  useEffect(() => {
    getAllUserQuizzez()
  }, [searchKey])



  return (
    <Container fluid>
      <UserHeader />
      <Row>

        <Col md={12}>
          <Container className="text-center mt-3">

            <div className="row mt-5 d-flex justify-content-center w-100">
              <div className="col-md-4"></div>
              <div className="col-md-4 d-flex justify-content-center p-4">
                <input type="text" className="form-control" placeholder="Search By Quiz Name" onChange={(e) => setSearchKey(e.target.value)} />
                <FontAwesomeIcon style={{ 'marginTop': '10px' }} icon={faMagnifyingGlass} className='text-secondary' />
              </div>
              <div className="col-md-4"></div>
            </div>

            { userQuiz?.length > 0 ?
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

                        <Link to={'/quizManual'} >
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
                        </Link>



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
};

export default UserQuizzesPage;
