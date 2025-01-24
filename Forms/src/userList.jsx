import React from 'react'
import { useState } from 'react'


export const UserList = (props) => {

    const {users, updateUser ,deleteuser} = props;
  

    return (
        <>

<div className="table-responsive mt-5 w-100 mb-5">
<table className="table table-striped table-sm w-75 mx-auto">
                   <thead className='table-dark'>
                    <tr className='text-center allign-middle'>
                        <th className='text-danger'>S/NO</th>
                        <th>FULL NAME</th>

                        <th>DOB</th>
                        <th>GENDER</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id} className='text-center align-middle'>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>

                            <td>{user.dob}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td className='d-flex gap-2'>
                                <button className='btn btn-primary' onClick={() => updateUser(user)}>edit</button>
                                <button className="btn btn-danger" onClick={() => deleteuser(user._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>


                </table>
            </div>
        </>
    )
}
