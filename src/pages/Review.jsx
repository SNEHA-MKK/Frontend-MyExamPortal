
import React, { useEffect, useState } from 'react';
import UserHeader from '../components/UserHeader';
import Card from 'react-bootstrap/Card';
import { getAllReviews } from '../services/allAPI';
import AdminHeader from '../components/AdminHeader';

function Review() {
    const [review, setReview] = useState([]);
    console.log(review);
    const [user, setUser] = useState(false)

    const getReviews = async () => {
        try {
            if (sessionStorage.getItem("token")) {
                const token = sessionStorage.getItem("token");

                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                };

                const result = await getAllReviews(reqHeader);
                setReview(result.data);
            }
        } catch (error) {
            console.error("Error fetching quiz results:", error);
        }
    };

    useEffect(() => {
        getReviews();
        if (sessionStorage.getItem("adminUser")) {
            setUser(true)
        }

    }, []);

    return (
        <div style={{ 'overflowX': 'hidden' }}>
            {user ?
                <AdminHeader />
                :
                <UserHeader />
            }

            <div className="row p-2 " style={{ height: '100vh' }}  >
                {review?.length > 0 ? (
                    review?.map((item) => (
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12 m-1" key={item.id}>
                            <Card className='shadow border-0 rounded' style={{ width: '90%' }}>
                                <div
                                    className='d-flex justify-content-center align-items-center'
                                    style={{ height: '150px' }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
                                        style={{ maxHeight: '110%', maxWidth: '50%' }}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>{item.name} , {item.qualification}</Card.Title>
                                    <div className='d-flex'><h4>{item.mail}</h4><img src="https://images.template.net/99072/free-verified-tick-mark-clipart-qf03r.jpg" alt="" style={{ maxHeight: '10%', maxWidth: '10%' }} /></div>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <h1>No Reviews</h1>
                )}
            </div>
        </div>
    );
}

export default Review;
