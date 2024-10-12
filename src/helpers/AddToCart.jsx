import React from 'react'
import summaryApi from '../common';
import { toast } from 'react-toastify';

async function  AddToCart(productId,navigate) {

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
          console.log(dataresponse.data);
          if(dataresponse.data.user === 'notloggedin'){
               navigate('/login');
          }
          toast.error(dataresponse.message);
         
     }
}   

export default AddToCart;