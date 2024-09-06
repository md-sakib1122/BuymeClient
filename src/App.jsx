import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    
     return (
        <>
              <ToastContainer />
            <div className=' pt-16'>
              <Header/>
                  <Outlet/>
              <Footer/>
           </div>
        </>
     )
} 

export default App
