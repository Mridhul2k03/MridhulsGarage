import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCustomer } from '../ApiServices/AllAPi';
import { toast } from 'react-toastify';

function AddCustomer() {
  const [customerData,setCustomer] = useState({
    name:'',phone:0,vehcle_no:'',image:''
  })
  const getSubmit=()=>{
    console.log(customerData);
    const {name,phone,vehcle_no,image}=customerData
    if(!name || !phone || !vehcle_no || !image){
      alert('All fields are mandatory')
    }
    else{
      const formData = new FormData();
      formData.append('name',customerData.name);
      formData.append('phone',customerData.phone);
      formData.append('vehcle_no',customerData.vehcle_no);
      formData.append('image',customerData.image);

      const header = {
        'Content-Type': 'multipart/form-data'
      }
      addCustomer(header,formData).then(res=>{
        console.log(res);
        if(res.status == 201){
          toast.success('Customer added successfully')
          handleClose()
          formData.reset()
        }
        else{
          toast.error('Something went wrong')
        }
      })
    }
  }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(customerData);

  return (
    <div>
        <Button onClick={handleShow} variant='outline-success'>Add Customer
        <Link className='btn btn-outline-dark modal show' ></Link>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
        <Form.Control onChange={(e)=>{setCustomer({...customerData,name:e.target.value})}} type="text" placeholder="Your name" />
      </FloatingLabel>
        <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
        <Form.Control onChange={(e)=>{setCustomer({...customerData,phone:e.target.value})}} type="number" placeholder="Phone number" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingVehicle" label="Vehicle number" className='mb-3'>
        <Form.Control onChange={(e)=>{setCustomer({...customerData,vehcle_no:e.target.value})}} type="text" placeholder="Vehicle no" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingImage" label="Image" className='mb-3'>
        <Form.Control onChange={(e)=>{setCustomer({...customerData,image:e.target.files[0]})}} type="file" placeholder="" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={getSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddCustomer
