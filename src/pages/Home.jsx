
// import React from 'react';
// import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Footer from '../components/Footer';

// function Home() {
//   return (
//     <>
//       <Navbar expand="lg" className="mx-3 rounded shadow navbar  mb-1 mt-3  " >
//         <Container fluid className='justify-content-between align-items-center'>
//           <Navbar.Brand className='fw-bolder text-info'>
//             <Link to={'/'} style={{ textDecoration: 'none' }}>
//               <img src="https://images.softwaresuggest.com/software_logo/1495539705_followclass-192.png" width={'50px'} height={'50px'} alt="" className='me-3' />
//               EXAM PORTAL
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             {/* <Nav className="ms-auto">
//                   <Nav.Link  className='text-primary fw-bolder'><Link to={'/dashboard'} style={{textDecoration:"none"}}>HOME</Link></Nav.Link>
//                   <Nav.Link  className='text-primary fw-bolder'><Link to={'/postjobs'} style={{textDecoration:"none"}} >PROFILE</Link></Nav.Link>
//                   <Nav.Link  className='text-primary fw-bolder'><Link to={'/viewJobsAdmin'} style={{textDecoration:"none"}}>CATEGORY</Link></Nav.Link>
//                 </Nav> */}
//             <Nav className='ms-auto jusify-content-between'>


//               <Link to={'/homeQuiz'} >
//                 <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
//                   Exams
//                 </button>
//               </Link>
//               <Link to={'/register'} >
//                 <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
//                   SignUp
//                 </button>
//               </Link>
//               <Link to={'/login'}>
//                 <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
//                   Login
//                 </button>
//               </Link>

//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <div className='p-5 ' style={{ minHeight: "70vh", backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVrnC-pOuzr81yoRw8JBc9WTrOC3E9x1g9g&s')", backgroundSize: 'cover', backgroundPosition: 'center' }}>


        


//         <Row>

//           <Col>

//             <h1 className='text-center text-light text-align-justify'>Online Examination platform for all your exam <br /> conducting and assessment needs</h1>
//           </Col>

//           <h4 className='text-center text-light mt-4'>EASY TO USE | SECURE | ACCURATE</h4>

//           <Link to={'/about'} className='text-center mt-5' ><button className='btn bg-danger text-light '>About Us</button></Link>


//           {/* <Col md={6} className="d-flex flex-column justify-content-center">
//               <h1 className='text-light'>Online Exam Portal</h1>
//               <p className='text-light mt-4 mb-4'>
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem excepturi delectus eveniet voluptatum ex nesciunt facere aut suscipit cum sunt expedita, iusto repudiandae id perspiciatis sed nostrum voluptate consequatur veniam.
//               </p>
//               <button className='btn bg-danger text-light w-25'>Get Started</button>
//             </Col>
//             <Col md={6} className="d-flex justify-content-center align-items-center">
//               <img className='img-fluid rounded' src={homeImg} alt="Exam Portal" />
//             </Col> */}
//         </Row>

//       </div>
      
//       <div className="row p-0 w-100" style={{height:'50vh',backgroundImage: "url('https://png.pngtree.com/background/20210717/original/pngtree-abstract-flowing-texture-background-picture-image_1439147.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
//           <div className="col-md-1"></div>
//           <div className="col-md-10 mt-3">
//             <div className='row p-5'>
//               <div className="col-md-3 p-2 ">
//                 <img className='rounded' src="https://sithcomputers.com/wp-content/uploads/2021/05/Excel.gif" width={'200px'} height={'200px'} alt="" />
//               </div>
//               <div className="col-md-3 p-2">
//                 <img className='rounded' src="https://cdn.dribbble.com/users/148988/screenshots/6683934/pdf.gif" width={'200px'} height={'200px'} alt="" />
//               </div>


//               <div className="col-md-3 p-2">
//                 <img className='rounded' src="https://media.tenor.com/3oZgb_Imb7EAAAAM/time-clock.gif" width={'200px'} height={'200px'} alt="" />
//               </div>
//               <div className="col-md-3 p-2">
//                 <img src="https://clipart-library.com/images/rTjGjAnkc.gif" width={'200px'} height={'200px'} alt="" />
//               </div>
//             </div>
//           </div>
//           <div className="col-md-2"></div>
//         </div>
      
//       <Footer />
//     </>
//   );
// }

// export default Home;


import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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

      <div className='p-5 text-center ' style={{ minHeight: "70vh", backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVrnC-pOuzr81yoRw8JBc9WTrOC3E9x1g9g&s')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className='text-center text-light text-align-justify mt-5'>Online Examination platform for all your exam <br /> conducting and assessment needs</h1>
        <h4 className='text-light mt-4'>EASY TO USE | SECURE | ACCURATE</h4>
        <Link to={'/about'}>
          <Button variant='danger' className='text-light mt-5'>About Us</Button>
        </Link>
      </div>

      <div className="row p-0 w-100" style={{ minHeight: '50vh', backgroundImage: "url('https://png.pngtree.com/background/20210717/original/pngtree-abstract-flowing-texture-background-picture-image_1439147.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            <Button variant='danger' className='text-light text-center mt-0 mb-4 '>Available Exams</Button>
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
