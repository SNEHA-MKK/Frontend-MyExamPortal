import React, { useEffect, useState } from 'react'
import { Table, Container, Row, Col, Image, Nav, Button } from "react-bootstrap";
import UserHeader from '../../components/UserHeader';
// import { getUserProfile } from '../../services/allAPI';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { serverUrl } from '../../services/baseUrl';
import { updateProfile } from '../../services/allAPI';

function UserProfilePage() {
    // const [profile, setUserProfile] = useState({})
    // console.log(profile);
    // const getUserDetails = async () => {
    //     console.log('insde getUserDetaikls');

    //     if (sessionStorage.getItem("token")) {
    //         const token = sessionStorage.getItem("token");
    //         const reqHeader = {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${token}`
    //         };

    //         try {

    //             const result = await getUserProfile(reqHeader);
    //             console.log(result.data);
    //             setUserProfile(result.data);


    //         } catch (error) {


    //             console.error('Error fetching quiz topper:', error);
    //         }
    //     }
    // }
    // useEffect(() => {
    //      getUserDetails()
    // }, [])


    const [userDetails, setUserDetails] = useState({

        username: "",
        mailId: "",
        password: "",
        phone: "",
        qualification: "",
        profile: ""
    })
    const [existingImage, setExistingImage] = useState("")
    const [preview, setPreview] = useState("")
    console.log(userDetails);
    const [updateStatus, setUpdateStatus] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem("existingUser")) {
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setUserDetails({ ...userDetails, username: user.username, mailId: user.mailId, password: user.password, phone: user.phone, qualification: user.qualification })
            setExistingImage(user.profile)
        }

    }, [])

    useEffect(() => {
        if (userDetails.profile) {
            setPreview(URL.createObjectURL(userDetails.profile))
        } else {
            setPreview("")
        }
    }, [userDetails.profile])

    console.log(userDetails);

    const handleUpdate = async (e) => {
        e.preventDefault()
        const { username, mailId, password, phone, profile, qualification } = userDetails

        if (!phone || !mailId) {
            alert('please fill the form completely')
        } else {
            const reqBody = new FormData()


            reqBody.append("username", username)
            reqBody.append("mailId", mailId)
            reqBody.append("password", password)
            reqBody.append("phone", phone)
            reqBody.append("qualification", qualification)
            preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingImage)

            const token = sessionStorage.getItem("token")

            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }

                const result = await updateProfile(reqBody, reqHeader)

                if (result.status == 200) {
                    alert('Profile updated successfully')
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                    setUpdateStatus(!updateStatus)
                } else {
                    console.log(result);
                    alert('Something went wrong')
                }

            } else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await updateProfile(reqBody, reqHeader)

                if (result.status == 200) {
                    alert('Profile updated successfully')
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                    setUpdateStatus(!updateStatus)
                } else {
                    console.log(result);
                    alert('Something went wrong')
                }
            }
        }

    }


    return (
        <>
            <Container fluid>
                <UserHeader />
                {/* <Link to={'/quizzes'} style={{ textDecoration: 'none' }} className='d-flex justify-content-center align-tems-center mb-3'> <Button variant='danger' >Quiz</Button></Link> */}
                <Row>

                    {/* <Image
                            className="border border-success"
                            width="13%"
                            height="45%"
                            roundedCircle
                            src="https://banner2.cleanpng.com/20190205/tyl/kisspng-image-computer-icons-portable-network-graphics-ava-users-svg-png-icon-free-download-529385-onlin-5c59c257a086d4.9889939115493863276575.jpg"
                        /> */}


                    <div className='row'>


                        <div className="col-md-6 p-5">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <label htmlFor='image'>

                                    <input id='image' type="file" style={{ display: 'none' }} onChange={(e) => setUserDetails({ ...userDetails, profile: e.target.files[0] })} />

                                    {existingImage == "" ?
                                        <img src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4_zSFKVZJyBAZ9pqOE_XAK3Ag_q_WS4rsA&s"} alt="no image" width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} />
                                        :
                                        <img src={preview ? preview : `${serverUrl}/uploads/${existingImage}`} alt="no image" width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} />
                                    }

                                </label>

                                <div className='mb-3 w-100 mt-4'>
                                    <input type="text" value={userDetails.phone} onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })} placeholder='Phone' className='form-control w-100' />
                                </div>

                                <div className='mb-3 w-100'>
                                    <input type="mail" value={userDetails.mailId} onChange={(e) => setUserDetails({ ...userDetails, mailId: e.target.value })} placeholder='mailId' className='form-control w-100' />
                                </div>

                                <div className='mb-3 w-100 text-center'>
                                    <button onClick={handleUpdate} className='btn w-25' style={{ backgroundColor: 'green', color: 'white' }}>Update</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center ">

                            <Table bordered className="mt-5 p-5 mx-auto w-50">
                                <tbody>
                                    <tr>
                                        <td><b>Name</b></td>
                                        <td>{userDetails.username}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Email</b></td>
                                        <td>{userDetails.mailId}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Phone</b></td>
                                        <td>{userDetails.phone}</td>
                                    </tr>
                                    {/* <tr>
                                    <td>Role</td>
                                    <td>Software Developer</td>
                                </tr> */}
                                    <tr>
                                        <td><b>Qualification</b></td>
                                        <td>{userDetails.qualification}</td>
                                    </tr>
                                    {/* {profile.qualification} */}
                                </tbody>
                            </Table>
                        </div>

                    </div>



                </Row>



                <Footer />
            </Container>
        </>
    )
}

export default UserProfilePage



