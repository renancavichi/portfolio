import { useState } from 'react'
import FilhoContexto from "./FilhoContexto";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ExemploContexto = () => { 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
        <Button variant="success" onClick={handleShow}>Open Modal</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Preencha os dados para logar:</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
        <FilhoContexto />
      </>
    );
  }
  
export default ExemploContexto;