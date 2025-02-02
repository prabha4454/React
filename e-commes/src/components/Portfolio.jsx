import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Project One", description: "A detailed description of project one." },
    { id: 2, title: "Project Two", description: "A detailed description of project two." },
    { id: 3, title: "Project Three", description: "A detailed description of project three." },
  ];

  return (
    <Container className="min-vh-100 bg-light py-5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        <h1 className="display-4 text-dark">Welcome to My Portfolio</h1>
        <p className="lead text-muted">A showcase of my work and projects.</p>
      </motion.div>
      
      <Row className="g-4">
        {projects.map((project) => (
          <Col key={project.id} md={4}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-lg rounded-3">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
