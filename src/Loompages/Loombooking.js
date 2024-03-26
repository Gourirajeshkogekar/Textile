import React, { useState } from 'react';
import '../Loompages/Loombooking.css'; // Import CSS file for styling

const AvailableBlock = ({ loomNumber, onClick, isOccupied }) => {
    const handleClick = () => {
        // If the block is not occupied, allow it to be clicked
        if (!isOccupied) {
            onClick(loomNumber);
        }
    };

    // Determine the background color based on the availability status
    const backgroundColor = isOccupied ? 'red' : 'green';

    return (
        <div className="block" style={{ backgroundColor }} onClick={handleClick}>
            {loomNumber}
        </div>
    );
};

const Loombooking = () => {
    const [selectedLoom, setSelectedLoom] = useState(null);
    const [bookingFormData, setBookingFormData] = useState({
        ordernumber: '', quality: '', fromdate: '', todate: '', partyname: '', jobrate: ''
    });
    const [availabilityFormData, setAvailabilityFormData] = useState({
        availablefromdate: '', availabletodate: ''
    });
    const [occupiedBlocks, setOccupiedBlocks] = useState([]);

    const handleBlockClick = (loomNumber) => {
        setSelectedLoom(loomNumber);
    };

    const handleSubmit = () => {
        if (selectedLoom) {
            // Add the selected block to the list of occupied blocks
            setOccupiedBlocks([...occupiedBlocks, selectedLoom]);
            setSelectedLoom(null); // Reset selected block
        }
        console.log('bookingformdata', bookingFormData)
        // Clear form data
        setBookingFormData({
            ordernumber: '', quality: '', fromdate: '', todate: '', partyname: '', jobrate: ''

        });
    };

    const handleBookingInputChange = (e) => {
        setBookingFormData({ ...bookingFormData, [e.target.name]: e.target.value });
    };

    const handleAvailabilityInputChange = (e) => {
        setAvailabilityFormData({ ...availabilityFormData, [e.target.name]: e.target.value });
    };


    // Filter available blocks based on selected date range
    const filteredAvailableBlocks = () => {
        const fromDate = new Date(availabilityFormData.availablefromdate);
        const toDate = new Date(availabilityFormData.availabletodate);
        return [...Array(20).keys()]
            .filter(index => !occupiedBlocks.includes(index + 1))
            .filter(blockIndex => {
                const blockDate = new Date(); // Replace this with actual logic to get the date of the block
                return blockDate >= fromDate && blockDate <= toDate;
            });
    };

    // Define the number of blocks per bunch
    const blocksPerBunch = 2;


    return (
        <>
            <h4>Loom Booking panel for Loom Shades:</h4>
            <div className='loom-block-container'>

                {/* <div className="label-container">
                    <h5 className="available-label">Available</h5>
                    <h5 className="occupied-label">Occupied</h5>
                </div> */}

                <div className="block-container">
                    {[...Array(20).keys()].map((index) => (
                        (index % blocksPerBunch === 0) && <div className="bunch-container" key={`bunch-${index}`}>
                            {[...Array(blocksPerBunch).keys()].map((i) => (
                                <AvailableBlock
                                    key={index + i}
                                    loomNumber={index + i + 1}
                                    onClick={handleBlockClick}
                                    isOccupied={occupiedBlocks.includes(index + i + 1)}
                                />
                            ))}
                        </div>
                    ))}

                </div>

                {selectedLoom && (
                    <>
                        <div className='block-inputs'>
                            <div >
                                <label >Order Number:</label>
                                <input type='text' placeholder='Enter Order Number' id='ordernumber' name='ordernumber' onChange={handleBookingInputChange} value={bookingFormData.ordernumber} />
                            </div>

                            <div>
                                <label htmlFor="quality">Quality:</label>
                                <input type='text' placeholder='Enter Quality' id='quality' name='quality' onChange={handleBookingInputChange} value={bookingFormData.quality} />
                            </div>
                            <div>
                                <label htmlFor="fromdate">From Date:</label>
                                <input type='date' placeholder='Enter from date' id='fromdate' name='fromdate' onChange={handleBookingInputChange} value={bookingFormData.fromdate} />
                            </div>
                            <div>
                                <label htmlFor="todate">To Date:</label>
                                <input type='date' placeholder='Enter to date' id='todate' name='todate' onChange={handleBookingInputChange} value={bookingFormData.todate} />
                            </div>
                            <div>
                                <label htmlFor="partyname">Party Name:</label>
                                <input type='text' placeholder='Enter Party Name' id='partyname' name='partyname' onChange={handleBookingInputChange} value={bookingFormData.partyname} />
                            </div>
                            <div>
                                <label htmlFor="jobrate">Job Rate:</label>
                                <input type='text' placeholder='Enter Job Rate' id='jobrate' name='jobrate' onChange={handleBookingInputChange} value={bookingFormData.jobrate} />
                            </div>
                            <div className="submit-button-container">
                                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </>
                )}


            </div>

            {/* Loom Availability Check */}
            <div className='available-block'>
                <div className="availability-info">
                    <label>Check Loom Availability:</label>
                    <div>
                        <label htmlFor="fromdate">From Date:</label>
                        <input type='date' placeholder='Enter from date' id='availablefromdate' name='availablefromdate' onChange={handleAvailabilityInputChange} value={availabilityFormData.availablefromdate} />
                    </div>
                    <div>
                        <label htmlFor="fromdate">To Date:</label>
                        <input type='date' placeholder='Enter to date' id='availabletodate' name='availabletodate' onChange={handleAvailabilityInputChange} value={availabilityFormData.availabletodate} />
                    </div>

                    {/* Display available loom numbers */}
                    <div >
                        <label>Available Loom Numbers:</label>
                        {filteredAvailableBlocks().map((block) => (
                            <span key={block}>{block + 1}, </span>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Loombooking;






















