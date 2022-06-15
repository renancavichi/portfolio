import { useState, useEffect } from 'react'
import FilhoContexto from "./FilhoContexto";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import headConfig from '../helpers/headConfig';
import useTheme from '../hook/useTheme';

const ExemploContexto = () => { 
  
  const mode = useTheme()
  const [show, setShow] = useState(false);

  useEffect(() => {
    headConfig({
      title: 'Home - Exemplo Contexto',
      description: 'Novo description exemplo contexto',
      keywords: 'Context, Hook, useContext',
      canonical: 'https://renancavichi.com/'
    });
  }, []) 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
        <br/><p>Sample bootstrap Modal:</p>
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
        <h3>Theme: {mode}</h3>
        <FilhoContexto />
      </>
    );
  }
  
export default ExemploContexto;