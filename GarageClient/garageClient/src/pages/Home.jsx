import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCustomers } from '../ApiServices/AllAPi'

function Home() {
  const [customer,setCustomer] = useState()


  useEffect(() => {
    getCustomerList()
  }, [])

   const getCustomerList=()=>{
    const result=getCustomers().then(res=>{
      console.log(res.data)

      const currentDate=new Date()
      const date=currentDate.getUTCDate()
      const month=currentDate.getUTCMonth()+1
      const year=currentDate.getUTCFullYear()
      
      const cur_date=date.toString().padStart(2,'0')
      const cur_month=month.toString().padStart(2,'0')

      console.log(cur_date,cur_month,year)

      const cdate=`${year}-${cur_month}-${cur_date}`
      console.log(cdate);
      
      const cust=res.data
      console.log(cust)

      const customer_list = cust?.filter(item=>item.date==cdate)

      setCustomer(customer_list)
      // console.log(customer)

      
    }).catch(err=>{
      console.log(err)
    })
    }
    console.log(customer)

  return (
    <div className='container mt-4'>
      <h1 className='py-4 text-center text-secondary'>Today Customer Lsit </h1>
      <table className='table table-bordered table-striped hover shadow'>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Phone Number</th>
                <th>Vehcle no</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              {
                customer?.length > 0?
                customer.map(i=>(
                  <tr>
                <td>{i.name}</td>
                <td>{i.phone}</td>
                <td>{i.vehcle_no}</td>
                <td><Link className='btn btn-outline-primary' to={`/service/${i.id}`} >View Services</Link></td>
              </tr>
                ))
              :<h4>No customer</h4>
            }
            </tbody>
          </table>
    </div>
  )
}

export default Home
