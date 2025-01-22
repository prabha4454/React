import React from 'react'
import { useState } from 'react'
import "./css/survayForm.css"

export const Form1 = () => {
    const [formData, formDataSet] = useState({
        fname: '',
        lname: '',

    })
    return (
        <>

            <div className="survay-form  d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
                <form action="" className='form'>

                    {/* ----------For first name ---------- */}
                    <p>
                        <label htmlFor="fname">FirstName:</label>
                        <input
                            type="text"
                            id='fname'
                            name='fname'
                            value={formData.fname}
                            className='form-control'
                            placeholder='Enter Your FirstName'
                            required />
                    </p>

                    {/* ------ For Last Name ----------*/}

                    <p>
                        <label htmlFor="lname">LastName:</label>
                        <input
                            type="text"
                            id='lname'
                            name='lname'
                            value={formData.lname}
                            className='form-control'
                            placeholder='Enter Your LastName'
                            required />
                    </p>


                    {/* ---- Age ----- */}



                    <p>
                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="dob">Date of Birth:</label>
                                <input type="date" name="" id="" className='form-control' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender:</label>
                                <select name="" id="" className="form-control ">
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>


                                </select>
                            </div>
                        </div>
                    </p>


                    {/* ----- Email ------- */}

                    <p>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            className='form-control'
                            placeholder='Enter Your Email'
                            required />
                    </p>

                    {/* ------for phone Number ------ */}

                    <p>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            placeholder='+91'
                            className='form-control'
                        />
                    </p>

                    <button className='btn btn-secondary mx-auto d-block ' >Submit</button>
                </form>
            </div>

        </>
    )
}
