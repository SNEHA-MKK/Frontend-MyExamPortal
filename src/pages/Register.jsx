import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { registerAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faBook, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

function Register() {

  //state to hold the data or user details
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    qualification: ""
  })

  // console.log(user);

  const navigate = useNavigate()

  //function to call register api
  const register = async (e) => {

    e.preventDefault()
    const { username, email, password, phone, qualification } = user
    if (!username || !email || !password || !phone || !qualification) {
      toast.info('please fill the form completely')
    } else {
      const result = await registerAPI(user)
      console.log(result);
      if (result.status == 200) {
        alert('registration successfull')
        setUser({
          username: "",
          email: "",
          password: "",
          phone: "",
          qualification: ""
        })
        navigate('/login')
      } else {
        toast.error(result.response.data);
        setUser({
          username: "",
          email: "",
          password: "",
          phone: "",
          qualification: ""
        })
      }
    }
  }



  return (
    <Container >
      <div className='w-100'>
        <Row className="justify-content-md-center" >
          <Col md="6">
            <h2 className="mb-4 text-center mt-5">REGISTER</h2>
            <Form className='p-5 rounded shadow' style={{ backgroundColor: 'rgba(82, 139, 141, 0.603)' }}>
              <Form.Group controlId="formUsername" className='mb-2'>
                <Form.Label className='text-light fs-5'><FontAwesomeIcon icon={faUser} /> Name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className='mb-2'>
                <Form.Label className='text-light fs-5'><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className='mb-2'>
                <Form.Label className='text-light fs-5'><FontAwesomeIcon icon={faLock} /> Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className='mb-2'>
                <Form.Label className='text-light fs-5'><FontAwesomeIcon icon={faPhone} />Phone</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formQualification" className='mb-2'>
                <Form.Label className='text-light fs-5'><FontAwesomeIcon icon={faBook} /> Qualiification</Form.Label>
                <Form.Control
                  type="text"
                  name="qualification"
                  value={user.qualification}
                  onChange={(e) => setUser({ ...user, qualification: e.target.value })}
                  required
                />
              </Form.Group>


              <Button className='mt-3 w-100' onClick={register} variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      <ToastContainer theme='colored' autoClose={2000} position='top-center' />
    </Container>
  );
}

export default Register;
