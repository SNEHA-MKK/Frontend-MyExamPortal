
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Alert } from 'react-bootstrap';
import { getAdminResults } from '../../services/allAPI';
import AdminHeader from '../../components/AdminHeader';
import Footer from '../../components/Footer';

function ResultAdmin() {

    const [results, setResults] = useState([]);

    const fetchAllUsersResults = async () => {
        const token = sessionStorage.getItem('token');

        if (token) {
            const reqHeader = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };

            try {
                const result = await getAdminResults(reqHeader);
                setResults(result.data);
            } catch (error) {
                console.error('Error fetching all users results:', error);
            }
        }
    };

    useEffect(() => {
        fetchAllUsersResults();
    }, []);

    return (
        <>
            <Container fluid>
                <AdminHeader />
                <Row className='my-4' >
                    <Col md={12}>
                        <h2 className='text-center text-info mt-3 mb-3'>Results</h2>
                        <div style={{ overflowX: 'auto' }}> {/* Ensures horizontal scrolling on small screens */}
                            <Table hover bordered className="mt-4 p-4 text-center" responsive="sm"  style={{
                            borderRadius: '40px',
                            overflow: 'hidden',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}> {/* Added responsive */}
                                <thead>
                                    <tr>
                                        <th className='text-info' >#</th>
                                        <th className='text-info'>User Id</th>
                                        <th className='text-info'>Quiz Name</th>
                                        <th className='text-info'>Category Name</th>
                                        <th className='text-info'>Obtained Marks</th>
                                        <th className='text-info'>Total Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results?.length > 0 ? (
                                        results.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.userId}</td>
                                                <td>{item.quizId}</td>
                                                <td>{item.category}</td>
                                                <td>{item.score}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6">
                                                <Alert variant="info" className="mt-4">
                                                    No results to display.
                                                </Alert>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </>
    )
}

export default ResultAdmin;



