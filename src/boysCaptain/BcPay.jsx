import React from 'react'
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BcPay = ({ height, width }) => {
    const navigate = useNavigate()
    
        // Navigate back to the previous page
        const handleBackClick = () => {
            navigate(-1);
        };
    const paymentDetails =()=>{
        navigate('/boyscaptain/paymentdetails')
    }
  return (
   <> 
    <div className='home d-flex flex-column  ' style={{ width: `${width}px`, marginTop: `${height * 0.1 }px`, padding: "10px 20px" }}>
                <div className='d-flex mb-3 mt-2'>
                    <ChevronLeft onClick={handleBackClick} />
                    <h5>Pay</h5></div>

                <div className='list d-flex justify-content-between align-items-center mb-2 ' style={{ height: `${height * 0.08}px`, width: `${width - 40}px`, border: "1px solid", borderRadius: "10px", fontSize: "15px", padding: "0px 20px" }}  onClick={paymentDetails}>
                    <span>2</span>
                    <span>Name</span>
                    <span>work</span>
                </div>



            </div>
   </>
  )
}

export default BcPay