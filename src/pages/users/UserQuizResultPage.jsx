import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Alert, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllAdmQuiz, getUserResults } from "../../services/allAPI";
import UserHeader from "../../components/UserHeader";
import Footer from "../../components/Footer";

const UserQuizResultPage = () => {

  const [results, setResults] = useState([]);
  console.log(results);
  console.log(results.quizId);
  

  // const [rank, setRank] = useState({})
  // console.log(rank);
  

  // const quizRank = async (id) => {
  //   try {

  //     if (sessionStorage.getItem("token")) {
  //       const token = sessionStorage.getItem("token")

  //       const reqHeader = {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${token}`
  //       }

  //       const result = await getUserRank(id,reqHeader)
  //       console.log(result.data);
  //       setRank(result.data);

  //     }

  //   } catch (error) {
  //     console.error('Error fetching quiz results:', error);
  //   }
  // }

  const fetchResults = async () => {
    // const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

    try {

      if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token")

        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }

        const result = await getUserResults(reqHeader)
        console.log(result.data);
        setResults(result.data);

      }

    } catch (error) {
      console.error('Error fetching quiz results:', error);
    }
  };


  useEffect(() => {
    fetchResults()
    // quizRank(results.quizId)
  }, [])

  return (
    <>
      <Container fluid>
        <UserHeader />
        <Row style={{ height: '70vh' }} className=" p-3">

          <Col md={12}>
            <h1 className="text-center">RESULTS</h1>
            <div style={{ overflowX: 'scroll' }}>
              <Table hover bordered rounded shadow className="text-center mt-5">
                <thead>
                  <tr>
                    <th>Serial No</th>
                    <th>Category Name</th>
                    <th>Quiz Name</th>
                    <th>Obtained Marks</th>
                    <th>Total Marks</th>
                    <th>Rank</th>
                  </tr>
                </thead>
                <tbody>

                  {results?.length > 0 ?
                    results?.map((item, index) => (
                      <tr key={item.quizId}>
                        <td>{index + 1}</td>
                        <td>{item.category}</td>
                        <td>{item.quizId}</td>
                        <td>{item.score}</td>
                        <td>{item.total}</td>
                        <td>2</td>
                      </tr>
                    ))

                    :
                    <Alert variant="info" className="mt-4">
                      No results to display. Attempt any <Link to="/quizzes">Quiz</Link>.
                    </Alert>
                  }

                </tbody>
              </Table>
            </div>





          </Col>
        </Row>

      </Container>
      <Footer />

    </>
  );
};

export default UserQuizResultPage;
