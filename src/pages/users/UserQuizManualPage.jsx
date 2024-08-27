import React from 'react'
import { Button, Container, Row, Col, Card, Nav, Image } from "react-bootstrap";
import UserHeader from '../../components/UserHeader';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function UserQuizManualPage() {
  return (
    <>
      <Container fluid>
        
        <Row>
       <UserHeader/>
          <Col md={12} className="mx-auto">

            <Card className="my-4 p-4">
              <Card.Body>
                <Card.Title as="h5" className="text-center">
                  Read the instruction of this page carefully
                </Card.Title>
                <Card.Text className="text-center text-muted">
                  One more step to go
                </Card.Text>
                <hr />
                <Card.Title as="h3" className="text-center">
                  <h1 className='text-danger'>RULES</h1>
                </Card.Title>
                {/* <Card.Text>lorem jhjhgj hbhjbj etsr fygy ljkn rdtdy uhjkn dxffch uhujhj</Card.Text> */}
                <hr />
                <Card.Title as="h3">Important Instructions</Card.Title>
                <ul>
                  <li>This quiz is only for practice purpose.</li>
                  <li>
                    You have to submit quiz within <strong>5 minutes</strong>.
                  </li>
                  <li>You can only attempt the quiz one time.</li>
                  {/* <li>
                    There are <strong>10 questions</strong>{" "}
                    in this quiz.
                  </li> */}
                  <li>This quiz is only for practice purpose.</li>
                  {/* <li>
                    Total Marks for this quiz is <strong>100</strong>.
                  </li> */}
                  <li>All questions are of MCQ type.</li>
                </ul>
                <hr />
                <Card.Title as="h3">Attempting Quiz</Card.Title>
                <ul>
                  <li>
                    Click Start Quiz button to start the quiz.
                  </li>
                  <li>
                    The timer will start the moment you click on the Start Quiz
                    button.
                  </li>
                  <li>
                    You cannot resume this quiz if interrupted due to any reason.
                  </li>
                  <li>
                    Click on <strong>Submit Quiz</strong> button on completion of
                    the quiz.
                  </li>
                  <li>
                    Result of the test is generated automatically in PDF format and can download the result
                  </li>
                </ul>
                <div className="text-center">
                 <Link to={'/quizzes'}>
                    <Button
                      className="my-3"
  
                      variant="danger"
                    >
                    Back
                    </Button>
                 </Link>
                </div>
              </Card.Body>
            </Card>

          </Col>
        </Row>
        <Footer/>
      </Container>
    </>
  )
}

export default UserQuizManualPage

