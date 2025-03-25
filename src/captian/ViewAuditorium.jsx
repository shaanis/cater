import { PlusCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const ViewAuditorium = ({height,width}) => {
  return (
    <>
         <div className='home d-flex flex-column ' style={{ width: `${width}px`, height: `${height}px`, paddingLeft: "10px", paddingRight: "10px" }}>
        <div style={{ marginTop: `${height * 0.1 + 15}px`, }}>


        </div>
        <Link to={'/captain/auditorium'} className='text-dark'  style={{ textDecoration:'none',
          height: `${height * 0.18}px`, margin: "10px", borderRadius: "10px", border: "1px solid", cursor: "pointer"
        }}>
          <div className="d-flex gap-3 justify-content-between p-3 fs-5">
            <p>Today</p>
            <p className='text-success'>08:30 am</p>
          </div>
          <p style={{fontWeight:'500'}} className='ps-3 fs-5'>Auditorium,place</p>
        </Link>
        <span style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "500" }}>Overview</span>
        <div className='service ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: "10px", borderRadius: "10px", border: "1px solid", padding: "10px", backgroundImage: `url(https://i.postimg.cc/pLqW3rtB/service-bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "right" }}>
          <div className=''> <span style={{ fontSize: "18px", fontWeight: "500" }}>Service</span>
            <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}></span>
          </div>
          <div className='d-flex justify-content-start mt-2'><span style={{ fontSize: "20px", fontWeight: "500" }}>25</span></div>
        </div>

        <div  className='Payment ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: "10px", borderRadius: "10px", border: "1px solid", padding: "10px", backgroundImage: `url(https://i.postimg.cc/gJBGjT0L/paymentbg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "right" }}>
          <div className=' d-flex justify-content-between'> <span style={{ fontSize: "18px", fontWeight: "500" }}>Earnings</span>
            <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}></span>
          </div>
          <div className='d-flex justify-content-start mt-2'><span style={{ fontSize: "20px", fontWeight: "500" }}>2500</span></div>
        </div>

      </div>
    </>
  )
}

export default ViewAuditorium