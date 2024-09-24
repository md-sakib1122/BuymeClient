import React from 'react'
import Header from '../adminpanel/Header'
import Sidebar from '../adminpanel/Sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
function AdminPanel() {
  const [sidebar, setSidebar] = useState(true);

  return (
    
    <div className=' lg:grid-container gap-[2px] bg-slate-200 md:grid-cols-1 sm:grid-cols-1 relative h-full '>
         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
         <Header sidebar={sidebar} setSidebar={setSidebar} />
        <Outlet/>
    </div>
  )
}

export default AdminPanel