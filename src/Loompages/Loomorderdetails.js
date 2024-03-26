import React, { useState } from 'react';
import './Loomorderdetails.css'; // Import the CSS file

function Orderdetails() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null); // Track the currently selected menu item
    const [selectedMenuItems, setSelectedMenuItems] = useState([]);
    const [drawingInChecked, setDrawingInChecked] = useState(false);
    const [beamGettingChecked, setBeamGettingChecked] = useState(false);
    const [firstPieceApprovalFeedback, setFirstPieceApprovalFeedback] = useState(false);
    const [beamRows, setBeamRows] = useState([{}]); // Initial state with one empty row for "Beam In"
    const [weftRows, setWeftRows] = useState([{}]); // Initial state with one empty row for "Weft Yarn In"
    const [fabricDispatchRows, setFabricDispatchRows] = useState([{}]); // Initial state with one empty row for "Fabric Dispatch"
    const [remainingGoodsRows, setRemainingGoodsRows] = useState([{}]); // Initial state with one empty row for "Remaining Goods Return"

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(selectedMenuItem === menuItem ? null : menuItem); // Toggle the selected menu item
        setSelectedMenuItems([menuItem]); // Update the selected menu items array
    };

    const handleCheckboxChange = (menuItem) => {
        switch (menuItem) {
            case 'Drawing In':
                setDrawingInChecked(!drawingInChecked);
                break;
            case 'Beam Getting':
                setBeamGettingChecked(!beamGettingChecked);
                break;

            default:
                break;
        }
    };





    const handleAddRow = (type) => {
        const newRow = { id: Date.now() };
        switch (type) {
            case 'beam':
                setBeamRows([...beamRows, newRow]);
                break;
            case 'weft':
                setWeftRows([...weftRows, newRow]);
                break;
            case 'fabricDispatch':
                setFabricDispatchRows([...fabricDispatchRows, newRow]);
                break;
            case 'remainingGoods':
                setRemainingGoodsRows([...remainingGoodsRows, newRow]);
                break;
            default:
                break;
        }
    };


    // Add a function to handle row removal
    const handleRemoveRow = (type, id) => {
        switch (type) {
            case 'beam':
                setBeamRows(beamRows.filter(row => row.id !== id));
                break;
            case 'weft':
                setWeftRows(weftRows.filter(row => row.id !== id));
                break;
            case 'fabricDispatch':
                setFabricDispatchRows(fabricDispatchRows.filter(row => row.id !== id));
                break;
            case 'remainingGoods':
                setRemainingGoodsRows(remainingGoodsRows.filter(row => row.id !== id));
                break;
            default:
                break;
        }
    };

    const handleInputChange = (e, rowIndex, type) => {
        const { name, value } = e.target;
        const updatedRows = type === 'beam' ? [...beamRows] : type === 'weft' ? [...weftRows] : type === 'fabricDispatch' ? [...fabricDispatchRows] : [...remainingGoodsRows];
        updatedRows[rowIndex] = { ...updatedRows[rowIndex], [name]: value };
        type === 'beam' ? setBeamRows(updatedRows) : type === 'weft' ? setWeftRows(updatedRows) : type === 'fabricDispatch' ? setFabricDispatchRows(updatedRows) : setRemainingGoodsRows(updatedRows);
    };

    // Function to clear respective table fields
    const clearTableFields = (type) => {
        switch (type) {
            case 'beam':
                setBeamRows([{}]);
                break;
            case 'weft':
                setWeftRows([{}]);
                break;
            case 'fabricDispatch':
                setFabricDispatchRows([{}]);
                break;
            case 'remainingGoods':
                setRemainingGoodsRows([{}]);
                break;
            default:
                break;
        }
    };

    const handleOrderButton = () => {
        // Create an object to hold all the data
        const orderData = {
            selectedMenuItems,
            beamRows,
            weftRows,
            drawingInChecked,
            beamGettingChecked,
            firstPieceApprovalFeedback,
            fabricDispatchRows,
            remainingGoodsRows

        };

        // Clear table fields after submission
        clearTableFields('beam');
        clearTableFields('weft');
        clearTableFields('fabricDispatch');
        clearTableFields('remainingGoods');

        // Log the data to the console
        console.log(" order details saved", orderData);

        // Optionally, you can send this data to a server or perform any other actions here
    };

    const handleBeamSubmit = () => {
        console.log("Beam Data:", beamRows);
        // Optionally, you can send this data to a server or perform any other actions here

        //clear beam data after submission
        setBeamRows([{}]);
    };

    const handleWeftSubmit = () => {
        console.log("Weft Data:", weftRows);
        // Optionally, you can send this data to a server or perform any other actions here

        //clear weft data after submission
        setWeftRows([{}]);
    };

    const handleFabricDispatchSubmit = () => {
        console.log("Fabric Dispatch Data:", fabricDispatchRows);
        // Optionally, you can send this data to a server or perform any other actions here
        setFabricDispatchRows([{}]);
    };

    const handleRemainingGoodsSubmit = () => {
        console.log("Remaining Goods Data:", remainingGoodsRows);
        // Optionally, you can send this data to a server or perform any other actions here
        setRemainingGoodsRows([{}]);
    };



    const handleTippanPhotoChange = (event, rowIndex) => {
        const selectedImage = event.target.files[0];
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = () => {
                const updatedRows = [...beamRows];
                updatedRows[rowIndex] = { ...updatedRows[rowIndex], tippanPhotoUrl: reader.result };
                setBeamRows(updatedRows);
            };
            reader.readAsDataURL(selectedImage);
        }
    };







    return (
        <div className="orderdetails">
            <br />
            <h4>Order Details:</h4>
            <p>Order No: XX01</p>
            <p>Party Name: A</p>
            <p>Quality: Checked</p>
            <div className="order-container">
                {/* Beam In Section */}
                <div className={`order-item ${selectedMenuItems.includes('Beam In') ? 'selected' : ''}`}>
                    <div className="order-link" onClick={() => handleMenuItemClick('Beam In')}>Beam In</div>
                    <div>
                        {selectedMenuItems.includes('Beam In') && (
                            <table className='order-table-container1'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Sizing Tippan Number</th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {beamRows.map((row, index) => (
                                        <tr key={index}>
                                            <td>
                                                {index === beamRows.length - 1 ? (
                                                    <input type='date' name='beamdate' value={row.beamdate || ''} onChange={(e) => handleInputChange(e, index, 'beam')} />
                                                ) : (
                                                    <input type='date' name='beamdate' value={row.beamdate || ''} readOnly />
                                                )}
                                            </td>
                                            <td style={{ display: 'flex', alignItems: 'center' }}>
                                                {index === beamRows.length - 1 ? (
                                                    <input
                                                        type='text'
                                                        name='beamtippan'
                                                        value={row.beamtippan || ''}
                                                        onChange={(e) => handleInputChange(e, index, 'beam')}
                                                    />
                                                ) : (
                                                    <input
                                                        type='text'
                                                        name='beamtippan'
                                                        value={row.beamtippan || ''}
                                                        readOnly
                                                    />
                                                )}
                                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px', width: '50%' }}>
                                                    <input
                                                        type="file"
                                                        id={`tippanPhoto_${index}`}
                                                        name={`tippanPhoto_${index}`}
                                                        onChange={(e) => handleTippanPhotoChange(e, index)}
                                                        style={{ marginRight: '1px' }}
                                                        disabled={index !== beamRows.length - 1} // Disable file input for existing rows
                                                    />
                                                    {row.tippanPhotoUrl && <img src={row.tippanPhotoUrl} alt="Tippan Photo" style={{ maxWidth: '50px', maxHeight: '50px' }} />}
                                                </div>
                                            </td>



                                            <td>

                                                {index !== 0 && <button className='remove-button' onClick={() => handleRemoveRow('beam', row.id)}>Remove</button>}                                            </td>




                                        </tr>
                                    ))}
                                </tbody><br />
                                <button className='add-button' onClick={() => handleAddRow('beam')}>Add Row</button>
                                <button className='Order-button' onClick={handleBeamSubmit} >Submit</button>
                            </table>
                        )}
                    </div>

                </div>

                {/* Weft Yarn In Section */}
                <div className={`order-item ${selectedMenuItems.includes('Weft Yarn In') ? 'selected' : ''}`}>
                    <div className="order-link" onClick={() => handleMenuItemClick('Weft Yarn In')}>Weft Yarn In</div>
                    <div>
                        {selectedMenuItems.includes('Weft Yarn In') && (
                            <table className='order-table-container2'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Gate Pass Number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {weftRows.map((row, index) => (
                                        <tr key={index}>
                                            <td>
                                                {index === weftRows.length - 1 ? (
                                                    <input type='date' name='weftdate' value={row.weftdate || ''} onChange={(e) => handleInputChange(e, index, 'weft')} />
                                                ) : (
                                                    <input type='date' name='weftdate' value={row.weftdate || ''} readOnly />
                                                )}
                                            </td>
                                            <td>
                                                {index === weftRows.length - 1 ? (
                                                    <input type='text' name='weftGatePass' value={row.weftGatePass || ''} onChange={(e) => handleInputChange(e, index, 'weft')} />
                                                ) : (
                                                    <input type='text' name='weftGatePass' value={row.weftGatePass || ''} readOnly />
                                                )}

                                            </td>
                                            <td>

                                                {index !== 0 && <button className='remove-button' onClick={() => handleRemoveRow('weft', row.id)}>Remove</button>}                                            </td>
                                        </tr>
                                    ))}
                                </tbody><br />
                                <button className='add-button' onClick={() => handleAddRow('weft')}>Add Row</button>
                                <button className='Order-button' onClick={handleWeftSubmit}>Submit</button>
                            </table>
                        )}
                    </div>
                </div>

                {/* Drawing In Section */}
                <div className={`order-item ${selectedMenuItems.includes('Drawing In') ? 'selected' : ''}`}>
                    <div className="order-link" onClick={() => handleMenuItemClick('Drawing In')}>Drawing In</div>
                    {selectedMenuItems.includes('Drawing In') && (
                        <div className="checkbox-container">

                            <input
                                type='checkbox'
                                id="drawingIn"
                                name="drawingIn"
                                checked={drawingInChecked}
                                onChange={() => handleCheckboxChange('Drawing In')}
                            /> Yes
                        </div>
                    )}
                </div>

                {/* Beam Getting Section */}
                <div className={`order-item ${selectedMenuItems.includes('Beam Getting') ? 'selected' : ''}`}>
                    <div className="order-link" onClick={() => handleMenuItemClick('Beam Getting')}>Beam Getting</div>
                    {selectedMenuItems.includes('Beam Getting') && (
                        <div className="checkbox-container">
                            <input
                                type='checkbox'
                                id="beamGetting"
                                name="beamGetting"
                                checked={beamGettingChecked}
                                onChange={() => handleCheckboxChange('Beam Getting')}
                            />Yes
                        </div>
                    )}
                </div>

                {/* First Piece Approval Section */}
                <div className={`order-item ${selectedMenuItems.includes('First Piece Approval') ? 'selected' : ''}`}>
                    <div className="order-link" onClick={() => handleMenuItemClick('First Piece Approval')}>First Piece Approval</div>
                    {selectedMenuItems.includes('First Piece Approval') && (
                        <div className="feedback-container">

                            <textarea
                                type='text'
                                id='firstPieceApprovalFeedback'
                                name='firstPieceApprovalFeedback'
                                placeholder="Any Comments..."
                                value={firstPieceApprovalFeedback}
                                onChange={(e) => setFirstPieceApprovalFeedback(e.target.value)}
                                style={{ width: "90%", resize: "none" }} // Set the width to 100% and disable resizing

                                readOnly={false} // Set to true if you want it to be read-only
                            />
                        </div>
                    )}
                </div>
            </div>
            <div>

                {/* Fabric Dispatch Section */}
                <div className={`order-item ${selectedMenuItems.includes('Fabric Dispatch') ? 'selected' : ''}`}>
                    <div className="order-link" onClick={() => handleMenuItemClick('Fabric Dispatch')}>Fabric Dispatch</div>
                    <div>
                        {selectedMenuItems.includes('Fabric Dispatch') && (
                            <table className='order-table-container3'>
                                <thead>
                                    <tr>
                                        <th>Dispatch No</th>
                                        <th>Date</th>
                                        <th>Meter</th>
                                        <th>Weight</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fabricDispatchRows.map((row, index) => (
                                        <tr key={index}>
                                            <td>
                                                {index === fabricDispatchRows.length - 1 ? (
                                                    <input type='text' name='dispatchNo' value={row.dispatchNo || ''} onChange={(e) => handleInputChange(e, index, 'fabricDispatch')} />
                                                ) : (
                                                    <input type='text' name='dispatchNo' value={row.dispatchNo || ''} readOnly />
                                                )}</td>
                                            <td>
                                                {index === fabricDispatchRows.length - 1 ? (
                                                    <input type='date' name='dispatchDate' value={row.dispatchDate || ''} onChange={(e) => handleInputChange(e, index, 'fabricDispatch')} />
                                                ) : (
                                                    <input type='date' name='dispatchDate' value={row.dispatchDate || ''} readOnly />
                                                )}</td>
                                            <td>
                                                {index === fabricDispatchRows.length - 1 ? (
                                                    <input type='text' name='dispatchMeter' value={row.dispatchMeter || ''} onChange={(e) => handleInputChange(e, index, 'fabricDispatch')} />
                                                ) : (
                                                    <input type='text' name='dispatchMeter' value={row.dispatchMeter || ''} readOnly />
                                                )}</td>
                                            <td>
                                                {index === fabricDispatchRows.length - 1 ? (
                                                    <input type='text' name='dispatchWeight' value={row.dispatchWeight || ''} onChange={(e) => handleInputChange(e, index, 'fabricDispatch')} />
                                                ) : (
                                                    <input type='text' name='dispatchWeight' value={row.dispatchWeight || ''} readOnly />
                                                )}</td>
                                            <td>

                                                {index !== 0 && <button className='remove-button' onClick={() => handleRemoveRow('dispatchWeight', row.id)}>Remove</button>}                                            </td>
                                        </tr>
                                    ))}
                                </tbody><br />
                                <button className='add-button' onClick={() => handleAddRow('fabricDispatch')}>Add Row</button>
                                <button className='Order-button' onClick={handleFabricDispatchSubmit}>Submit</button>
                            </table>
                        )}
                    </div>
                </div>

                {/* Remaining Goods Return Section */}
                <div className={`order-item ${selectedMenuItems.includes('Remaining Goods Return') ? 'selected' : ''}`}>
                    <div className="order-link" onClick={() => handleMenuItemClick('Remaining Goods Return')}>Remaining Goods Return</div>
                    <div>
                        {selectedMenuItems.includes('Remaining Goods Return') && (
                            <table className='order-table-container4'>
                                <thead>
                                    <tr>
                                        <th>GP No</th>
                                        <th>Yarn Count</th>
                                        <th>Weight</th>
                                        <th>Cut Piece</th>
                                        <th>Meter</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {remainingGoodsRows.map((row, index) => (
                                        <tr key={index}>
                                            <td>
                                                {index === remainingGoodsRows.length - 1 ? (
                                                    <input type='text' name='gpNo' value={row.gpNo || ''} onChange={(e) => handleInputChange(e, index, 'remainingGoods')} />
                                                ) : (
                                                    <input type='text' name='gpNo' value={row.gpNo || ''} readOnly />
                                                )}</td>
                                            <td>
                                                {index === remainingGoodsRows.length - 1 ? (
                                                    <input type='text' name='yarnCount' value={row.yarnCount || ''} onChange={(e) => handleInputChange(e, index, 'remainingGoods')} />
                                                ) : (
                                                    <input type='text' name='yarnCount' value={row.yarnCount || ''} readOnly />
                                                )}</td>
                                            <td>
                                                {index === remainingGoodsRows.length - 1 ? (
                                                    <input type='text' name='weight' value={row.weight || ''} onChange={(e) => handleInputChange(e, index, 'remainingGoods')} />
                                                ) : (
                                                    <input type='text' name='weight' value={row.weight || ''} readOnly />
                                                )}</td>
                                            <td>
                                                {index === remainingGoodsRows.length - 1 ? (
                                                    <input type='text' name='cutPiece' value={row.cutPiece || ''} onChange={(e) => handleInputChange(e, index, 'remainingGoods')} />
                                                ) : (
                                                    <input type='text' name='cutPiece' value={row.cutPiece || ''} readOnly />
                                                )}</td>
                                            <td>
                                                {
                                                    index === remainingGoodsRows.length - 1 ? (
                                                        <input type='text' name='meter' value={row.meter || ''} onChange={(e) => handleInputChange(e, index, 'remainingGoods')} />
                                                    ) : (
                                                        <input type='text' name='meter' value={row.meter || ''} readOnly />
                                                    )}</td>
                                            <td>

                                                {index !== 0 && <button className='remove-button' onClick={() => handleRemoveRow('remainingGoods', row.id)}>Remove</button>}                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <button className='add-button' onClick={() => handleAddRow('remainingGoods')}>Add Row</button>
                                <button className='Order-button' onClick={handleRemainingGoodsSubmit}>Submit</button>
                            </table>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <button className='order-button' onClick={handleOrderButton}>Order Completed</button>
            </div>
        </div>
    );
}

export default Orderdetails;













