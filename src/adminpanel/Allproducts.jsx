import React, { useEffect, useState,useContext } from 'react'
import {toggle_upload_modal} from'../store/products_slice'
import summaryApi from '../common';
import { MdEdit } from "react-icons/md";
import contex from '../contex'
import { useDispatch } from 'react-redux';


function Allproducts() {
  const {setTogleProductEdit , setProductDetail,RefetchAllProducts} =  useContext(contex).editModal;   
   const [allProducts, setAllProducts] = useState([]);
    const dispatch = useDispatch();

    const fetchAllProducts = async () => {
        const response = await fetch(summaryApi.fetchAllProducts.url,{
          method: summaryApi.fetchAllProducts.method,
          credentials: 'include',
        });

        const dataRespnse =  await response.json();
        
         if(dataRespnse.success) {
           setAllProducts(dataRespnse.data);
         }
         if(dataRespnse.error) {
          console.log(dataRespnse.message);
         }

    }

    function handleUploadProduct(){
        dispatch(toggle_upload_modal(true))  // toggle modal
    }

    useEffect(()=>{
       fetchAllProducts();
       console.log('RefetchAllProducts',RefetchAllProducts)
     },[RefetchAllProducts]);

  return (
    <div className='bg-slate-200 col-span-3  border-l border-white'>
        <div className=' h-[50px] bg-white flex justify-between items-center p-2 mb-[1px] lg:mt-0  md:mt-[1px] sm:mt[1px] '>
             <h1 className=' font-bold'>All Products</h1>
             <button onClick={handleUploadProduct} className=' transition-all p-2 border-[2px] text-orange-400 border-orange-400 hover:text-white hover:bg-orange-400 rounded-full'>Upload Product</button>
        </div>
         <div className=' h-[400px] py-1 flex bg-slate-200   flex-wrap  gap-2 px-1  overflow-y-scroll items-start'>
            {allProducts.map((product,index) => (
            <div key={index} className='shadow-lg  bg-white w-28 md:w-24 lg:w-24 p-2  relative  rounded-sm '>
                  <img className=' w-28 h-28 md:w-24 lg:w-24 lg:h-24 object-contain ' src={product.images[0]} alt="" />
                  <p className=' text-ellipsis line-clamp-1 text-slate-600 text-sm ' >{product.productName}</p>
                  <p>${product.sellingPrice}</p>
                  <div onClick={()=>{setTogleProductEdit(true); setProductDetail(product)}}  className=' bg-orange-400 hover:bg-orange-500   text-white cursor-pointer rounded-full p-1 text-sm absolute right-2 bottom-2'>
                    <MdEdit />
                  </div>
            </div>
            ))}
         </div>
    </div>
  )
}

export default Allproducts;
