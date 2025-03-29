import React, { useContext, useEffect, useState } from 'react'
import summaryApi from '../common'
import { MdDelete } from "react-icons/md";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { BsPlus } from "react-icons/bs";
import contex from '../contex';
import { useNavigate } from 'react-router-dom';

function ProductCart() {
  const [cartProducts, setCartProducts] = React.useState([]);
  const {cartCount ,fetchCartProductCount} = useContext(contex);
  const [totalProductsPrice, setTotalProductsPrice] = useState(0);
  const navigate = useNavigate();
  const fetchAllCartProducts = async () => {
       const response = await fetch(summaryApi.fetchAllCartProducts.url,{
        method: summaryApi.fetchAllCartProducts.method,
        credentials:'include',
        headers: {
          'Content-Type': 'application/json',
        }
       } );
       const dataResponse = await response.json();
       if(dataResponse.success){
          setCartProducts(dataResponse.data); 
          totalPrice(dataResponse.data);
       }
       if(dataResponse.error){
        console.log(dataResponse.message);
       }
  }

  const handleDeleteCartProduct = async(cartid) => {
    const response = await fetch(summaryApi.deleteCartProduct.url,{
        method: summaryApi.deleteCartProduct.method,
        credentials:'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({cartid})
       } );

       const dataResponse = await response.json();
       if(dataResponse.success){
         await fetchAllCartProducts();
         await fetchCartProductCount();
       }
      
  }

   const totalPrice = (data)=>{
        let totalPrice = data.reduce((prodcut,current)=>{
          return prodcut + current.productId.sellingPrice * current.quantity
        },0);
        setTotalProductsPrice(totalPrice);
   }

  //  increase quantity product

  const handleIncreaseQuantity = async (cartid,quantity)=>{

     try{
       const response = await fetch(summaryApi.updateCartProduct.url,{
        method:summaryApi.updateCartProduct.method,
        credentials:'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({cartid,quantity})
       } );

       const responseData = await response.json();
       await fetchCartProductCount();
     }
     catch(err){
       console.log(err.message)
     }
  }


   
   useEffect(()=>{
      const comb = async()=>{
       await fetchAllCartProducts();
       await fetchCartProductCount();
      }
      comb();
  
   },[cartCount]);

 

  return (
    <div className=' flex  flex-col md:flex-row md:justify-between  py-3 gap-4 md:gap-32 sm:p-0 md:p-8  bg-slate-100'>
        <div className='  flex flex-col gap-2 w-full md:w-1/2'>
           {
            cartProducts.length>0 ?
            cartProducts.map((cart, ind)=>{
              return (
                <div key={ind} className=' bg-white border flex shadow-md'>

                    <div className=' w-32 bg-slate-200 h-32 p-1 mix-blend-multiply flex justify-center items-center'>
                        <img className='mix-blend-multiply  h-28 w-28 object-contain' src={cart.productId.images[0]} alt="" />
                    </div>
                    <div className=' flex-1 p-3  w-full flex flex-col justify-between '>
                       <div className=' flex  justify-between'>
                          <h2>{cart.productId.productName}</h2>
                          <button onClick={()=>handleDeleteCartProduct(cart._id)}  className=' text-orange-500 text-lg hover:bg-orange-500 hover:rounded-full hover:p-1 hover:text-white'>
                              <MdDelete />
                          </button>
                       </div>
                     
                       <h4 className=' text-slate-500'>{cart.productId.brandName}</h4>
                       <div className='flex justify-between'>
                         <p className=' text-orange-500  font-semibold'>${cart.productId.sellingPrice}</p>
                         <p className=' font-semibold'>${cart.productId.buyingPrice}</p>
                       </div>
                       <div className=' flex gap-2 items-center text-black'>
                          <button onClick={()=>handleIncreaseQuantity(cart._id,cart?.quantity>1? cart?.quantity-1:1)}  className='p1 border border-slate-600 hover:border-orange-500 hover:bg-orange-400 hover:text-white'><HiMiniMinusSmall /></button>
                          <span>{cart.quantity}</span>
                          <button onClick ={()=>handleIncreaseQuantity(cart._id,cart?.quantity+1)}  className='p1 border border-slate-600 hover:border-orange-500 hover:bg-orange-400 hover:text-white'><BsPlus/> </button>
                       </div>
                    </div>
                </div>
              )
 
            }): (
              <div className=" flex flex-col items-center justify-center h-[150px] text-center mb-10">
                  <h2 className="text-3xl font-bold text-orange-600 mt-6">
                      Your Cart is Empty! 🛒
                  </h2>
                  <p className="text-gray-600 text-lg mt-2">
                      Looks like you haven't added anything to your cart yet.
                  </p>
                  <button onClick={()=>navigate('/')}  className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
                      Start Shopping 🛍️
                  </button>
              </div>
          )
           }
        </div>

       <div className='  flex-1   '>
          <div className=' flex flex-col shadow-lg'>
            <h2 className=' text-white bg bg-orange-500 py-1 px-4'>Summary</h2>
            <div className=' bg-white font-semibold'>
                <div className=' flex justify-between px-4 my-2'>
                  <span>Quantity</span>
                  <span>{cartCount}</span>
                </div>
                <div className=' flex justify-between px-4 mb-2'>
                  <span>Total Price</span>
                  <span>${totalProductsPrice}</span>
                </div>
            </div>
            <div>
              <button className=' bg-blue-800 w-full py-2  font-semibold text-slate-100'>Payment</button>
            </div>
          </div>
        </div>


    </div>
  )
}

export default ProductCart