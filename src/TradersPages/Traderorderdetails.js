import React, { useState } from 'react';
import './Traderorderdetails.css'; // Import the CSS file

function Orderdetails() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null); //Track single menu item at a time 
    const [selectedMenuItems, setSelectedMenuItems] = useState([]);
    const [drawingInChecked, setDrawingInChecked] = useState(false);
    const [beamGettingChecked, setBeamGettingChecked] = useState(false);
    const [firstPieceApprovalFeedback, setFirstPieceApprovalFeedback] = useState(false);
    const [beamRows, setBeamRows] = useState([{}]); // Initial state with one empty row for "Beam In"
    const [weftRows, setWeftRows] = useState([{}]); // Initial state with one empty row for "Weft Yarn In"
    const [fabricDispatchRows, setFabricDispatchRows] = useState([{}]); // Initial state with one empty row for "Fabric Dispatch"
    const [remainingGoodsRows, setRemainingGoodsRows] = useState([{}]); // Initial state with one empty row for "Remaining Goods Return"

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(selectedMenuItem === menuItem ? null : menuItem); //Toggle the selected menu item 
        setSelectedMenuItems([menuItem]); // update the selected menu items array.
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






    const handleRemoveRow = (type, id) => {
        // Do nothing because we don't want to allow removing rows
    };
    const handleOrderButton = () => {
        // Create an object to hold all the data
        const orderData = {

            firstPieceApprovalFeedback
        };
        setFirstPieceApprovalFeedback('');

        // Log the data to the console
        console.log(" order details saved", orderData);

        // Optionally, you can send this data to a server or perform any other actions here
    };


    const handleTippanPhotoChange = (e, rowId) => {
        const { files } = e.target;
        const updatedBeamRows = beamRows.map(row => {
            if (row.id === rowId) {
                return {
                    ...row,
                    tippanPhoto: files[0] // Assuming only one file is uploaded
                };
            }
            return row;
        });
        setBeamRows(updatedBeamRows);
    };


    return (
        <div className="orderdetails">
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
                                                <input type='date' name='beamdate' value={row.beamdate || ''} readOnly />
                                            </td>
                                            <td>
                                                <input type='text' name='beamtippan' value={row.beamtippan || ''} readOnly />
                                            </td>

                                            <td>
                                                {index !== 0 && <button onClick={() => handleRemoveRow('beam', row.id)}>Remove</button>}
                                            </td>

                                        </tr>
                                    ))}
                                </tbody><br />

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
                                                <input type='date' name='weftdate' value={row.weftdate || ''} readOnly />
                                            </td>
                                            <td>


                                                <input type='text' name='weftGatePass' value={row.weftGatePass || ''} readOnly />


                                            </td>
                                            <td>

                                                {index !== 0 && <button onClick={() => handleRemoveRow('weft', row.id)}>Remove</button>}                                            </td>
                                        </tr>
                                    ))}
                                </tbody><br />

                            </table>
                        )}
                    </div>
                </div>

                {/* Drawing In Section */}
                <div className={`order-item ${selectedMenuItems.includes('Drawing In') ? 'selected' : ''}`}>
                    <div className="order-link" onClick={() => handleMenuItemClick('Drawing In')}>Drawing In</div>
                    {selectedMenuItems.includes('Drawing In') && (
                        <div className="checkbox-container">
                            <label htmlFor="drawingIn">Drawing In:</label>
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
                            <label htmlFor="beamGetting">Beam Getting:</label>
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
                                style={{ width: '90%', resize: 'none' }}
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

                                                <input type='text' name='dispatchNo' value={row.dispatchNo || ''} readOnly />
                                            </td>
                                            <td>

                                                <input type='date' name='dispatchDate' value={row.dispatchDate || ''} readOnly />
                                            </td>
                                            <td>

                                                <input type='text' name='dispatchMeter' value={row.dispatchMeter || ''} readOnly />
                                            </td>
                                            <td>

                                                <input type='text' name='dispatchWeight' value={row.dispatchWeight || ''} readOnly />
                                            </td>
                                            <td>

                                                {index !== 0 && <button onClick={() => handleRemoveRow('dispatchWeight', row.id)}>Remove</button>}                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

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

                                                <input type='text' name='gpNo' value={row.gpNo || ''} readOnly />
                                            </td>
                                            <td>

                                                <input type='text' name='yarnCount' value={row.yarnCount || ''} readOnly />
                                            </td>
                                            <td>

                                                <input type='text' name='weight' value={row.weight || ''} readOnly />
                                            </td>
                                            <td>

                                                <input type='text' name='cutPiece' value={row.cutPiece || ''} readOnly />
                                            </td>
                                            <td>

                                                <input type='text' name='meter' value={row.meter || ''} readOnly />
                                            </td>
                                            <td>

                                                {index !== 0 && <button onClick={() => handleRemoveRow('remainingGoods', row.id)}>Remove</button>}                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

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













