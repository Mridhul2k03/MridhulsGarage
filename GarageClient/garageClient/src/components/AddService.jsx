import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddService() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <div>
        <Button onClick={handleShow} variant='outline-success'>Add Service
        <Link className='btn btn-outline-dark modal show' ></Link>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingName" label="Title" className="mb-3">
        <Form.Control type="text" placeholder="Title" />
      </FloatingLabel>
        <FloatingLabel controlId="floatingPhone" label="Content" className="mb-3">
        <Form.Control type="text" placeholder="Content" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingVehicle" label="Amount" className='mb-3'>
        <Form.Control type="text" placeholder="Amount" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddService
