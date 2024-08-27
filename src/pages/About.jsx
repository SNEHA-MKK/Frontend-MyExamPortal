
import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>

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


      <Container className='mt-5'>
        <Row className='mb-4'>
          <Col>
            <h1 className='text-center text-info'>About Us</h1>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col md={6}>
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='text-primary'>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to provide a seamless and efficient online exam platform that enables students and educators to conduct and participate in exams with ease and reliability. We strive to create a secure and user-friendly environment that supports the academic community in their pursuit of excellence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='text-primary'>Our Vision</Card.Title>
                <Card.Text>
                  We envision a world where technology enhances the learning and assessment experience, making education accessible and fair for everyone. Our online exam portal aims to be at the forefront of educational innovation, driving progress and ensuring that every student has the opportunity to succeed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <h2 className='text-center text-info'>Features</h2>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col md={4}>
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='text-primary'>Easy to Use</Card.Title>
                <Card.Text>
                  Our platform is designed with a user-friendly interface that makes it easy for both students and educators to navigate and use effectively.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='text-primary'>Secure</Card.Title>
                <Card.Text>
                  We prioritize security to ensure that exams are conducted fairly and that user data is protected at all times.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='text-primary'>Scalable</Card.Title>
                <Card.Text>
                  Our platform can handle a large number of users simultaneously, making it suitable for institutions of all sizes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col md={4}>
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='text-primary'>Customizable</Card.Title>
                <Card.Text>
                  We offer a range of customization options to tailor the exam experience to meet the specific needs of your institution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='text-primary'>Analytics</Card.Title>
                <Card.Text>
                  Our platform provides detailed analytics and reports to help educators understand student performance and make data-driven decisions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='text-primary'>24/7 Support</Card.Title>
                <Card.Text>
                  We offer round-the-clock support to ensure that any issues are resolved quickly and efficiently.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default About;

