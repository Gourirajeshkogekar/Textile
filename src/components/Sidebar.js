import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import './Sidebar.css';
import { useState } from "react";
import { LoomProvider } from '../Loompages/Loomcontext';

import React from "react";
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

//all icon imports
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SearchIcon from '@mui/icons-material/Search';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";

//all component imports
import Home from '../components/Home';
import Loomowner from '../Loompages/Loomowner';
import Traders from '../TradersPages/Traders';
import Loomdashboard from '../Loompages/Loomdashboard'
import Loomdetails from '../Loompages/Loomdetails'
import Loomjobworkenquiry from '../Loompages/Loomjobworkenquiry'
import Loombooking from '../Loompages/Loombooking';
import Loomliveorders from '../Loompages/Loomliveorders';
import Loomgetyarnrates from '../Loompages/Loomgetyarnrates';
import Loomcompletedorders from '../Loompages/Loomcompletedorders';
import Loomcalculations from '../Loompages/Loomcalculations'
import Loomorderdetails from "../Loompages/Loomorderdetails";
import Traderdashboard from '../TradersPages/Traderdashboard'
import Traderliveorders from '../TradersPages/Traderliveorders'
import Traderplanlooms from '../TradersPages/Traderplanlooms'
import Tradergetyarnrates from '../TradersPages/Tradergetyarnrates'
import Tradercalculations from '../TradersPages/Tradercalculations'
import Traderincompletetask from '../TradersPages/Traderincompletetask'
import Tradercompletedorders from '../TradersPages/Tradercompletedorders'
import Traderorderdetails from '../TradersPages/Traderorderdetails'
import { Navbar } from "react-bootstrap";
import textileImage from './textile.jpg';
function Mysidebar() {

    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
        useProSidebar();

    const [businessName, setBusinessName] = useState(''); // State to store the entered business name
    const [showTabs, setShowTabs] = useState(false);
    const [tabData, setTabData] = useState({ businessName: '', gstIn: '', phoneNo: '', emailId: '', businessAddress: '', businessType: '', businessCategory: '', pinCode: '', state: '', signature: '', businessDescription: ' ' })
    const [image, setImage] = useState(null);


    const toggleTabs = () => {
        setShowTabs(!showTabs);
    };

    const handleInputChange = (e) => {

        setBusinessName(e.target.value); // Update the business name state

        const { name, value } = e.target;

        setTabData(prevData => ({
            ...prevData,
            [name]: value
        })
        );

    };


    const navigate = useNavigate();
    const handleSaveButton = () => {

        console.log('company info saved');
        navigate('/');
        setShowTabs(false);
        setTabData("");
    }

    // Function to handle image upload
    const handleImageUpload = (event) => {
        const selectedImage = event.target.files[0]; // Get the selected image file
        if (selectedImage) {
            const reader = new FileReader(); // Create a new FileReader object
            reader.onload = () => {
                setImage(reader.result); // Set the state with the data URL of the uploaded image
            };
            reader.readAsDataURL(selectedImage); // Read the selected image as a data URL
        }
    };
    return (
        <>

            <div className="sidebarbody">
                <div className="mysidebar">
                    <Sidebar className="sidebar" >
                        <Menu className="sidebarmenu" >


                            {/* <MenuItem icon={
                            <MenuRoundedIcon
                                onClick={() => {
                                    collapseSidebar();
                                }}
                            />
                        } > */}








                            <div className="welcome-container">
                                <div className="textile-info">
                                    <div className="textile-header">
                                        <h5 className="truncate" onClick={toggleTabs}>{businessName || "Textile"} </h5>

                                    </div>
                                    {/* Display the uploaded image or default logo */}
                                    <label htmlFor="logo-upload" className="logo-label">
                                        {image ? (
                                            <img className="app-logo" src={image} alt="Uploaded" />
                                        ) : (
                                            <div className="app-logo-placeholder">
                                                <img className="default-logo" src={textileImage} alt="Default" />
                                                <span>Upload logo </span>
                                            </div>
                                        )}
                                    </label>

                                    {/* File input for uploading image */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="logo-upload"
                                        onChange={handleImageUpload}
                                        style={{ display: "none" }} // Hide the input element
                                    />
                                </div>

                                {/* {image && <img className="app-logo" src={image} alt="Uploaded" />} {/* Display the uploaded image if available */}
                                {/* {!image && <img className="app-logo" src={welcomeImage} alt="textile image" />}<br />  */}




                                {showTabs && (
                                    <div className="textile-overlay">
                                        <div className="textile-container">
                                            {/* Your tabs containing personal information */}
                                            <div className="textile-tab">
                                                <h4 style={{ color: "black" }}>Edit Firm:</h4>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Business name:
                                                            <input
                                                                type="text"
                                                                id="businessName"
                                                                name="businessName"
                                                                value={tabData.businessName}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter business name"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>GSTIN:
                                                            <input
                                                                type="text"
                                                                id="gstIn"
                                                                name="gstIn"
                                                                value={tabData.gstIn}
                                                                onChange={handleInputChange}
                                                                placeholder="GSTIN"
                                                            />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Phone Number:
                                                            <input
                                                                type="text"
                                                                id="phoneNo"
                                                                name="phoneNo"
                                                                value={tabData.phoneNo}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter Phone number"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>Email ID:
                                                            <input
                                                                type="text"
                                                                id="emailId"
                                                                name="emailId"
                                                                value={tabData.emailId}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter emailId"
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Business Address:
                                                            <input
                                                                type="text"
                                                                id="businessAddress"
                                                                name="businessAddress"
                                                                value={tabData.businessAddress}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter businessAddress"
                                                            />
                                                        </label></div>
                                                    <div className="col-md-6">
                                                        <label>Business Type:
                                                            <input
                                                                type="text"
                                                                id="businessType"
                                                                name="businessType"
                                                                value={tabData.businessType}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter businessType"
                                                            />
                                                        </label></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Business Category:
                                                            <input
                                                                type="text"
                                                                id="businessCategory"
                                                                name="businessCategory"
                                                                value={tabData.businessCategory}
                                                                onChange={handleInputChange}
                                                                placeholder="businessCategory"
                                                            />
                                                        </label></div>
                                                    <div className="col-md-6">
                                                        <label>Pincode:
                                                            <input
                                                                type="text"
                                                                id="pinCode"
                                                                name="pinCode"
                                                                value={tabData.pinCode}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter pinCode"
                                                            />
                                                        </label></div></div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>State:
                                                            <input
                                                                type="text"
                                                                id="state"
                                                                name="state"
                                                                value={tabData.state}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter state"
                                                            />
                                                        </label></div>
                                                    <div className="col-md-6">
                                                        <label>Signature:
                                                            <input
                                                                type="text"
                                                                id="signature"
                                                                name="signature"
                                                                value={tabData.signature}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter signature"
                                                            />
                                                        </label></div></div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Business Description :
                                                            <input
                                                                type="text"
                                                                id="businessDescription"
                                                                name="businessDescription"
                                                                value={tabData.businessDescription}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter businessDescription"
                                                            />
                                                        </label>
                                                    </div>
                                                </div>

                                                <button className="tab-button" onClick={handleSaveButton}>Save </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* </MenuItem> */}


                            <MenuItem
                                component={<Link to="/home" className="link" />}
                                icon={<HomeIcon />}> Home </MenuItem>


                            <SubMenu label='Loom owner' component={<Link to='/loomowner' className="link" />}
                                icon={<ReceiptRoundedIcon />}>
                                <MenuItem icon={<DashboardIcon />} component={<Link to='/loomowner/dashboard' className="link" />}> Dashboard </MenuItem>
                                <MenuItem icon={<SettingsIcon />} component={<Link to='/loomowner/loomdetails' className="link" />}>Loom Details</MenuItem>
                                <MenuItem icon={<EventIcon />} component={<Link to='/loomowner/loombooking' className="link" />}> Loom Booking </MenuItem>

                                <MenuItem icon={<WorkIcon />} component={<Link to='/loomowner/jobworkenquires' className="link" />}> Job Work Enquiries </MenuItem>
                                <MenuItem icon={<NotificationsActiveIcon />} component={<Link to='/loomowner/liveorders' className="link" />}> Live Orders</MenuItem>
                                <MenuItem icon={<SearchIcon />} component={<Link to='/loomowner/getyarnrates' className="link" />}>Get Yarn Rates</MenuItem>
                                <MenuItem icon={<CalculateIcon />} component={<Link to='/loomowner/calculations' className="link" />}>Calculations</MenuItem>
                                <MenuItem icon={<DoneAllIcon />} component={<Link to='/loomowner/completedorders' className="link" />}>Completed Orders</MenuItem>

                            </SubMenu>
                            <SubMenu label='Traders' component={<Link to='/traders' className="link" />}
                                icon={<BarChartRoundedIcon />}>
                                <MenuItem icon={<DashboardIcon />} component={<Link to='/traders/dashboard' className="link" />}> Dashboard </MenuItem>
                                <MenuItem icon={<NotificationsActiveIcon />} component={<Link to='/traders/liveorders' className="link" />}>Live Orders</MenuItem>
                                <MenuItem icon={<ScheduleIcon />} component={<Link to='/traders/planlooms' className="link" />}> Plan Looms </MenuItem>
                                <MenuItem icon={<SearchIcon />} component={<Link to='/traders/getyarnrates' className="link" />}> Get Yarn Rates</MenuItem>
                                <MenuItem icon={<CalculateIcon />} component={<Link to='/traders/calculations' className="link" />}> Calculations </MenuItem>
                                <MenuItem icon={<ScheduleIcon />} component={<Link to='/traders/incompletetask' className="link" />}>Incomplete Task</MenuItem>
                                <MenuItem icon={<DoneAllIcon />} component={<Link to='/traders/completedorders' className="link" />}>Completed Orders</MenuItem>


                            </SubMenu>
                            <MenuItem icon={<LogoutRoundedIcon />} component={<Link to='/login' className="link" />}> Logout </MenuItem>

                        </Menu>
                    </Sidebar></div>

                <section className="sidebar-section">
                    <Navbar className="sidebar-nav"><h1>Welcome to Textile</h1></Navbar>
                    <LoomProvider>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/loomowner" element={<Loomowner />} />
                            <Route path="/loomowner/dashboard" element={<Loomdashboard />} />
                            <Route path="/loomowner/loomdetails" element={<Loomdetails />} />
                            <Route path="/loomowner/jobworkenquires" element={<Loomjobworkenquiry />} />
                            <Route path="/loomowner/liveorders" element={< Loomliveorders />} />
                            <Route path="/loomowner/loombooking" element={<Loombooking />} />
                            <Route path="/loomowner/completedorders" element={<Loomcompletedorders />} />
                            <Route path="/loomowner/getyarnrates" element={<Loomgetyarnrates />} />
                            <Route path="/loomowner/calculations" element={<Loomcalculations />} />

                            <Route path="/loomowner/liveorders/orderdetails/:orderNo" element={<Loomorderdetails />} />
                            <Route path="/traders" element={<Traders />} />
                            <Route path="/traders/dashboard" element={< Traderdashboard />} />
                            <Route path="/traders/liveorders" element={<Traderliveorders />} />
                            <Route path="/traders/planlooms" element={<Traderplanlooms />} />
                            <Route path="/traders/getyarnrates" element={<Tradergetyarnrates />} />
                            <Route path="/traders/calculations" element={<Tradercalculations />} />
                            <Route path="/traders/incompletetask" element={<Traderincompletetask />} />
                            <Route path="/traders/completedorders" element={<Tradercompletedorders />} />
                            <Route path="/traders/liveorders/orderdetails/:orderNo" element={<Traderorderdetails />} />



                        </Routes>
                    </LoomProvider>

                </section>
            </div ></>



    )
};
export default Mysidebar;











// import React, { useState } from "react";
// import { Routes, Route, Link } from 'react-router-dom';
// import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
// import './Sidebar.css';
// import { Navbar } from "react-bootstrap";
// import HomeIcon from '@mui/icons-material/Home';
// import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import SettingsIcon from '@mui/icons-material/Settings';
// import WorkIcon from '@mui/icons-material/Work';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import EventIcon from '@mui/icons-material/Event';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import SearchIcon from '@mui/icons-material/Search';
// import CalculateIcon from '@mui/icons-material/Calculate';
// import ScheduleIcon from '@mui/icons-material/Schedule';
// import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
// import Home from '../components/Home';
// import Loomowner from '../Loompages/Loomowner';
// import Loomdashboard from '../Loompages/Loomdashboard';
// import Loomdetails from '../Loompages/Loomdetails';
// // import other required components

// function Mysidebar() {
//     const { collapseSidebar } = useProSidebar();
//     const [showPersonalInfoTabs, setShowPersonalInfoTabs] = useState(false);

//     const handlePersonalInfoClick = () => {
//         // Toggle showing personal information tabs
//         setShowPersonalInfoTabs(!showPersonalInfoTabs);
//     };

//     const handleSavePersonalInfo = () => {
//         // Implement saving functionality here
//         // This function should save the user's personal information
//         // You can fetch the updated information from the tabs and send it to the server
//         console.log("Saving personal information...");
//     };

//     return (
//         <div className="sidebarbody">
//             <div className="mysidebar">
//                 <Sidebar className="sidebar">
//                     <Menu className="sidebarmenu">
//                         <MenuItem
//                             icon={<HomeIcon />}
//                             component={<Link to="/home" className="link" />}
//                         >
//                             Home
//                         </MenuItem>
//                         <SubMenu
//                             label='Loom owner'
//                             icon={<ReceiptRoundedIcon />}
//                         >
//                             <MenuItem
//                                 icon={<DashboardIcon />}
//                                 component={<Link to='/loomowner/dashboard' className="link" />}
//                             >
//                                 Dashboard
//                             </MenuItem>
//                             {/* Add other submenu items */}
//                         </SubMenu>
//                         {/* Add other menu items */}
//                         <MenuItem
//                             icon={<LogoutRoundedIcon />}
//                             component={<Link to='/login' className="link" />}
//                         >
//                             Logout
//                         </MenuItem>
//                     </Menu>
//                 </Sidebar>
//             </div>
//             <section className="sidebar-section">
//                 <Navbar className="sidebar-nav">
//                     <h2> Welcome to Textile </h2>
//                 </Navbar>
//                 <Routes>
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/loomowner" element={<Loomowner />} />
//                     <Route path="/loomowner/dashboard" element={<Loomdashboard />} />
//                     <Route path="/loomowner/loomdetails" element={<Loomdetails />} />
//                     {/* Add other routes */}
//                 </Routes>
//             </section>
//         </div>
//     );
// }

// export default Mysidebar;
