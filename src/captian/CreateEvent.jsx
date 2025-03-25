import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";



const CreateEvent = ({ height, width }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  

  return (

    <>

      <div className='home d-flex flex-column ' style={{ width: `${width}px`, height: `${height}px`, paddingLeft: "10px", paddingRight: "10px" }}>
        <div style={{ marginTop: `${height * 0.1 + 15}px`, }}>


        </div>
        <div onClick={handleShow} className='d-flex justify-content-center align-items-center' style={{
          height: `${height * 0.18}px`, margin: "10px", borderRadius: "10px", border: "1px solid", cursor: "pointer"
        }}>
          <div className="d-flex gap-3 justify-content-between align-items-center">
            <span className="fw-semibold fs-5">Create a Event</span>
            <PlusCircle className="text-success" size={30} />
          </div>
        </div>
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

      <Modal show={show} centered>
        <Modal.Header >
          <Modal.Title>Create a Event</Modal.Title>
          <span className="ms-auto text-muted">10-02-2025</span>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className="form-control mb-3 border border-1" placeholder="Place" />
          <input type="text" className="form-control mb-3 border border-1" placeholder="Time (breakfast/noon/dinner)" />
          <input type="text" className="form-control mb-3 border border-1" placeholder="Fine time" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Link to={'/captain/view-auditorium'} className="btn btn-primary" variant="primary">Add</Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateEvent;
