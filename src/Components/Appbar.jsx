import React from 'react'
import logo from "../assets/cabbon-logo.png"; // Import the image
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Appbar = ({ height, width }) => {

    const [backgroundImage, setBackgroundImage] = useState(
        "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R114668176&ga=GA1.1.1837137669.1726030558&semt=ais_keywords_boost"
    );

    const [show, setShow] = useState(false);
    const [qrshow, setQRShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const qrhandleClose = () => setQRShow(false);
    const qrhandleShow = () => setQRShow(true);


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert("File size must be less than 2MB.");
                return;
            }
            const imageUrl = URL.createObjectURL(file);
            setBackgroundImage(imageUrl);
        }
    };

    const triggerFileInput = () => {
        document.getElementById("imageInput").click();
    };

    return (
        <>
            <div
                className="appbar d-flex justify-content-between align-items-center bg-white"
                style={{
                    height: `${height * 0.1}px`,
                    width: `${width}px`,
                    boxShadow: "0px 0px 5px black",
                    position: 'fixed',
                    top: 0,
                    zIndex: 1000
                }}
            >
                <div className='d-flex justify-content-between align-items-center'>
                    <img
                        src={logo} // Use the imported image here
                        alt=""
                        style={{ height: "50px", paddingLeft: "10px" }} // Add height or width for proper scaling
                    />
                    <span
                        className="title"
                        style={{ paddingLeft: "0px", fontSize: "20px", fontWeight: "500" }}
                    >
                        Cabbon
                    </span>
                </div>
                <div className="appbarIcons d-flex column-gap-3 me-3">
                    <div
                        className="icons"
                        style={{ width: `30px`, height: `30px` }}
                        onClick={qrhandleShow}
                    >
                        <i className="fa-solid fa-qrcode" style={{ fontSize: "25px" }}></i>
                    </div>
                    <div
                        className="icons"
                        style={{ width: `30px`, height: `30px` }}
                        onClick={handleShow}
                    >
                        <i className="fa-regular fa-user" style={{ fontSize: "25px" }}></i>
                    </div>

                </div>
            </div>

            {/* Modal for Details */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                    <div
                        onClick={triggerFileInput}
                        style={{
                            height: "100px",
                            width: "100px",
                            backgroundColor: "white",
                            borderRadius: "10px",
                            border: "1px solid",
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <input
                        type="file"
                        accept="image/*"
                        id="imageInput"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                    <div className="d-flex mt-3">
                        <div>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    lineHeight: "2.45",
                                }}
                            >
                                <li>Name</li>
                                <li>UID</li>
                                <li>Mobile</li>
                                <li>Email</li>
                                <li>Place</li>
                                <li>Grade</li>
                                <li>Wage</li>
                                <li>Works</li>
                                <li>Earnings</li>
                            </ul>
                        </div>
                        <div className="ms-2">
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                <li>
                  <input
                    type="text"
                    style={{
                      borderRadius: "5px",
                      height: "35px",
                      width: `${width / 2 + 40}px`,
                      paddingLeft: "5px",
                      marginBottom: "10px",
                      border: "1px solid",
                    }}
                    placeholder="Name"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    style={{
                      borderRadius: "5px",
                      height: "35px",
                      width: `${width / 2 + 40}px`,
                      paddingLeft: "5px",
                      marginBottom: "10px",
                      border: "1px solid",
                    }}
                    placeholder="UID"
                    readOnly
                  />
                </li>
                <li>
                  <input
                    type="text"
                    style={{
                      borderRadius: "5px",
                      height: "35px",
                      width: `${width / 2 + 40}px`,
                      paddingLeft: "5px",
                      marginBottom: "10px",
                      border: "1px solid",
                    }}
                    placeholder="Mobile"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    style={{
                      borderRadius: "5px",
                      height: "35px",
                      width: `${width / 2 + 40}px`,
                      paddingLeft: "5px",
                      marginBottom: "10px",
                      border: "1px solid",
                    }}
                    placeholder="Email"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    style={{
                      borderRadius: "5px",
                      height: "35px",
                      width: `${width / 2 + 40}px`,
                      paddingLeft: "5px",
                      marginBottom: "10px",
                      border: "1px solid",
                    }}
                    placeholder="Place"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    style={{
                      borderRadius: "5px",
                      height: "35px",
                      width: `${width / 2 + 40}px`,
                      paddingLeft: "5px",
                      marginBottom: "10px",
                      border: "1px solid",
                    }}
                    placeholder="Grade"
                    readOnly
                  />
                </li>
               

                  
                <li>
                  <input
                    type="text"
                    style={{
                      borderRadius: "5px",
                      height: "35px",
                      width: `${width / 2 + 40}px`,
                      paddingLeft: "5px",
                      marginBottom: "10px",
                      border: "1px solid",
                    }}
                    placeholder="--"
                    readOnly
                  />
                </li>
                <li>
                  <input
                    type="text"
                    style={{
                      borderRadius: "5px",
                      height: "35px",
                      width: `${width / 2 + 40}px`,
                      paddingLeft: "5px",
                      marginBottom: "10px",
                      border: "1px solid",
                    }}
                    placeholder="--"
                    readOnly
                  />
                </li>
                <li>
                  <input
                    type="text"
                    style={{
                      borderRadius: "5px",
                      height: "35px",
                      width: `${width / 2 + 40}px`,
                      paddingLeft: "5px",
                      marginBottom: "10px",
                      border: "1px solid",
                    }}
                    placeholder="--"
                    readOnly
                  />
                </li>

              </ul>
            </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>


            <Modal
                show={qrshow}
                onHide={qrhandleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header >
                    <Modal.Title>QR Code</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD5+fn8/Pympqafn5/o6OgODg7b29stLS2AgICSkpJ9fX3R0dE+Pj7x8fEdHR1GRkabm5vW1tbHx8eNjY0nJyfMzMy7u7tQUFCqqqpAQEAJCQmIiIhra2v09PQWFhZfX1+0tLQzMzN2dnZMTEw3l43MAAAEuUlEQVR4nO2d63KiQBBGEdSoiBcu3l1N4r7/K27Vsll7Ip/0yIBgvvMzzExz0KowTdN6HiGEEEII6RqBM3Qhmg7uJYO+IwYJCmPEEIMCl8Hh5R30nBH7IIgRQwzyY3fBB+jyBn2HQZChEUMaOry8fRq6gIY5NHwQGjqBhjk0fBAa/uPNGmg4ujIMVYbVgusM36KhJekYGPrj2ZWVxnCc2gaPpKLScAhGQUbQ8Pu3qNxwZBt8SMO/0LAEGtKQhnehYQ4NS+i2oSb3WpuhJnhVw3UWFpKl1obbqUCcCTZMUfC1O8MgQx/C1NpwB4JjwykKngmRqobh98W/mFgb9q0NJyh4SEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGnbO8OWziV46nRQy3WgMA3POlYkqI7xBwWU6+rnPLQx28lNo0XMLDTpDVcUQDW+hYQ4NS6BhDg1pCKBhzk8zTEeWbGRxbDXD1cY2eGpv2Bvbsjo4MzysrKPLZVnJ7gQa5tDwQWjoBBrm0PBBaOiElho20XEAGjbRccBL4oEj4kg2hJB53FAOk4Mid8Fh1wgv8J0hr6KR1R94YlQDwRtB9WSm09Cw+9Cw+9Cw+9Cw+7TIUHfjZL3UHBo6vDlT3bXpdk+zSGMIi2Ck4RwN0mHU0xgxqu0PXRou3BnKhPtrGj7w3IKGNKQhDWlIQxpi9jgbqTGUNcKnaoYVa4QPsejM+y4OrI47RS/fUHQFNlLpv8Ts+CwObDXLGu2Cq3aNmIsjsJIdMpALq2YcNV8NSG21+thQ1dtEMrk9IRrSkIY0pCENaVi34eHlDXtPNTzNizkZ9QHi7yOVoZnzhgeq5aNVM5LteVHEeSu3bhNxYJkExUu1lGgJPuil3E/IVy9n1rXvzwUbys+Qhm2Ghjk0bDM0zKFhm6ntP35dJZ7WMx75DFV3bXXVCKumyB4QhuH+eK0wjuVbkdJwddTUCNdV563bW8gmIoYh3FbBliCN/7Kc/e7JMJzenGiZYeNvI9Awh4Y0FNDQCTS8hYY/0fCClmq8p4IPOyQgw9H7dcpqmkT/Gck0bghWXXw03hcDzVgvgKEvR032yy/2v+RN9RCtK4ss7hjW1NtEckKGBrI0x9gf2tO44dzeUFWQBaFhCTS8hYY5NLSAhiXQ8JYfYCjvZOENtjTc12Xoro+w0fzXF02FJ3KpYSwDyt+iKz6Pb2cFb+0a6QWtesMymoEYySc6EyNGK/t5m4Zof2io05CGNKQhDWlIw24bJq9iGETFJDt012YYrpbFzJQZ4QYMT8tZIftPWdMMDS/r4gu0htuixg3n554CaBgiEUjzhqp3SLGhdT03DWlIQxrSkIY0fEI20cgIQy7SUGYTM3eG3joLC8lkftfe0C9e9U6MYV8ckInf+fGaNb7IGUpDLwDIMQ/sntCyMIYxRf75ub8z00RXQRrm0LAEGtKwEjTMoWEJNGydYTS0JFUZxnPbdWU9rI8GRQ/0xXizRs6GhgfrVTNxislvdF7G96SdleyQup5bVISGFtDwFho6gYYW0PAWGjqhpYZP7TgAgRlhyJ1flhuUd+9V9vhNZNeIamsZGeEPVXAkqMzQ2qdxm14KCxJCCCGEkJbyB6Dh47qElMQGAAAAAElFTkSuQmCC" alt="" />
                    <h5><span>UID : </span>Name</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={qrhandleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Appbar