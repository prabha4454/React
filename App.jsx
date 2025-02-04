// Install required libraries:
// npm install react-router-dom axios react-query formik yup @emotion/react @emotion/styled framer-motion react-icons bootstrap

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Routing
import { QueryClient, QueryClientProvider, useQuery } from "react-query"; // Data fetching and caching
import axios from "axios"; // For API calls
import { Formik, Form, Field, ErrorMessage } from "formik"; // Form handling
import * as Yup from "yup"; // Form validation
import styled from "@emotion/styled"; // Styling
import { motion } from "framer-motion"; // Animations
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import { FaHome, FaDatabase, FaWpforms } from "react-icons/fa"; // Icons
import Hooks from "./Hooks";
import Hookcont from "./Hookcont";

// Emotion Styled Component
const StyledHeader = styled.h1`
  text-align: center;
  color: #4caf50;
  margin-bottom: 20px;
`;

// Framer Motion Animation Variants
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" },
  transition: { type: "spring", stiffness: 50 },
};

// Fake API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Home Component
const Home = () => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <StyledHeader>
      <FaHome /> Welcome to React Libraries Demo
    </StyledHeader>
    <p className="text-center">
      This app demonstrates the most popular React libraries in one program!
    </p>
    <div className="d-flex justify-content-center mt-4">
      <Link to="/data" className="btn btn-success mx-2">
        <FaDatabase /> Fetch Data
      </Link>
      <Link to="/form" className="btn btn-primary mx-2">
        <FaWpforms /> Go to Form
      </Link>
    </div>
  </motion.div>
);

// Data Fetching Component
const DataFetching = () => {
  const { data, error, isLoading } = useQuery("fetchUsers", async () => {
    const response = await axios.get(API_URL);
    return response.data;
  });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <StyledHeader>
        <FaDatabase /> Data Fetching
      </StyledHeader>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {!isLoading && !error && (
        <ul className="list-group">
          {data.map((user) => (
            <li className="list-group-item" key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

// Form Handling Component
const FormHandling = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <StyledHeader>
        <FaWpforms /> Form Handling
      </StyledHeader>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {() => (
          <Form className="container">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <Field
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

// App Component
const App = () => {
  const queryClient = new QueryClient()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<QueryClientProvider client={queryClient}><DataFetching /></QueryClientProvider>} />
        <Route path="/form" element={<FormHandling />} />
        <Route path="/hooks" element={<Hooks/>}/>
        <Route path="/hookc" element={<Hookcont/>}/>
      </Routes>
    </Router>
  );
};

export default App;
