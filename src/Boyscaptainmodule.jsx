import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BcAppbar from './boysCaptain/BcAppbar';
import BcBotttom from './boysCaptain/BcBottom';
import BcHome from './boysCaptain/BcHome';
import BcBoys from './boysCaptain/BcBoys';
import BcPayment from './boysCaptain/BcPayment';
import BcToday from './boysCaptain/BcToday';
import BcEventDetails from './boysCaptain/BcEventDetails';
import BcFine from './boysCaptain/BcFine';
import BcTodayList from './boysCaptain/BcTodayList';
import BcPay from './boysCaptain/BcPay';
import Bcpaymentdetails from './boysCaptain/Bcpaymentdetails';


const Boyscaptainmodule = ({ height, width }) => {


  return (
    <>
      {/* Appbar */}
      <BcAppbar height={height} width={width} />

      {/* Conditionally render BcBotttom */}
      <BcBotttom height={height} width={width} />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<BcHome height={height} width={width} />} />
        <Route path="boys" element={<BcBoys height={height} width={width} />} />
        <Route path="payment" element={<BcPayment height={height} width={width} />} />
           {/* events */}
        <Route path="events" element={<BcToday height={height} width={width} />} />
        {/* eventDetails */}
         <Route path="eventDetails" element={<BcEventDetails height={height} width={width} />} />
         {/* eventboys */}
          <Route path="eventboys" element={<BcTodayList height={height} width={width} />} />
          {/* eventfine */}
          <Route path="eventfine" element={<BcFine height={height} width={width} />} />
          {/* pay */}
          <Route path="pay" element={<BcPay height={height} width={width} />} />
          {/* paymentdetails */}
          <Route path="paymentdetails" element={<Bcpaymentdetails height={height} width={width} />} />
          
     

      </Routes>
    </>
  );
};

export default Boyscaptainmodule;
