import React from 'react'
import Header from '../adminpanel/Header'
import Sidebar from '../adminpanel/Sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import  UploadProductModal from '../adminpanel/UploadProductModal'
import { useSelector } from 'react-redux'
import store from '../store/store'

function AdminPanel() {
  const [sidebar, setSidebar] = useState(true);
  const toggle_upload_modal = useSelector(state => state.products.products.toggle_upload_modal);
  return (
    
    <div className=' lg:grid-container gap-[2px] bg-slate-200 md:grid-cols-1 sm:grid-cols-1 relative h-full '>
        {toggle_upload_modal&&<UploadProductModal/>}
         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
         <Header sidebar={sidebar} setSidebar={setSidebar} />
        <Outlet/>
    </div>
  )
}

export default AdminPanel