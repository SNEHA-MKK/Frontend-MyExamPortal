
import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Image, Nav } from "react-bootstrap";
import './AdminProfilePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { addAdminProfileApi, getAdminProfileApi } from '../../services/allAPI';
// import { serverUrl } from '../../services/baseUrl';

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader';



function AdminProfilePage() {

  // const [preview, setPreview] = useState("")
  //state to hold the admin details
  // const [adminDetails, setAdminDetails] = useState({
  //   profileImage: "",
  //   phnNo: "",
  //   Role: ""

  // })
  // console.log(adminDetails);
  const [token, setToken] = useState("")
  const [adminUser, setAdminUser] = useState({})

  console.log(adminUser);


  // const [key,setKey] = useState(false)

  //state to hold the get admin profile data 
  // const [adProfile, setAdProfile] = useState({})

  // const handleUpload = async (e) => {
  //   e.preventDefault()

  //   const { profileImage, phnNo, Role } = adminDetails
  //   if (!profileImage || !phnNo || !Role) {
  //     toast.info('Please fill the form completely')
  //   } else {

  //     //handle uploaded contents
  //     const reqBody = new FormData()
  //     //to add data
  //     reqBody.append("profileImage", profileImage)
  //     reqBody.append("phnNo", phnNo)
  //     reqBody.append("Role", Role)

  //     if (token) {

  //       let reqHeader = {
  //         "Content-Type": "multipart/form-data",
  //         "Authorization": `Bearer ${token}`
  //       }

  //       const result = await addAdminProfileApi(reqBody, reqHeader)
  //       // console.log(result);

  //       if (result.status == 200) {
  //         setAdminDetails({
  //           profileImage: "",
  //           phnNo: "",
  //           Role: ""
  //         })

  //       } else {
  //         toast.error('something went wrong')
  //         setAdminDetails({
  //           profileImage: "",
  //           phnNo: "",
  //           Role: ""
  //         })
  //       }

  //     }

  //     getAdminProfile()
  //   }


  // }



  // useEffect(() => {
  //   //file converted to url
  //   if (adminDetails.profileImage) {
  //     setPreview(URL.createObjectURL(adminDetails.profileImage))
  //   }

  // }, [adminDetails.profileImage])
  // console.log(preview);

  useEffect(() => {

    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    } else {
      setToken("")
    }

    if (sessionStorage.getItem("adminUser")) {
      setAdminUser(JSON.parse(sessionStorage.getItem("adminUser")))
    } else {
      setAdminUser({})
    }
    // to get admin profile when page loads

  }, [])
  console.log(token);

  // const getAdminProfile = async () => {
  //   const result = await getAdminProfileApi()
  //   console.log(result);
  //   const data = result.data[length]
  //   console.log(data);
  //   setAdProfile(result.data[length])
  // }

  // console.log(adProfile);


  return (
    <Container fluid className="p-0">

      {/* <Navbar expand="lg" className="bg-white navbar  mb-5 " fixed="top">
        <Container className='justify-content-between align-items-center'>
          <Navbar.Brand className='fw-bolder text-info'>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <img src="https://images.softwaresuggest.com/software_logo/1495539705_followclass-192.png" width={'50px'} height={'50px'} alt="" className='me-3' />
              EXAM PORTAL
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='text-primary fw-bolder'><Link to={'/dashboard'} style={{ textDecoration: "none" }}>HOME</Link></Nav.Link>
              <Nav.Link className='text-primary fw-bolder'><Link to={'/postjobs'} style={{ textDecoration: "none" }} >PROFILE</Link></Nav.Link>
              <Nav.Link className='text-primary fw-bolder'><Link to={'/adminCategoty'} style={{ textDecoration: "none" }}>CATEGORY</Link></Nav.Link>
            </Nav>
            <Nav className='ms-auto jusify-content-between'>

              <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
                LOGOUT
              </button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <AdminHeader/>

      <div className="row mt-5 p-5" style={{ height: '10vh' }}>

        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex align-items-center mt-5  shadow  rounded">


          <div id="example-collapse-text" className='mt-4 w-100 d-flex justify-content-center align-items-center flex-column'>
            <div className='mb-3 w-100 text-center'>
              {/* <label htmlFor="image"> */}
                {/* key={key} - key attribute in input tag */}
                {/* <input onChange={(e) => setAdminDetails({ ...adminDetails, profileImage: e.target.files[0] })} id='image' type="file" style={{ display: 'none' }} /> */}
                <img src="https://cdn-icons-png.flaticon.com/512/8101/8101718.png" alt="" width={'200px'} height={'200px'} style={{ borderRadius: '100px' }} />
                {/* <img src={preview ? preview : "https://cdn-icons-png.flaticon.com/512/8101/8101718.png"} alt="" width={'200px'} height={'200px'} style={{ borderRadius: '100px' }} /> */}


              {/* </label> */}
            </div>
            {/* <div className='mb-3 w-100'>
              <input onChange={(e) => setAdminDetails({ ...adminDetails, phnNo: e.target.value })} type="text" placeholder='Phone Number' className='form-control w-100' />
            </div>

            <div className='mb-3 w-100'>
              <input onChange={(e) => setAdminDetails({ ...adminDetails, Role: e.target.value })} type="text" placeholder='Role' className='form-control w-100' />
            </div>
            <div className='mb-3 w-100'>
              <button onClick={handleUpload} type='button' className='btn btn-success w-100'>Upload</button>
            </div> */}

          </div>



        </div>
        <div className="col-md-6 d-flex align-items-center">
          <Table bordered className="w-75 ">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{adminUser.name}</td>
              </tr>
              <tr>
                <td>Email Id</td>
                <td>{adminUser.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{adminUser.phone}</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>{adminUser.role}</td>
              </tr>

            </tbody>
          </Table>
        </div>

      </div>


      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </Container>
  );
}

export default AdminProfilePage;
