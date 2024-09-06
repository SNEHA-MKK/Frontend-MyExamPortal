


import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Alert, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addUserFeedback, getUserResults } from "../../services/allAPI";
import UserHeader from "../../components/UserHeader";
import Footer from "../../components/Footer";

const UserQuizResultPage = () => {
  const [results, setResults] = useState([]);
  const [feedback, setFeedback] = useState("");

  const fetchResults = async () => {
    try {
      if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token");

        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        };

        const result = await getUserResults(reqHeader);
        setResults(result.data);
      }
    } catch (error) {
      console.error("Error fetching quiz results:", error);
    }
  };

  const handleFeedback = async (event) => {
    event.preventDefault(); // Prevent page reload

    try {
      if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token");

        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        };

        const result = await addUserFeedback({ feedback }, reqHeader);
        if (result.status === 200) {
          alert('Feedback Added Successfully');
        } else {
          alert('Something went wrong');
        }
        setFeedback(""); // Clear feedback after submission
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <>
      <Container fluid>
        <UserHeader />
        <Row style={{ minHeight: "100vh" }} className="p-3">
          <Col md={12}>
            <h2 className="text-center text-info" style={{fontFamily:'cursive'}}>RESULTS</h2>
            <div style={{ overflowX: "auto" }}>
              <Table hover bordered rounded shadow className="text-center mt-5" style={{
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
              }}>
                <thead>
                  <tr>
                    <th className="text-info" style={{fontFamily:'cursive'}} >Serial No</th>
                    <th className="text-info" style={{fontFamily:'cursive'}}>Category Name</th>
                    <th className="text-info" style={{fontFamily:'cursive'}}>Quiz Name</th>
                    <th className="text-info" style={{fontFamily:'cursive'}}>Obtained Marks</th>
                    <th className="text-info" style={{fontFamily:'cursive'}}>Total Marks</th>

                  </tr>
                </thead>
                <tbody>
                  {results?.length > 0 ? (
                    results?.map((item, index) => (
                      <tr key={item.quizId}>
                        <td>{index + 1}</td>
                        <td>{item.category}</td>
                        <td>{item.quizId}</td>
                        <td>{item.score}</td>
                        <td>{item.total}</td>

                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">
                        <Alert variant="info" className="mt-4">
                          No results to display. Attempt any <Link to="/quizzes">Quiz</Link>.
                        </Alert>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-column m-3">
              <h1 className="text-center text-info" style={{fontFamily:'cursive'}}>We value your feedback</h1>
              <Form onSubmit={handleFeedback}>
                <Form.Group controlId="feedback">
                  <Form.Control
                    as="textarea"
                    style={{ width: "90%", minHeight: "100px" }}
                    placeholder="Enter your feedback..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </Form.Group>
                <div className="text-center mt-3">
                  <Button variant="danger" type="submit" className="text-light px-4 border-0 rounded">
                    Submit Feedback
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default UserQuizResultPage;
