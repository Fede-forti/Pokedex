import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import React, { useEffect } from 'react';

interface IPokeModalProps {
    name: string;
}

function PokeModal(props:IPokeModalProps) {
    
    const [modal , setModal] = React.useState()

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
        .then((response) => {
            setModal(response.data)
        })
        .catch((error) => {
            console.log(error)
        }
        )
    }, [modal])



  return (
    <Modal 
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.name.toUpperCase()}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p></p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Chiudi</Button>
          <Button variant="primary">Aggiungi alla squadra</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default PokeModal;