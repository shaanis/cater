import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Appbar from './Components/Appbar';
import BottomNavigation from './Components/Bottomnavigation';
import ServicePage from './Pages/ServicePage';
import PaymentPage from './Pages/PaymentPage';

const Boysmodule = ({ height, width }) => {
    return (
        <>
            {/* Appbar and Bottom Navigation */}
            <Appbar height={height} width={width} />
            <BottomNavigation height={height} width={width} />
            
            {/* Define Routes */}
            <Routes>
                {/* The parent route */}
                <Route path="/" element={<HomePage height={height} width={width} />} />
                
                {/* Nested routes */}
                <Route path="service" element={<ServicePage height={height} width={width} />} />
                <Route path="payment" element={<PaymentPage height={height} width={width} />} />
            </Routes>
        </>
    );
};

export default Boysmodule;
