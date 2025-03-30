import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FetchCategoryProducts from '../helpers/FetchCategoryProducts';


function CategoryProduct() {
  const params = useParams();
  const [products , setProducts] = useState({});
  console.log('params', params);
  const getProducts = async () => {
     const response = await FetchCategoryProducts(params.categoryName);
     
     console.log('response', response);
  
  }
  useEffect(()=>{
    console.log("hi")
    getProducts();
  },[]);

  return (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
    <div className="text-center p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-4xl font-bold text-orange-500 mb-2">🚧 Under Development 🚧</h1>
      <p className="text-lg">We're working hard to bring you something awesome. Stay tuned!</p>
    </div>
  </div>
  )
}

export default CategoryProduct