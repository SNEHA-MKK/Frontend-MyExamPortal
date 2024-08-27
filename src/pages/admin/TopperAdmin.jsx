// import React, { useEffect, useState } from 'react'
// import { Container, Row, Col, Card, Table, Alert, Button } from 'react-bootstrap';
// import AdminHeader from '../../components/AdminHeader';
// import Footer from '../../components/Footer';
// import { useParams } from 'react-router-dom';
// import { quizTopperApi } from '../../services/allAPI';

// function TopperAdmin() {

//   const [topper, setTopper] = useState([])
//   const { id } = useParams()
//   console.log(id);

//   const quizTopper = async (id) => {
//     if (sessionStorage.getItem("token")) {
//       const token = sessionStorage.getItem("token")

//       const reqHeader = {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`
//       }

//       const result = await quizTopperApi(id, reqHeader)
//       console.log(result.data);
//       setTopper(result.data)

//     }
//   }

//   useEffect(() => {
//     console.log('uhyth') 
//     quizTopper(id)
//   },[])


//   return (
//     <>
//       <Container fluid >
//         <AdminHeader />

//         <div style={{ backgroundImage: "url('https://e0.pxfuel.com/wallpapers/448/62/desktop-wallpaper-graduation-clipart-graduation-graduation-cap.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
//           <Row  >
//             <Col>
//               <h1 className="text-center my-5 text-danger">Quiz Topper</h1>
//             </Col>
//           </Row>
//           <Row className=' d-flex justify-content-center ' style={{ height: '60vh' }} >

//             <Col md={4} className="my-2" >
//               <Card className="text-center p-3 shadow rounded">
//                 <Card.Body>
//                   <Card.Title>Quiz: jjhjh</Card.Title>
//                   <Card.Text>User ID: kjhj</Card.Text>
//                   <Card.Text>Score: kh</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>


//             {/* <h1 className='text-center text-danger'>No one attended the quiz</h1>
//             */}
//           </Row>
//         </div>

//         <Footer />
//       </Container>
//     </>
//   )
// }

// export default TopperAdmin


import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AdminHeader from '../../components/AdminHeader';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { quizTopperApi } from '../../services/allAPI';

function TopperAdmin() {
  const [topper, setTopper] = useState({});
  const { id } = useParams();
  console.log(id);

console.log(topper);

  const quizTopper = async (id) => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };

      try {

        const result = await quizTopperApi(id, reqHeader);
        console.log(result.data);
        setTopper(result.data);


      } catch (error) {


        console.error('Error fetching quiz topper:', error);
      }
    }
  };

  useEffect(() => {

    quizTopper(id);

  }, [id]);

  return (
    <>

      <Container fluid >
        <AdminHeader />

        <div style={{ backgroundImage: "url('https://e0.pxfuel.com/wallpapers/448/62/desktop-wallpaper-graduation-clipart-graduation-graduation-cap.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <Row  >
            <Col>
              <h1 className="text-center my-5 text-success">Quiz Topper</h1>
            </Col>
          </Row>
          <Row className=' d-flex justify-content-center ' style={{ height: '60vh' }} >

           
              { topper?
                <Col md={4} className="my-2" >
                <Card className="text-center p-3 shadow rounded">
                  <Card.Body>
                    <Card.Title>User ID : <span className='text-danger'>{topper.userId} </span></Card.Title>
                    <Card.Title>Category: <span className='text-danger'>{topper.category}</span></Card.Title>
                    <Card.Title>Quiz: <span className='text-danger'>{topper.quizId}</span></Card.Title>
                    <Card.Title>Score: <span className='text-danger'>{topper.score}</span></Card.Title>
                    <Card.Title>Out Of: <span className='text-danger'>{topper.total}</span></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
           :
           <h1 className='text-center text-danger'>No Candidate attended the quiz till now</h1>
              }

            {/* <h1 className='text-center text-danger'>No one attended the quiz</h1>
*/}
          </Row>
        </div>

        <Footer />
      </Container>
    </>
  );
}

export default TopperAdmin;
