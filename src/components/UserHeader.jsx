
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { isUserAuthorizedContext } from '../context/Context';


function UserHeader() {
  const navigate = useNavigate()
  const { setIsUserAuthorized } = useContext(isUserAuthorizedContext)

  const handleLogoutUser = () => {
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsUserAuthorized(false)
    navigate('/')
  }

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
            <Nav className="ms-auto">
              <Nav.Link className='text-primary fw-bolder'><Link to={'/'} style={{ textDecoration: "none" }}>HOME</Link></Nav.Link>
              
              <Nav.Link className='text-primary fw-bolder'><Link to={'/profile'} style={{ textDecoration: "none" }} >PROFILE</Link></Nav.Link>
              <Nav.Link className='text-primary fw-bolder'><Link to={'/adminCategoty'} style={{ textDecoration: "none" }}>CATEGORY</Link></Nav.Link>
              <Nav.Link className='text-primary fw-bolder'><Link to={'/quizzes'} style={{ textDecoration: "none" }}>QUIZZ</Link></Nav.Link>
              <Nav.Link className='text-primary fw-bolder'><Link to={'/quizResults'} style={{ textDecoration: "none" }}>RESULTS</Link></Nav.Link>
              <Nav.Link className='text-primary fw-bolder'><Link to={'/review'} style={{ textDecoration: "none" }}>REVIEWS</Link></Nav.Link>

            </Nav>
            <Nav className='ms-auto jusify-content-between'>

              {/* <Link to={'/register'} >
                <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
                  SignUp
                </button>
              </Link> */}
              <Link to={'/login'}>
                <button onClick={handleLogoutUser} className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
                  LogOut
                </button>
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UserHeader;

