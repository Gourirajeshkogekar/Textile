import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loomliveorders.css';


function LiveOrders() {
    // Dummy data for live orders
    const [liveOrders, setLiveOrders] = useState([
        { orderNo: '001', partyName: 'Party A', quality: 'Checked' },
        { orderNo: '002', partyName: 'Party B', quality: 'Checked' },
        { orderNo: '003', partyName: 'Party C', quality: 'Checked' },
        { orderNo: '004', partyName: 'Party D', quality: 'Checked' },
        { orderNo: '005', partyName: 'Party E', quality: 'Checked' },
        { orderNo: '006', partyName: 'Party F', quality: 'Checked' },
        { orderNo: '007', partyName: 'Party G', quality: 'Checked' },
        { orderNo: '008', partyName: 'Party H', quality: 'Checked' },
        { orderNo: '001', partyName: 'Party A', quality: 'Checked' },
        { orderNo: '002', partyName: 'Party B', quality: 'Checked' },
        { orderNo: '003', partyName: 'Party C', quality: 'Checked' },
        { orderNo: '004', partyName: 'Party D', quality: 'Checked' }
    ]);

    const [selectedOrder, setSelectedOrder] = useState(null);
    const navigate = useNavigate();
    const handleLiveOrderClick = (order) => {

        setSelectedOrder(order);
        navigate(`/loomowner/liveorders/orderdetails/${order.orderNo}`);
    };





    return (
        <div>
            <h4>Live Orders for the Loomowner</h4>
            <div className="live-order-container">
                {liveOrders.map(order => (
                    <div key={order.orderNo} className="live-order">
                        <div className="live-order-item" onClick={() => handleLiveOrderClick(order)} >
                            <p><strong>Order No:</strong> {order.orderNo}</p>
                            <p><strong>Party Name:</strong> {order.partyName}</p>
                            <p><strong>Quality:</strong> {order.quality}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default LiveOrders;

































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Liveorder.css';

// function LiveOrders() {
//     // Dummy data for live orders
//     const [liveOrders, setLiveOrders] = useState([
//         { orderNo: '001', partyName: 'Party A' },
//         { orderNo: '002', partyName: 'Party B' },
//         { orderNo: '003', partyName: 'Party C' },
//         { orderNo: '004', partyName: 'Party D' }
//     ]);

//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [contractSigned, setContractSigned] = useState(false);
//     const navigate = useNavigate();

//     const handleLiveOrderClick = (order) => {
//         setSelectedOrder(order);
//     };

//     const handleCheckboxChange = () => {
//         setContractSigned(!contractSigned);
//     };

//     const navigateToOrderDetails = () => {
//         if (contractSigned && selectedOrder) {
//             navigate(`/loomowner/liveorders/orderdetails/${selectedOrder.orderNo}`);
//         } else {
//             prompt("Please sign the contract first or select an order.");
//         }
//     };

//     return (
//         <div>
//             <h4>Live Orders</h4>
//             <div className="live-order-container">
//                 {liveOrders.map(order => (
//                     <div key={order.orderNo} className="live-order">
//                         <div className="live-order-item" onClick={() => handleLiveOrderClick(order)} >
//                             <p><strong>Order No:</strong> {order.orderNo}</p>
//                             <p><strong>Party Name:</strong> {order.partyName}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="contract-signed-section">
//                 <p>Contract Signed:
//                     <input
//                         type="checkbox"
//                         checked={contractSigned}
//                         onChange={handleCheckboxChange}
//                     />
//                 </p>
//                 <button onClick={navigateToOrderDetails}>View Order Details</button>
//             </div>
//         </div>
//     );
// }

// export default LiveOrders;


















