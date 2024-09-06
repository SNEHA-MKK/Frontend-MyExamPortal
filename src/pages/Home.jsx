


import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css'

function Home() {
  return (
    <>
      <Navbar expand="lg" className="mx-3 rounded shadow navbar mb-1 mt-3">
        <Container fluid className='justify-content-between align-items-center'>
          <Navbar.Brand className='fw-bolder text-info'>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <img src="https://images.softwaresuggest.com/software_logo/1495539705_followclass-192.png" width={'50px'} height={'50px'} alt="" className='me-3' />
              EXAM PORTAL
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto justify-content-between'>
              <Link to={'/homeQuiz'}>
                <Button className='text-light rounded-5 mx-lg-2 my-2 my-lg-0' variant="info">Exams</Button>
              </Link>
              <Link to={'/register'}>
                <Button className='text-light rounded-5 mx-lg-2 my-2 my-lg-0' variant="info">SignUp</Button>
              </Link>
              <Link to={'/login'}>
                <Button className='text-light rounded-5 mx-lg-2 my-2 my-lg-0' variant="info">Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='p-5 text-center bg-img' style={{ minHeight: "90vh"}}>
      <h1 className='text-center text-light text-align-justify mt-5'>Online Examination platform for all your exam <br /> conducting and assessment needs</h1>
        <h4 className='text-light mt-4 animate__animated animate__fadeInDown'>EASY TO USE | SECURE | ACCURATE</h4>
        <Link to={'/register'}>
          <Button variant='info' className='text-light mt-5 rounded'>Get Started</Button>
        </Link>
      </div>

      <div className="row p-0 w-100 my-5"  style={{ minHeight: '60vh'}}>
        <div className="col-md-1"></div>
        <div className="col-md-10 mt-3">
          <Row className='p-5'>
            <Col xs={6} md={3} className="p-4" >
              <img className='img-fluid rounded' src="https://ssbcrackexams.com/wp-content/uploads/2022/04/ssb-course.gif" alt="" width={'1000px'} height={'1000px'} />
            </Col>
            <Col xs={6} md={3} className="p-4">
              <img className='img-fluid rounded' src="https://media4.giphy.com/media/VfK8uwEgsWawGtsSKO/giphy.gif?cid=6c09b9525wp6xvpm4jismeczs65j52wzn104fb3bjmnov7cb&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" width={'600px'} height={'600px'} />
            </Col>
            <Col xs={6} md={3} className="p-4">
              <img className='img-fluid rounded' src="https://j.gifs.com/KR1wLE.gif" alt="" width={'600px'} height={'600px'} />
            </Col>
            <Col xs={6} md={3} className="p-4">
              <img className='img-fluid rounded' src="https://media3.giphy.com/media/9OIvfxqQGhhqlbQBiQ/200w.gif?cid=6c09b952pl3vf834wzvunpat8rma514b2ld2x9wwa5mqclnt&ep=v1_gifs_search&rid=200w.gif&ct=g" alt=""width={'600px'} height={'600px'} />
            </Col>
          </Row>
          <div className='text-center'>
            <Link to={'/homeQuiz'}>
            <Button variant='info' className='text-light text-center mt-0 mb-4 '>Available Exams</Button>
          </Link>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
