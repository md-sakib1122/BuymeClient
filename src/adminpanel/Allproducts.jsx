import React from 'react'
import {toggle_upload_modal} from'../store/products_slice'
import { useDispatch } from 'react-redux'


function Allproducts() {
  const dispatch = useDispatch();
  return (
    <div className='bg-white col-span-3 px-4'>
        <div className=' flex justify-between items-center p-2'>
            <h1 className=' font-bold'>All Products</h1>
             <button onClick={()=>dispatch(toggle_upload_modal(true))} className=' transition-all p-2 border-[2px] text-red-500   border-red-500 hover:text-white hover:bg-red-500 rounded-full'>Upload Product</button>
        </div>
    </div>
  )
}

export default Allproducts