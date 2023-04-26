import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ICardProps } from './PokeCard';
import axios from 'axios';
import React, { useEffect } from 'react';



function PokeModal(props:ICardProps) {
    
    const [modal , setModal] = React.useState()

    useEffect(() => {
        axios
        .get(props.url)
        .then((response) => {
            setModal(response.data)
        })
        .catch((error) => {
            console.log(error)
        }
        )
    }, [])





  return (
    <div
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
    </div>
  );
}

export default PokeModal;