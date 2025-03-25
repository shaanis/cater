import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavigation = ({ height, width }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location to highlight the active tab

  const tabs = [
    { id: 'boyshome', label: 'Home', icon: 'fa-solid fa-house', route: '/boys' },
    { id: 'boysservice', label: 'Service', icon: 'fa-solid fa-bell-concierge', route: '/boys/service' },
    { id: 'boyspayment', label: 'Payment', icon: 'fa-solid fa-credit-card', route: '/boys/payment' },
  ];

  // Highlight the tab based on the current route
  const getActiveTab = () => {
    const currentRoute = location.pathname;
    const activeTab = tabs.find((tab) => currentRoute.startsWith(tab.route));
    return activeTab ? activeTab.id : 'boyshome'; // Default to 'boyshome' if no match
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  const handleTabClick = (tabId, route) => {
    setActiveTab(tabId); // Update active tab state
    navigate(route); // Navigate to the clicked tab
  };

  return (
    <div
      className="bottombarIcons d-flex justify-content-evenly align-items-center"
      style={{
        width: `${width}px`,
        height: `${height * 0.1}px`,
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#fff',
        boxShadow: '0px 0px 5px black',
        zIndex: 1000,
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="icons d-flex flex-column justify-content-center align-items-center"
          style={{
            width: '30px',
            height: '50px',
            color: activeTab === tab.id ? 'black' : 'grey', // Highlight active tab
            cursor: 'pointer',
          }}
          onClick={() => handleTabClick(tab.id, tab.route)}
        >
          <i className={tab.icon} style={{ fontSize: '25px' }}></i>
          <span style={{ fontSize: '12px' }}>{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
