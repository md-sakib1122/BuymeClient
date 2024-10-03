import React, { useState } from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
import { MdInventory2 } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { ImCross } from "react-icons/im";
import {Link} from 'react-router-dom'

function Sidebar({ sidebar, setSidebar }) {
  

   const showBar = ' absolute text-black row-span-2 bg-white  left-0 right-1/2 bottom-0 top-0 transition-all z-20'
   const hideBar = 'lg:block hidden text-slate-700 row-span-2 bg-white transition-all  '

  return (
    <div className = {sidebar? hideBar : showBar}>
        <div className=' w-full flex justify-between items-center px-4 mb-10 mt-4'>
            <div className=' '>
              <h1 className=' text-xl font-bold'>BUY ME</h1>
            </div >
            <div className=' lg:hidden visible cursor-pointer' onClick={()=>setSidebar(true)}>
             <ImCross />
            </div>
        </div>


        <Link to ={''} className='hover:bg-orange-200  text-black my-4   cursor-pointer px-4 py-1 flex items-center gap-2'>
          <span className=' text-xl  text-orange-400 '><MdSpaceDashboard /></span>
          <h2 className='w-full'>Dashboard</h2>
        </Link>

        <Link to ={'all-products'} className=' text-black my-4 hover:bg-orange-200 cursor-pointer p-1 px-3 flex items-center gap-2'>
          <span className='text-orange-400  text-2xl'><MdDelete /></span>
          <h2 className=''>Products</h2>
        </Link>

        <Link to={'users'} className=' text-black my-4 hover:bg-orange-200 cursor-pointer p-1 px-3 flex items-center gap-2'>
          <span className='text-orange-400  text-xl'> <HiUsers /> </span>
           <h2>Users</h2>
        </Link>

        <div className=' text-black my-4 hover:bg-orange-200 cursor-pointer p-1 px-3 flex items-center gap-2'>
          <span className='text-orange-500  font-bold text-xl'> <MdOutlineCategory /></span>
          <h2>Categories</h2>
        </div>

        <div className=' text-black my-4 hover:bg-orange-200 cursor-pointer p-1 px-3 flex items-center gap-2'>
          <span className='text-orange-500  text-xl'><TbReportSearch /></span>
          <h2>Reports</h2>
        </div> 

        <div className=' text-black  my-4 hover:bg-orange-200 cursor-pointer p-1 px-3 flex items-center gap-2'>
          <span className='text-orange-500  text-xl'> <MdInventory2 /> </span>
          <h2>inventory</h2>
        </div>

        <div className=' text-black my-4 hover:bg-orange-200 cursor-pointer p-1 px-3  flex items-center gap-2'>
          <span className='text-orange-500  text-xl'><IoMdSettings /></span>
          <h2 >Settings</h2>
        </div>
    </div>
  )
}

export default Sidebar