import { Search } from "lucide-react";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';


const BcTodayList = ({ height, width }) => {
  const [deleteshow, setDeleteShow] = useState(false);
  const [show, setShow] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(
    "https://img.freepik.com/free-photo/chef-with-his-arms-crossed-white-background_1368-2792.jpg?uid=R114668176&ga=GA1.1.1837137669.1726030558&semt=ais_hybrid"
  );

  const deletehandleClose = () => setDeleteShow(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


     const navigate = useNavigate()
  
      // Navigate back to the previous page
      const handleBackClick = () => {
          navigate(-1);
      };


  const array = Array.from({ length: 11 }, (_, i) => i);





  return (
    <>
    
      <div
        className="home d-flex flex-column"
        style={{
          width: `${width}px`,
          marginTop: `${height * 0.1 }px`,
          padding: "10px 20px",
        }}
      >
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-3 mt-2">
       <div className="d-flex">
            <ChevronLeft onClick={handleBackClick} />
              <h5>Boys</h5>
       </div>
          <div className="position-relative">
            <input
              type="text"
              placeholder="Search"
              style={{
                height: "35px",
                width: `${width / 2 + 40}px`,
                borderRadius: "5px",
                border: "1px solid",
                paddingLeft: "10px",
                paddingRight: "35px",
              }}
            />
            <Search
              className="position-absolute"
              style={{
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "gray",
              }}
            />
          </div>
        </div>

        {/* Green Divs Section */}
        <div
          className="mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            columnGap: "10px",
            rowGap: "10px",
            textAlign: "center",
          }}
        >
          {array.map((item, index) => (
            <div
              className="p-1 border border-secondary rounded"
              style={{
                height: "200px",
                width: `${width / 2 - 25}px`,
              }}
              key={index}
              onClick={handleShow}
            >
              <div
                style={{
                  width: "100%",
                  height: "80%",
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                }}

              ></div>
              <h5 className="mt-2">Name</h5>
            </div>
          ))}
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
          <Modal.Title>Boys Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
          <div
           
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "green",
              borderRadius: "10px",
              border: "1px solid",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
       
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
                <li>Entry</li>
                <li>Fine</li>
              
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
                  lineHeight: "2.45",
                }}
              >
                <li>: Shahir</li>
                <li>: Shahirfayis</li>
                <li>: 08:30 am</li>
                <li>: Costume</li>
               
              </ul>
            </div>
          </div>
        </Modal.Body>
       
      </Modal>

      {/* Modal for Delete */}
      <Modal
        show={deleteshow}
        onHide={deletehandleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete name record?
        </Modal.Body>
        <Modal.Footer>

          <Button variant="danger" >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BcTodayList;
