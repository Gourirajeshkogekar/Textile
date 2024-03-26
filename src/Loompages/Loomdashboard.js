// Dashboard.js
import React, { useContext } from 'react';
import './Loomdashboard.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import DoughnutChart from './DoughnutChart';
const Dashboard = () => {


    return (
        <Container fluid className="dashboard-container">

            <h4>Dashboard Of Loom Owner:</h4>
            <Row className='card-container'>
                <Col md={4}>
                    <Card className='card'>
                        <Card.Body>
                            <Card.Title>Loom Details</Card.Title>
                            <Card.Text>Loom details if any</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Job Work Enquiries </Card.Title>
                            <Card.Text>Job Work Enquiries count</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Get Yarn Rates</Card.Title>
                            <Card.Text>get yarn rates count</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Live Orders</Card.Title>
                            <Card.Text>Live orders count</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Calculations</Card.Title>
                            <Card.Text>calculations count</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Completed Orders</Card.Title>
                            <Card.Text>completed orders count</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <DoughnutChart />
        </Container>
    );
};

export default Dashboard;
