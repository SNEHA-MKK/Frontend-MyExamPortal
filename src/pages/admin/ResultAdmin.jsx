import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Alert, Button } from 'react-bootstrap';
import { getAdminResults} from '../../services/allAPI';
import AdminHeader from '../../components/AdminHeader';
import Footer from '../../components/Footer';


function ResultAdmin() {

    const [results, setResults] = useState([]);
    console.log(results);
    // const [name,setName] = useState({})
    // console.log(name);




    // const getUserName = async (id) => {

    //     const token = sessionStorage.getItem('token');
    //     const reqHeader = {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     };

    //     try {

    //         const names = await getUserProfile(id,reqHeader)

    //         console.log(names.data);
    //         // setName(names.data);
    //     } catch (error) {
    //         console.error('Error fetching all users results:', error);
    //     }

    // }

    const fetchAllUsersResults = async () => {
        const token = sessionStorage.getItem('token'); // Assuming token is stored in sessionStorage

        if (token) {

            const reqHeader = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };

            try {

                const result = await getAdminResults(reqHeader);

                console.log(result.data);
                setResults(result.data);
            } catch (error) {
                console.error('Error fetching all users results:', error);
            }
        }
    };

    useEffect(() => {
        console.log('djfh');

        fetchAllUsersResults();
    }, []);


    return (
        <>
            <Container fluid>
                <AdminHeader />
                <Row className='my-4'>
                    <Col md={12}>
                        <h2 className='text-center mt-3 mb-3'>Results</h2>
                        <div style={{ overflowX: 'scroll' }}>
                            <Table hover bordered rounded shadow className="mt-4 text-center" >
                                <thead>
                                    <tr>
                                        <th>Serial no</th>
                                        <th>User Id</th>
                                        {/* <th>User Name</th> */}
                                        <th>Quiz Name</th>
                                        <th>Category Name</th>
                                        <th>Obtained Marks</th>
                                        <th>Total Marks</th>
                                        {/* <th>Date</th> */}
                                    </tr>
                                </thead>
                                <tbody>

                                    {results?.length > 0 ?
                                        results?.map((item, index) => (

                                            <tr >
                                                <td>{index + 1}</td>
                                                <td>{item.userId}</td>
                                                {/* <td>{()=>getUserName(item.userId)}</td> */}
                                                <td>{item.quizId}</td>
                                                <td>{item.category}</td>
                                                <td>{item.score}</td>
                                                <td>{item.total}</td>

                                                {/* <td>9/07/24</td> */}
                                            </tr>
                                        ))

                                        :
                                        <tr>
                                            <td colSpan="7">
                                                <Alert variant="info" className="mt-4">
                                                    No results to display.
                                                </Alert>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>

                <Footer />

                {/* <Row>
                <Col>
                    <h2 className='text-center mt-3 mb-3'>Toppers</h2>

                    <Table striped bordered hover className="mt-3">
                        <thead>
                            <tr>
                                <th>Quiz ID</th>
                                <th>Category</th>
                                <th>Topper</th>
                            </tr>
                        </thead>
                        <tbody>

                                <tr >
                                    <td>efe</td>
                                    <td>juu</td>
                                    <td>kuhi</td>
                                </tr>

                        </tbody>
                    </Table>
                </Col>
            </Row> */}
            </Container>
        </>
    )
}

export default ResultAdmin




// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Table, Alert } from 'react-bootstrap';
// import { getAdminResults, getUserProfile } from '../../services/allAPI';
// import AdminHeader from '../../components/AdminHeader';
// import Footer from '../../components/Footer';

// function ResultAdmin() {

//     const [results, setResults] = useState([]);
//     const [usernames, setUsernames] = useState({});

//     const getUserName = async (id) => {

//         console.log(id);
//         // console.log(token);


//         try {
//             console.log('kuygy');
//             const response = await getUserProfile(id);
//             const jobi = response.data; // Adjust this according to the API response structure
//             console.log(jobi);
            
//             setUsernames(prevState => ({ ...prevState, [id]: jobi }));
//         } catch (error) {
//             console.error('Error fetching user name:', error);
//         }
//     }

//     const fetchAllUsersResults = async () => {
//         const token = sessionStorage.getItem('token'); // Assuming token is stored in sessionStorage

//         if (token) {
//             const reqHeader = {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             };

//             try {
//                 console.log("sjhbjhhjjh bjhygg uygugu");
                
//                 const result = await getAdminResults(reqHeader);
//                 console.log(result.data);
                
//                 setResults(result.data);
//                 results.forEach(item =>{ console.log(item);
//                 }); // Fetch usernames for each result
//             } catch (error) {
//                 console.error('Error fetching all users results:', error);
//             }
//         }
//     };

//     useEffect(() => {
//         fetchAllUsersResults();
//     }, []);

//     return (
//         <>
//             <Container fluid>
//                 <AdminHeader />
//                 <Row className='my-4'>
//                     <Col md={12}>
//                         <h2 className='text-center mt-3 mb-3'>Results</h2>
//                         <div style={{ overflowX: 'scroll' }}>
//                             <Table hover bordered rounded shadow className="mt-4 text-center" >
//                                 <thead>
//                                     <tr>
//                                         <th>Serial no</th>
//                                         <th>User Id</th>
//                                         <th>User Name</th>
//                                         <th>Quiz Name</th>
//                                         <th>Category Name</th>
//                                         <th>Obtained Marks</th>
//                                         <th>Total Marks</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {results?.length > 0 ?
//                                         results?.map((item, index) => (
//                                             <tr >
//                                                 <td>{index + 1}</td>
//                                                 <td>{item.userId}</td>
//                                                 <td>{usernames[item.userId] || 'Loading...'}</td>
//                                                 <td>{item.quizId}</td>
//                                                 <td>{item.category}</td>
//                                                 <td>{item.score}</td>
//                                                 <td>{item.total}</td>
//                                             </tr>
//                                         )) :
//                                         <tr>
//                                             <td colSpan="7">
//                                                 <Alert variant="info" className="mt-4">
//                                                     No results to display.
//                                                 </Alert>
//                                             </td>
//                                         </tr>
//                                     }
//                                 </tbody>
//                             </Table>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Footer />
//             </Container>
//         </>
//     );
// }

// export default ResultAdmin;
