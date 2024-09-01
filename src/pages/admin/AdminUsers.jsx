import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/AdminHeader'
import { Table } from 'react-bootstrap';
import { getUsers } from '../../services/allAPI';

function AdminUsers() {

    const [users, setUsers] = useState([])

    const getAllUsers = async () => {

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")

            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }

            const result = await getUsers()
            console.log(result.data);
            setUsers(result.data)

        }

    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <>
            <AdminHeader />

            <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/1253222652/vector/abstract-light-blue-wavy-modern-curve-lines-on-top-and-bottom-with-clean-background-vector.jpg?s=612x612&w=0&k=20&c=h0Cemf1DEK58s4lJSzot_o1mEm9_VAakPMaA4xCHXeg=')", backgroundSize: 'cover', backgroundPosition: 'center' ,height: '100vh' }}>
                <div className="container "   >
                    <h2 className="text-center text-info mb-4 p-3">All Users</h2>
                    <div>
                        <Table striped bordered rounded hover responsive className='mt-3' style={{
                            borderRadius: '40px',
                            overflow: 'hidden',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                        }} >
                            <thead style={{ backgroundColor: '#007bff', fontFamily: "cursive" }}>
                                <tr>
                                    <th className='text-danger text-center'>Serial No.</th>
                                    <th className='text-danger  text-center'>Name</th>
                                    <th className='text-danger  text-center'>Email</th>
                                    <th className='text-danger  text-center'>Phone</th>
                                    <th className='text-danger  text-center'>Qualification</th>
                                </tr>
                            </thead>
                            <tbody>

                                {users?.length > 0 ?

                                    users?.map((item, index) => (
                                        <tr>
                                            <td className='text-center p-3'>{index + 1}</td>
                                            <td className='text-center p-3'>{item.username}</td>
                                            <td className='text-center p-3'>{item.mailId}</td>
                                            <td className='text-center p-3'>{item.phone}</td>
                                            <td className='text-center p-3'>{item.qualification}</td>
                                        </tr>
                                    ))

                                    :
                                    <h1>No Users</h1>
                                }


                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsers
