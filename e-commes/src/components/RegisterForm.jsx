import { Formik, Form, Field, ErrorMessage } from "formik"; // Form handling
import * as Yup from "yup"; // Form validation
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from 'axios';
import { useState , useRef} from "react";
import { motion } from "framer-motion"; 


import React from 'react'

export const RegisterForm = () => {


    const [response , setResponse] =useState('')

    const register = useRef(null)

    const validationSchema = Yup.object({

        name: Yup.string()
            .required("Name is Required"),
        email: Yup
            .string()
            .required("Email is Required"),
        phone: Yup
            .number()
            .min(9, "number is not valid")
            .required("phone Number is required"),
        password: Yup
        .string()
            .min(8, "password should atleast 8 charecter")
            .required("password is required"),
        conformpassword: Yup
        .string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),

    })

    /* page variants for motion.div framer motion */

    const pageVariants = {
        initial: { opacity: 0, x: "-100vw" },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "100vw" },
        transition: { type: "spring", stiffness: 50 },
      };
      
    const handdleResponse = async()=>{
        register.current.focus()
    }

    return (
        <>
       
            <Formik
            
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    conformpassword: ""
                }}
                validationSchema={validationSchema}

                onSubmit={(values, { setSubmitting }) => {
                    // Send data to the backend API
                    fetch('http://localhost:5000/api/auth/register', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(values),
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        console.log('Server response:', data);
                        console.log(data.message)
                        setResponse(data.message)
                        setSubmitting(false);
                      })
                      .catch((error) => {
                        console.error('Error:', error);
                        setSubmitting(false);
                      });
             
                   
               
                }}

            >

                {({ isSubmiting }) => (
                   
                        <Form className="w-50 mx-auto ">
    <motion.div
    ref={register}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    
    >
                            <div className="text-center text-success">
                              {response}

                            </div>
                            </motion.div>
                            {/* field for fullName */}

                            <div className="mb-3">
                                <label htmlFor="name">Full Name:</label>
                                <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    placeholder="Enter Your Full Name"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            {/* Field for Email */}

                            <div className="mb-3">
                                <label htmlFor="email">Email:</label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter Your Email"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            {/* field for phone Number */}
                            <div className="mb-3">
                                <label htmlFor="phone">Phone No:</label>
                                <Field
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="form-control"
                                    placeholder="Enter Your Mobile No"
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>
                            {/* filed for password */}

                            <div className="mb-3">
                                <label htmlFor="password">Password:</label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter Your Full Name"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>
                            {/* Field for conform password */}
                            <div className="mb-3">
                                <label htmlFor="conformpasword">Re-Type Password:</label>
                                <Field
                                    name="conformpassword"
                                    type="password"
                                    id="conformpassword"
                                    className="form-control"
                                    placeholder="Enter Your Full Name"
                                />
                                <ErrorMessage
                                    name="conformpassword"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            {/* for submit button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm d-flex mx-auto"
                                    disabled={isSubmiting}
                                    onSubmit={handdleResponse}>
                                    Submit
                                </button>
                            </div>
                        </Form>
                )}
            </Formik>

            
        </>
    )
}
