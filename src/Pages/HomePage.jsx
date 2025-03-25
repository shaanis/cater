import React from 'react'





const HomePage = ({ height, width }) => {

    return (
        <>
            <div className='home d-flex flex-column ' style={{ width: `${width}px`, height: `${height}px`, paddingLeft: "10px", paddingRight: "10px" }}>
                <div style={{ marginTop: `${height * 0.1 + 15}px`, }}>
                    {/* <img src={profile} alt="" width={"50px"} height={"0px"} /> */}
                    <span style={{ paddingLeft: "10px", fontSize: "18px" }}>Welcome Shahir ,</span>

                </div>
                <div className='today ' style={{
                    height: `${height * 0.18}px`, margin: "10px", borderRadius: "10px", border: "1px solid", padding: "10px", backgroundImage: `url(https://i.postimg.cc/j2Pq1hsW/today-bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "right"
                }}>
                    <div className=' d-flex justify-content-between'> <span style={{ fontSize: "18px", fontWeight: "500" }}>TODAY</span>
                        <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "400" }}>08:30 am</span>
                    </div>
                    <div className='d-flex justify-content-center mt-4'><span style={{ fontSize: "20px", fontWeight: "500" }}>Qatar auditoruim</span></div>
                </div>
                <span style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "500" }}>Overview</span>
                <div className='service ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: "10px", borderRadius: "10px", border: "1px solid", padding: "10px", backgroundImage: `url(https://i.postimg.cc/pLqW3rtB/service-bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "right" }}>
                    <div className=''> <span style={{ fontSize: "18px", fontWeight: "500" }}>Service</span>
                        <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}></span>
                    </div>
                    <div className='d-flex justify-content-start mt-2'><span style={{ fontSize: "20px", fontWeight: "500" }}>25</span></div>
                </div>

                <div className='Payment ' style={{ height: `${height * 0.2}px`, margin: "10px", marginTop: "10px", borderRadius: "10px", border: "1px solid", padding: "10px", backgroundImage: `url(https://i.postimg.cc/gJBGjT0L/paymentbg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "right" }}>
                    <div className=' d-flex justify-content-between'> <span style={{ fontSize: "18px", fontWeight: "500" }}>Earnings</span>
                        <span style={{ color: "rgba(50, 168, 82)", fontSize: "16px", fontWeight: "500" }}></span>
                    </div>
                    <div className='d-flex justify-content-start mt-2'><span style={{ fontSize: "20px", fontWeight: "500" }}>2500</span></div>
                </div>

            </div>
        </>

    )
}

export default HomePage