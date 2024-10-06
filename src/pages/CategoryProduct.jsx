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
    
    <div>CategoryProduct {params.categoryName}</div>
  )
}

export default CategoryProduct