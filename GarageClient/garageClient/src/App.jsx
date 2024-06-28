import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Customer from './pages/Customer.jsx'
import Service from './pages/Service.jsx'
import './bootstrap.min.css'
import Header from './components/Header.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/customer' element={<Customer />}/>
        <Route path='/service/:id/' element={<Service />}/>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
