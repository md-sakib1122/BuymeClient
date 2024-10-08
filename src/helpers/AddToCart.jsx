import React from 'react'
import summaryApi from '../common';
import { toast } from 'react-toastify';

async function  AddToCart(productId) {

     const response = await fetch(summaryApi.addToCart.url,{
          method:  summaryApi.addToCart.method,
          credentials:'include',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productId })
     });

     const dataresponse = await response.json();;
     if(dataresponse.success) {
          toast.success(dataresponse.message);
     }
     if(dataresponse.error){
          toast.error(dataresponse.message);
     }
}   

export default AddToCart;