import React, { useState } from 'react';
import styled from 'styled-components';
import Home from '../pages/Home';
import Loomowner from '../pages/Loomowner';
import Traders from '../pages/Traders';
import logo from './textile.jpg';
import './Sidebar.css'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarMenuItem,
    CDBSidebarHeader,
    CDBSidebarMenu
    
} from 'cdbreact';


import 'bootstrap/dist/css/bootstrap.min.css';



import { Link } from "react-router-dom";

import { Divider } from '@mui/material';




const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: hsl(218, 41%, 15%);
  border-right: 1px solid #ddd;
  z-index: 100;
`;

const StyledDivider = styled(Divider)`
  && {
   
    margin: 0; /* Remove the default margin */
  }
`;


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };


    const handleToggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle isOpen state
    };

    const renderContent = () => {
        switch (activeItem) {
            case 'home':
                return <Home />;
            case 'loomowner':
                return <Loomowner />;
            case 'traders':
                return <Traders />;
            default:
                return null;
        }
    };


    return (
        <div>
            <SidebarContainer>
                <CDBSidebar textColor="#54abe7" backgroundColor="hsl(218, 41%, 15%)">
                    <CDBSidebarHeader style={{ color: '#fff' }} prefix={<i className="fa fa-bars fa-large" onClick={handleToggleSidebar}></i>}>
                        <img src={logo} alt="Your logo" width="150" height="100" />
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu className='sidebar-menu'>
                            <Link to="/home" className={activeItem === 'home' ? 'activeClicked' : ''} onClick={() => handleItemClick('home')}>
                                <CDBSidebarMenuItem className='menu-item' icon="th-large">
                                    Home
                                </CDBSidebarMenuItem>
                            </Link>
                            <Link to="/loomowner" className={activeItem === 'loomowner' ? 'activeClicked' : ''} onClick={() => handleItemClick('loomowner')}>
                                <CDBSidebarMenuItem className='menu-item' icon="th-large">
                                    Loom Owner
                                </CDBSidebarMenuItem>
                            </Link>
                            <Link to="/traders" className={activeItem === 'traders' ? 'activeClicked' : ''} onClick={() => handleItemClick('traders')}>
                                <CDBSidebarMenuItem className='menu-item' icon="th-large">
                                    Traders
                                </CDBSidebarMenuItem>
                            </Link>
                            
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </SidebarContainer>
            <StyledDivider>
                {renderContent()}
            </StyledDivider>
                
            
            
        </div>
    );
};

export default Sidebar;























// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import logo from './textile.jpg';
// import './Sidebar.css'
// import {
//     CDBSidebar,
//     CDBSidebarContent,
//     CDBSidebarMenuItem,
//     CDBSidebarHeader,
//     CDBSidebarMenu
// } from 'cdbreact';

// const SidebarContainer = styled.div`
//   position: fixed;
//   top: 0;
  
//   width: 200px;
//   height: 100vh;
//   background-color: hsl(218, 41%, 15%);
//   border-right: 1px solid #ddd;
//   z-index: 100;
//   transition: left 0.3s ease-in-out; /* Add transition for smooth animation */
// `;

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//     const [activeItem, setActiveItem] = useState('');

//     const handleItemClick = (itemName) => {
//         setActiveItem(itemName);
//         toggleSidebar(); // Close sidebar when item is clicked
//     };

//     return (
//         <SidebarContainer isOpen={isOpen}>
//             <CDBSidebar textColor="#54abe7" backgroundColor="hsl(218, 41%, 15%)">
//                 <CDBSidebarHeader style={{ color: '#fff' }}>
//                     <img src={logo} alt="Your logo" width="150" height="100" />
//                 </CDBSidebarHeader>

//                 <CDBSidebarContent className="sidebar-content">
//                     <CDBSidebarMenu className='sidebar-menu'>
//                         <Link to="/home" onClick={() => handleItemClick('home')} className={activeItem === 'home' ? 'activeClicked' : ''}>
//                             <CDBSidebarMenuItem className='menu-item' icon="th-large">
//                                 Home
//                             </CDBSidebarMenuItem>
//                         </Link>
//                         <Link to="/loomowner" onClick={() => handleItemClick('loomowner')} className={activeItem === 'loomowner' ? 'activeClicked' : ''}>
//                             <CDBSidebarMenuItem className='menu-item' icon="th-large">
//                                 Loom Owner
//                             </CDBSidebarMenuItem>
//                         </Link>
//                         <Link to="/traders" onClick={() => handleItemClick('traders')} className={activeItem === 'traders' ? 'activeClicked' : ''}>
//                             <CDBSidebarMenuItem className='menu-item' icon="th-large">
//                                 Traders
//                             </CDBSidebarMenuItem>
//                         </Link>
//                     </CDBSidebarMenu>
//                 </CDBSidebarContent>
//             </CDBSidebar>
//         </SidebarContainer>
//     );
// };

// export default Sidebar;
