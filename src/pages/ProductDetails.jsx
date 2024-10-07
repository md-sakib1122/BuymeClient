import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import summaryApi from '../common';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

function PoductDetails() {
  const {productId} = useParams();
  const [product , setProduct] = useState();
  const [hoverImg, setHoverImg] = useState();
  const fetchProduct = async ()=> {
    const response = await fetch(summaryApi.fetchProductDetails.url,{
      method: summaryApi.fetchProductDetails.method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
      body: JSON.stringify({productId}),

    });

    const dataResponse = await  response.json();
    setProduct(dataResponse.data);
  }
  
  useEffect(()=>{
    fetchProduct();
  },[])

  return (
    <div className=' py-1'>
       <div className=' md:flex md:gap-7'>
          <div className='gap-4 block md:flex  md:flex-row-reverse'>
             <div className=' cursor-pointer p-3 mx-auto mb-3 bg-slate-200 h-[344px] w-[344px]'>
               <img className=' mix-blend-multiply h-full w-full object-contain' src={hoverImg?hoverImg:product?.images[0]} alt={product?.productName} />
             </div>
             <div  className='mx-auto w-[344px] justify-between md:justify-normal md:w-auto flex md:flex-col md:gap-[8px]'>
               {
                product?.images.map((image,ind) => {
                  return(
                         <div onMouseOver={()=> setHoverImg(image)}  className=' p-2 cursor-pointer w-20 h-20  bg-slate-200'>
                            <img className=' mix-blend-multiply h-full w-full object-contain' src={image} alt={product?.productName} />
                         </div>
                       )
                })
               }  
             </div>
          </div>

           <div className=' mt-4 md:mt-0 '>
               <h4 className=' bg-orange-200 px-2 rounded-full w-fit'>{product?.brandName}</h4>
               <h1 className=' mb-1 font-bold text-2xl'>{product?.productName}</h1>
               <p className=' text-slate-500'>{product?.category}</p>
               <div className=' gap-1 flex mb-1 text-orange-400'>
                 <span>
                     <FaStar />
                 </span>
                 <span>
                     <FaStar />
                 </span>
                 <span>
                     <FaStar />
                 </span>
                 <span>
                     <FaStar />
                 </span>
                 <span>
                   <FaStarHalf />
                 </span>
               </div>
               <div className=' flex gap-3 font-semibold text-xl mb-3'>
                  <p className=' text-orange-400'>${product?.sellingPrice}</p>
                  <p className=' text-slate-400 line-through'>${product?.buyingPrice}</p>
               </div>

               <div className=' flex gap-3 mb-3'>
                  <button className=' rounded-sm w-32 py-1 px-9 border-2 transition-all border-orange-400 text-orange-500 hover:text-white hover:bg-orange-400'>BUY</button>
                  <button className=' rounded-sm w-32 py-1  border-2 transition-all hover:bg-white border-orange-400 hover:text-orange-500 text-white bg-orange-400'>Add To Cart</button>
               </div>
               <div>
                 <h4 className=' text-lg font-bold'>Description:</h4> 
                 <p>{product?.description}</p>
               </div>
           </div>
       </div>
    </div>
  )
}

export default PoductDetails