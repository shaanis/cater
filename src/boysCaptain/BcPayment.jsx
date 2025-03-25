import React from 'react'




const BcPayment = ({ height, width }) => {

  return (
    <div className='home d-flex flex-column ' style={{ width: `${width}px`, marginTop: `${height * 0.1 + 10}px`, padding: "10px 20px" }}>
      <h5>Payments</h5>
      <div className='list d-flex flex-column justify-content-between align-items-center mb-2 ' style={{ height: `${height * 0.25}px`, width: `${width - 40}px`, border: "1px solid", borderRadius: "10px", fontSize: "15px", padding: "0px 20px", backgroundImage: `url(https://i.postimg.cc/1t4ZkrKm/pendingbg.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: "center" }} >
        <div className='d-flex  justify-content-between mt-2' style={{ listStyle: 'none', padding: 0, margin: 0, width: `${width - 60}px` }}>
          <li>From : <span>01-02-2025</span></li>
          <li>To : <span>01-02-2025</span></li>
        </div>
        <div className=' pb-1 d-flex column-gap-1' style={{ height: `${height * 0.18}px`, width: `${width - 60}px` }}>
          <div className=' d-flex column-gap-1' style={{ height: `${height * 0.15}px`, width: `${(width - 60) / 2}px`, paddingLeft: "10px" }} >

            <div style={{ height: `${height * 0.15}px`, width: `${((width - 60) / 2) / 2}px` }} >
              <div className='keys'>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: "0px" }}>
                  <li>Events</li>
                  <li>Boys</li>
                  <li>Fine</li>
                  <li>Expense</li>
                  <li>Other</li>
                </ul>
              </div>

            </div>
            <div style={{ height: `${height * 0.15}px`, width: `${((width - 60) / 2) / 2}px` }} >
              <ul style={{ listStyle: 'none', padding: 0, marginTop: "5px" }}>
                <li>: 8</li>
                <li>: 8</li>
                <li>: 0</li>
                <li>: 0</li>
                <li>: 0</li>
              </ul>
            </div>


          </div>
          <div className=' d-flex flex-column  p-2' style={{ height: `${height * 0.15}px`, width: `${(width - 60) / 2}px` }} >
            <div className='border rounded border-secondary'>
              <h4 style={{ textAlign: "center", marginTop: "15px" }}>TOTAL</h4>
              <h4 style={{ textAlign: "center", marginTop: "5px" }}>2500</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='list d-flex flex-column justify-content-between align-items-center mb-2 ' style={{ height: `${height * 0.25}px`, width: `${width - 40}px`, border: "1px solid", borderRadius: "10px", fontSize: "15px", padding: "0px 20px", backgroundImage: `url(https://i.postimg.cc/wTD349vW/paidbg.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: "center" }} >
        <div className='d-flex  justify-content-between mt-2' style={{ listStyle: 'none', padding: 0, margin: 0, width: `${width - 60}px` }}>
          <li>From : <span>01-02-2025</span></li>
          <li>To : <span>01-02-2025</span></li>
        </div>
        <div className=' pb-1 d-flex column-gap-1' style={{ height: `${height * 0.18}px`, width: `${width - 60}px` }}>
          <div className=' d-flex column-gap-1' style={{ height: `${height * 0.15}px`, width: `${(width - 60) / 2}px`, paddingLeft: "10px" }} >

            <div style={{ height: `${height * 0.15}px`, width: `${((width - 60) / 2) / 2}px` }} >
              <div className='keys'>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: "0px" }}>
                  <li>Events</li>
                  <li>Boys</li>
                  <li>Fine</li>
                  <li>Expense</li>
                  <li>Other</li>
                </ul>
              </div>

            </div>
            <div style={{ height: `${height * 0.15}px`, width: `${((width - 60) / 2) / 2}px` }} >
              <ul style={{ listStyle: 'none', padding: 0, marginTop: "5px" }}>
                <li>: 8</li>
                <li>: 8</li>
                <li>: 0</li>
                <li>: 0</li>
                <li>: 0</li>
              </ul>
            </div>


          </div>
          <div className=' d-flex flex-column  p-2' style={{ height: `${height * 0.15}px`, width: `${(width - 60) / 2}px` }} >
            <div className='border rounded border-secondary'>
              <h4 style={{ textAlign: "center", marginTop: "15px" }}>TOTAL</h4>
              <h4 style={{ textAlign: "center", marginTop: "5px" }}>2500</h4>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default BcPayment  