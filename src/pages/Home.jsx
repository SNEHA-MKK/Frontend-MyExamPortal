
import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
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

      <div className='p-5 ' style={{ minHeight: "70vh", backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVrnC-pOuzr81yoRw8JBc9WTrOC3E9x1g9g&s')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <Row className='mt-5'>

          <Col>

            <h1 className='text-center text-light text-align-justify'>Online Examination platform for all your exam <br /> conducting and assessment needs</h1>
          </Col>

          <h4 className='text-center text-light mt-4'>EASY TO USE | SECURE | ACCURATE</h4>

          <Link to={'/about'} className='text-center mt-3' ><button className='btn bg-danger text-light '>About Us</button></Link>
          {/* <Col md={6} className="d-flex flex-column justify-content-center">
              <h1 className='text-light'>Online Exam Portal</h1>
              <p className='text-light mt-4 mb-4'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem excepturi delectus eveniet voluptatum ex nesciunt facere aut suscipit cum sunt expedita, iusto repudiandae id perspiciatis sed nostrum voluptate consequatur veniam.
              </p>
              <button className='btn bg-danger text-light w-25'>Get Started</button>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <img className='img-fluid rounded' src={homeImg} alt="Exam Portal" />
            </Col> */}
        </Row>

      </div>
      <Footer />
    </>
  );
}

export default Home;
