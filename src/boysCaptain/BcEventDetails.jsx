import React from 'react'

import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import boysbg from '../assets/boysbg.png'

const BcEventDetails = ({ height, width }) => {
     const navigate = useNavigate()
      
          // Navigate back to the previous page
          const handleBackClick = () => {
              navigate(-1);
          };
          const handleNavigation = (item) => {
            // Navigate to BcTodayList page and pass data (e.g., item details)
            navigate('/boyscaptain/eventboys', { state: { item } });
        };
          const handlefine = (item) => {
            // Navigate to BcTodayList page and pass data (e.g., item details)
            navigate('/boyscaptain/eventfine', { state: { item } });
        };
    
  return (
   <>
      
        <div className='home d-flex flex-column  ' style={{ width: `${width}px`,marginTop: `${height * 0.1 }px`, padding: "10px 20px" }}>
                <div className='d-flex mb-3 mt-2'>
                    <ChevronLeft onClick={handleBackClick} />
                    <h5>Event Details</h5></div>

                <div className='list d-flex justify-content-center align-items-center mb-2 ' style={{ height: `${height * 0.15}px`, width: `${width - 40}px`, border: "1px solid", borderRadius: "10px", fontSize: "15px", padding: "0px 20px" ,backgroundImage: `url(${boysbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "center"}}  onClick={() => handleNavigation()}>
                <h4>Boys-</h4>
                <h4>25  </h4>
                   
                </div>
                <div className='list d-flex justify-content-center align-items-center mb-2 ' style={{ height: `${height * 0.15}px`, width: `${width - 40}px`, border: "1px solid", borderRadius: "10px", fontSize: "15px", padding: "0px 20px",backgroundImage: `url("https://img.freepik.com/premium-photo/fine-wooded-seal-stamp_698953-6847.jpg?uid=R114668176&ga=GA1.1.1837137669.1726030558&semt=ais_keywords_boost")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: "right" }}  onClick={() => handlefine()}>
                <h4>Fine-</h4>
                <h4>25  </h4>
                   
                </div>
               



            </div>
   </>
  )
}

export default BcEventDetails