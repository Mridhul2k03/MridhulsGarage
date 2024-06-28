import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddCustomer from '../components/AddCustomer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getCustomers } from '../ApiServices/AllAPi';


function Customer() {

  const [customers,setCustomers] =useState([])

  useEffect(() => {
    getAllCustomers()
    
  }, [])

  const getAllCustomers = () => {
    getCustomers().then(res=>{
      setCustomers(res.data)
    })
  }
    console.log(customers)

  return (
    <div className='mt-3 container'>
      <Row className=''>
        <Col sm={2} md={3}>
          <AddCustomer/>
        </Col>
        <Col sm={10} md={9}>
        <div className="row">
          
        {
          customers?.length > 0? 
          customers.map(i=>(
            <>
            <Card style={{ width: '18rem' }} className='rounded-0 m-3'>
            <Card.Img variant="top" src={i.image} className='rounded-0' />
            <Card.Body>
            <Card.Title>{i.vehcle_no}</Card.Title>
            <Card.Text>
            <h5>Customer : {i.name} </h5>
            <h5>Phone : {i.phone} </h5>
            </Card.Text>
            <td><Link className='btn btn-outline-primary' to={`/service/${i.id}`} >Services</Link></td>
            </Card.Body>
            </Card>
            </>
            
          ))
          :<h1>No customers</h1>
        }
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default Customer
