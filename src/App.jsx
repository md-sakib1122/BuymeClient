import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/Footer'

function App() {
    
     return (
       <>
           <Header/>
              <Outlet/>
           <Footer/>
       </>
     
     )
} 

export default App
