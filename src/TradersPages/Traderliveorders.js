import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TradersPages/Traderliveorders.css';


function LiveOrders() {
    // Dummy data for live orders
    const [liveOrders, setLiveOrders] = useState([
        { orderNo: '001', partyName: 'Party A', quality: 'Checked' },
        { orderNo: '002', partyName: 'Party B', quality: 'Checked' },
        { orderNo: '003', partyName: 'Party C', quality: 'Checked' },
        { orderNo: '004', partyName: 'Party D', quality: 'Checked' }
    ]);

    const [selectedOrder, setSelectedOrder] = useState(null);
    const navigate = useNavigate();
    const handleLiveOrderClick = (order) => {

        setSelectedOrder(order);
        navigate(`/traders/liveorders/orderdetails/${order.orderNo}`);
    };





    return (
        <div>
            <h4>Live Orders for the Trader</h4>
            <div className="live-order-container">
                {liveOrders.map(order => (
                    <div key={order.orderNo} className="live-order">
                        <div className="live-order-item" onClick={() => handleLiveOrderClick(order)} >
                            <p><strong>Order No:</strong> {order.orderNo}</p>
                            <p><strong>Party Name:</strong> {order.partyName}</p>
                            <p><strong>Quality: </strong> {order.quality} </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default LiveOrders;
