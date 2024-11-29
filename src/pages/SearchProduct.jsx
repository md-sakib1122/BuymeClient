import React from 'react'
import { useLocation } from 'react-router-dom';

function SearchProduct() {
  const query = useLocation();
  console.log(query.search);
  return (
    <div>searchProduct</div>
  )
}

export default SearchProduct;