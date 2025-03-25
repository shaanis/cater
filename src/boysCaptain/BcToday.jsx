import React from 'react'
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';



const BcToday = ({ height, width }) => {

    let Array = []
    for (let a = 0; a <= 10; a++) {
        Array[a] = a
    }

    const navigate = useNavigate()

    // Navigate back to the previous page
    const handleBackClick = () => {
        navigate(-1);
    };

    const handleNavigation = (item) => {
        // Navigate to BcTodayList page and pass data (e.g., item details)
        navigate('/boyscaptain/eventdetails', { state: { item } });
    };


   
    return (
        <>
         
            <div className='home d-flex flex-column  ' style={{ width: `${width}px`, marginTop: `${height * 0.1 }px`, padding: "10px 20px" }}>
                <div className='d-flex mb-3 mt-2'>
                    <ChevronLeft onClick={handleBackClick} />
                    <h5>Events</h5></div>

                <div className='list d-flex justify-content-between align-items-center mb-2 ' style={{ height: `${height * 0.08}px`, width: `${width - 40}px`, border: "1px solid", borderRadius: "10px", fontSize: "15px", padding: "0px 20px" }}  onClick={() => handleNavigation()}>
                    <span>1</span>
                    <span>10-02-2025</span>
                    <span>Qatar Auditoruim</span>
                    <Badge bg="dark">10</Badge>
                </div>



            </div>
        </>
    )
}

export default BcToday