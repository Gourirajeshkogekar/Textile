import React, { useState } from 'react';
import { Table, Button, Pagination, Row, Col } from 'react-bootstrap';
import Loomenquiry from './Loomenquiry';


function Jobworkenquires() {
    const [showEnquiryForm, setShowEnquiryForm] = useState(false);
    const [rows, setRows] = useState([
        { srno: '', enquiryno: '', datefrom: '', tradername: '' },
        // Add more sample data as needed
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderRows = () => {
        return currentItems.map((row, index) => {
            const rowIndex = index + indexOfFirstItem; // Adjust the index based on the current page and items per page
            const isEmpty = Object.values(row).every(value => value === '');
            if (!isEmpty) {
                return (
                    <tr key={rowIndex}>
                        <td>{rowIndex}</td>
                        <td>{row.enquiryno}</td>
                        <td>{row.datefrom}</td>
                        <td>{row.tradername}</td>
                    </tr>
                );
            }
            return null;
        });
    };

    const handleEnquirySubmit = (formData) => {
        setRows([...rows, formData]);
        setShowEnquiryForm(false);
    };


    const handleNotInterested = () => {

        setShowEnquiryForm(false);
    };


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(rows.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <h4>Job Work Enquiries</h4>
            <Button type='button' className='newbutton' onClick={() => setShowEnquiryForm(true)} onNotInterested={handleNotInterested} >New</Button>
            <br /><br />
            {showEnquiryForm && (
                <div className="overlay">
                    <div className="enquiry-form">
                        <Loomenquiry onSubmit={handleEnquirySubmit} onNotInterested={handleNotInterested} />
                    </div>
                </div>
            )}
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Enquiry No</th>
                                <th>Date</th>
                                <th>Trader Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Pagination>
                {pageNumbers.map(number => (
                    <Pagination.Item key={number} onClick={() => paginate(number)} active={number === currentPage}>
                        {number}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
}

export default Jobworkenquires;
