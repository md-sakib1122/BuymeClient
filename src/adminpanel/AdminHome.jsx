import React from 'react'
import { MdDelete } from "react-icons/md";
import { PiDotsSixVertical } from "react-icons/pi";
import { HiUsers } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";

function AdminHome() {

  return (
    <div className=' bg-white col-span-3 p-4'>
        <h1 className=' pb-6 font-bold'>Dashboard</h1>
      
         <div className=' w-full text-white grid  lg:grid-cols-4  gap-3 md:grid-cols-2 '>

             <div className=' flex flex-col justify-between p-3  h-28 rounded-md bg-blue-500'>
               <div className='flex justify-between '>
                  <h1 className=' font-bold '>PRODUCTS</h1>
                   <span className=' text-2xl'><MdDelete /></span>
               </div>
               <h1  className=' font-bold text-2xl'>343</h1>
             </div>

             <div className='flex flex-col justify-between p-3  h-28 rounded-md  bg-orange-400'>
                <div className='flex justify-between'>
                   <h1 className=' font-bold '>CATEGORIES</h1>
                   <span className='text-2xl'><PiDotsSixVertical /></span>
                </div>
                <h1  className=' font-bold text-2xl'>343</h1>
             </div>

             <div className='flex flex-col justify-between p-3  h-28 rounded-md  bg-green-700'>
                <div className='flex justify-between'>
                  <h1 className=' font-bold '>USERS</h1>
                  <span className='text-2xl'> <HiUsers /> </span>
                </div>
                <h1  className=' font-bold text-2xl'>343</h1>
             </div>

             <div className='flex flex-col justify-between p-3 h-28 rounded-md bg-red-500'>
                <div className='flex justify-between'>
                  <h1 className=' font-bold '>ALLERTS</h1>
                   <span className='text-2xl'><IoIosNotifications /></span>
                </div>
                <h1  className=' font-bold text-2xl'>343</h1>
             </div>

         </div>
    </div>
  )
}

export default AdminHome