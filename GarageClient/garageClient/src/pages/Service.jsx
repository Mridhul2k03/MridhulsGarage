import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AddService from '../components/AddService'
import { useParams } from 'react-router-dom'
import { useEffect ,useState } from 'react'
import { listServices } from '../ApiServices/AllAPi'

function Service() {
  const {id}=useParams()

  const [serviceData,setService]=useState([])

  const [totalAmount,setAmount]=useState(0)

  useEffect(() => {
    getServices()
  }, [])

  const getServices = () => {
    listServices(id).then(res=>{
      console.log(res.data.Services);
      setService(res.data.Services)
      setAmount(res.data.tottal_amount)
    })
    
  }

  return (
    <>
    <div className='mt-3 container'>
      <Row className=''>
        <Col sm={2} md={4}>
          <AddService id={id} />
        </Col>
        <Col sm={10} md={8}>
        <div className='container mt-4'>
      <table className='table table-bordered table-striped hover shadow'>
            <thead>
              <tr>
                <th>title</th>
                <th>content</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                serviceData.length > 0? 
                serviceData.map(i=>(
                  <tr>
                    <td>{i.title}</td>
                    <td>{i.content}</td>
                    <td>{i.amount}</td>
                    {/* <td><Link className='btn btn-outline-primary' to={'/service'} >View Services</Link></td> */}
                  </tr>
                )):
                <h1>No Data</h1>
              }
            </tbody>
          </table>
      </div>
      <div className='container text-center'>
        <h2>Total Amount :{totalAmount}</h2>
      </div>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Service
