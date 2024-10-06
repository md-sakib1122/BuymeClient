import React, { useState,useEffect, useRef } from 'react'
import FetchCategoryProducts from '../helpers/FetchCategoryProducts'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


function HorizontalCardProduct({ category, heading}) {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const loadingList = new Array(13).fill(null);
  const scrollRef = useRef();

  const getProducts = async () => {
    setloading(true);
    const response = await FetchCategoryProducts(category);
    setData(response);
    setloading(false);
 }
 useEffect(()=>{
   getProducts();
 },[]);

  const scrollLeft = ()=>{
    scrollRef.current.scrollLeft += 337;
  }
  const scrollRight= ()=>{
    scrollRef.current.scrollLeft -= 337;
  }
  return (
    <>
     {
       loading?(
          <div className=' my-6 container  m-auto '>
            <h2 className=' font-semibold text-2xl  mb-3' ></h2>
            <div className=' relative'>
                <button   className=' hidden md:block h-6 w-6 bg-slate-300 p-1 rounded-full left-1 top-1/2 -translate-y-1/2  absolute'> </button>
                <div className=' py-2 relative flex scrollbar-none w-full overflow-x-scroll scroll-smooth ' ref={scrollRef}>
                    
                    {
                    loadingList.map((val , ind) => {
                        return (
                            <div className= ' animate-pulse h-24 mr-6 rounded-sm bg-white  shadow-2xl flex gap-4 min-w-[280px]  max-w-[280px] md:max-w-[320px] md:min-w-[320px] ' key={ind}> {/* or ind if no unique id available */}
                                <div className='animate-pulse min-w-[120px] max-w-[120px] bg-slate-200 '>
                                    
                                </div>
                                <div className=' my-3 flex-1'>
                                    <h3 className='animate-pulse mb-2 rounded-full h-2 w-24 bg-slate-300  font-semibold text-ellipsis line-clamp-1'> </h3>
                                    <p className='h-3 animate-pulse rounded-full w-36 bg-slate-300 mb-1 capitalize text-slate-500'> </p>
                                    <div className='mb-1 flex gap-3'>
                                        <p className=' animate-pulse h-2 mb-2 rounded-full bg-slate-300 w-16 font-semibold'>  </p>
                                        <p className='h-2 animate-pulse rounded-full bg-slate-300 line-through text-slate-500'> </p>
                                    </div>
                                    <button className=' animate-pulse h-6 bg-slate-300 text-white rounded-full p-[2px]  w-32'> </button>
                                </div> 
                            </div>
                        );
                    })
                    }
                
                </div>
                <button onClick={scrollRight} className='hidden md:block h-6 w-6 bg-slate-300 rounded-full p-1 right-1 top-1/2 -translate-y-1/2 absolute'></button> 
            </div>
        </div>

       ):(
        <div className=' my-6 container  m-auto '>
            <h2 className=' font-semibold text-2xl  mb-3' >{heading}</h2>
            <div className=' bg-slate-100 relative'>
                <button onClick={scrollLeft}  className='hidden md:block z-50 bg-green-400 p-1 rounded-full left-1 top-1/2 -translate-y-1/2  absolute'> <FaChevronLeft /> </button>
                <div className=' px-1 py-2 relative flex scrollbar-none w-full overflow-x-scroll scroll-smooth ' ref={scrollRef}>
                    
                    {
                    data.map((product, ind) => {
                        return (
                            <div className= '  bg-white mr-6 rounded-sm   shadow-lg flex gap-5 min-w-[280px]  max-w-[280px] md:max-w-[300px] md:min-w-[300px] ' key={product.id}> {/* or ind if no unique id available */}
                                <div className='min-w-[120px] max-w-[120px] bg-slate-200 '>
                                    <img className=' object-contain mix-blend-multiply' src={product.images[0]} alt={product.productName} />
                                </div>
                                <div className=' flex-1'>
                                    <h3 className=' mb-1 font-semibold text-ellipsis line-clamp-1'>{product.productName}</h3>
                                    <p className='mb-1 capitalize text-slate-500'>{product.category}</p>
                                    <div className='mb-1 flex gap-3'>
                                        <p className=' text-orange-600 font-semibold'>${product.buyingPrice}</p>
                                        <p className=' line-through text-slate-500'>${product.sellingPrice}</p>
                                    </div>
                                    <button className=' bg-orange-500 text-white rounded-full p-[2px]  w-32'>Add to Cart</button>
                                </div> 
                            </div>
                        );
                    })
                    }
                
                </div>
                <button onClick={scrollRight} className='hidden md:block bg-lime-400 rounded-full p-1 right-1 top-1/2 -translate-y-1/2 absolute'><FaChevronRight /></button> 
            </div>
        </div>
   ) }
    </>
  )
}

export default HorizontalCardProduct