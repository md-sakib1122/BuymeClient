import React, { useContext } from 'react'
import Header from '../adminpanel/Header'
import Sidebar from '../adminpanel/Sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import  UploadProductModal from '../adminpanel/UploadProductModal'
import { useSelector } from 'react-redux'
import store from '../store/store'
import  UpdateProductModal from '../adminpanel/UpdateProductModal'
import contex from '../contex'
function AdminPanel() {
  const {setTogleProductEdit ,toggleProductEdit,productDetail, setProductDetail, fetchAllProducts,setFetchAllProducts} =  useContext(contex).editModal;
  console.log('toggleProductEdit',toggleProductEdit)
  const [sidebar, setSidebar] = useState(true);
  const toggle_upload_modal = useSelector(state => state.products.products.toggle_upload_modal);
  return (
    
    <div className=' max-h-[calc(100vh-47px)] lg:grid-container gap-[2px] bg-slate-200 md:grid-cols-1 sm:grid-cols-1 relative  '>
        {toggle_upload_modal&&<UploadProductModal fetchAllProducts ={fetchAllProducts} />}
        {toggleProductEdit && <UpdateProductModal/> } 
         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
         <Header sidebar={sidebar} setSidebar={setSidebar} />
        <Outlet/>
    </div>
  )
}

export default AdminPanel