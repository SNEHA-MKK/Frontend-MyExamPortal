import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi } from '../services/allAPI';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isAdminAuthorizedContext, isUserAuthorizedContext } from '../context/Context';


function Login() {

  const {setIsAdminAuthorized} = useContext(isAdminAuthorizedContext)
  const {setIsUserAuthorized} = useContext(isUserAuthorizedContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()



  const login = async (e) => {
    e.preventDefault();  //prevent refresh to avoid data loss
    // console.log(formData);
    const { email, password } = formData
    if (!email || !password) {
      toast.info('Please fill the form completely')
    } else {
      if (formData.email == "admin@gmail.com" && formData.password == "admin123") {
        const result = await loginApi(formData)
        console.log(result);
        if (result.status == 200) {
          sessionStorage.setItem("adminUser", JSON.stringify(result.data.adminUser))
          sessionStorage.setItem("token", result.data.token)
          toast.success('Login Successfull')
          setFormData({
            username: '',
            email: '',
          })
          navigate('/adminProfile')
          setIsAdminAuthorized(true)
        } else {
          toast.error(result.response.data);
          setUser({
            username: '',
            email: '',
          })
        }
      } else if (formData.email && formData.password) {
        const result = await loginApi(formData)
        if (result.status == 200) {
          sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token", result.data.token)
          setFormData({
            username: '',
            email: '',
          })
          navigate('/profile')
          setIsUserAuthorized(true)
        } else {

          toast.error(result.response.data);
          setUser({
            username: '',
            email: '',
          })
        }

      } else {
        alert('Invalid username or password')
      }
    }



  };

  //function to login

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="6">
          <h2 className="mb-4 text-center mt-5 p-1">LOGIN</h2>
          <Form className='p-5 rounded shadow' style={{ backgroundColor: 'rgba(82, 139, 141, 0.603)' }}>
            <Form.Group controlId="formUsername" className='mb-2'>
              <Form.Label className='text-light fs-5'><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className='mb-2'>
              <Form.Label className='text-light fs-5'><FontAwesomeIcon icon={faLock} /> Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </Form.Group>
            <div className='d-flex justify-content-between mx-4 mt-3'>
              <Button variant="danger" type="submit">
                <Link to={'/register'} className='text-light' style={{ textDecoration: 'none' }}> SignUp</Link>
              </Button>

              <Button onClick={login} variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      <ToastContainer theme='colored' autoClose={2000} position='top-center' />
    </Container>
  );
}

export default Login;

