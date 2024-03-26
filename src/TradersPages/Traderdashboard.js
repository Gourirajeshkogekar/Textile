// Dashboard.js
import React, { useContext } from 'react';
import './Traderdashboard.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import DoughnutChart from './DoughnutChart';
const Dashboard = () => {


    return (
        <Container fluid className="dashboard-container">

            <h4>Dashboard Of Traders:</h4>
            <Row className='card-container'>
                <Col md={4}>
                    <Card className='card'>
                        <Card.Body>
                            <Card.Title>Live Orders</Card.Title>
                            <Card.Text>Live orders count</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Plan Looms </Card.Title>
                            <Card.Text>Plan looms count</Card.Text>
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
                            <Card.Title>Calculations</Card.Title>
                            <Card.Text>calculation count</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Incomplete Tasks</Card.Title>
                            <Card.Text>incomplete Tasks count</Card.Text>
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
