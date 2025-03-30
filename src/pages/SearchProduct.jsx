import React, { useEffect, useState ,useContext} from 'react'
import { useLocation } from 'react-router-dom';
import { Link ,useNavigate} from 'react-router-dom';
import summaryApi from '../common';
import contex from '../contex';
import AddToCart from '../helpers/AddToCart';
function SearchProduct() {

  const query = useLocation();
  const [searchData, setProductData] = useState([]);
  const [loadingCart, setLoadingCart] = useState({});
  const { fetchCartProductCount } = useContext(contex);
  const navigate = useNavigate();
  

  const fetchProduct = async ()=>{
     const response = await fetch(summaryApi.searchProduct.url+query.search);
     const dataResponse = await response.json();

     setProductData(dataResponse.data);
  }  
  
  const handleAddToCart = async (e, productId) => {
    e.preventDefault();
    setLoadingCart((prev) => ({ ...prev, [productId]: true }));
    await AddToCart(productId, navigate);
    setLoadingCart((prev) => ({ ...prev, [productId]: false }));
    await fetchCartProductCount();
  };





  useEffect(()=>{
     fetchProduct();
  },[query]);

  return (
    <section className=' container mx-auto my-5 '>
      <h1 className=' font-bold text-2xl '>Search Result: {searchData.length}</h1>
      <div className='container mt-3 mx-auto grid grid-cols-1 lg:grid lg:grid-cols-4 lg:gap-3 md:grid md:grid-cols-3  md:gap-2'>
          {
            searchData.length > 0
            ? searchData.map((product, ind) => (
                <Link key={ind} to={'/product-details/' + product._id} className='shadow-lg  rounded-sm bg-white '>
                  <div className='p-3 h-48 mix-blend-multiply flex justify-center bg-slate-200'>
                    <img className='transition-all hover:scale-90 h-full w-full object-contain' src={product.images?.[0] || 'fallback-image.jpg'} alt={product.productName || 'Unnamed Product'} />
                  </div>
                  <div className='p-4 flex-1'>
                    <h3 className='font-semibold text-ellipsis line-clamp-1'>{product.productName || 'Unnamed Product'}</h3>
                    <p className='capitalize text-slate-500'>{product.category || 'Unknown Category'}</p>
                    <div className='mb-1 flex gap-3'>
                      <p className='text-orange-600 font-semibold'>${product.buyingPrice ?? 'N/A'}</p>
                      <p className='line-through text-slate-500'>${product.sellingPrice ?? 'N/A'}</p>
                    </div>
                    <button onClick={(e) => handleAddToCart(e, product._id)} className='bg-orange-500 text-white rounded-full p-[2px] w-full'>
                      {loadingCart[product._id] ? 'Adding...' : 'Add to Cart'}
                    </button>
                  </div>
                </Link>
              ))
            : <p className='text-center w-full text-gray-500'>No products available</p>
          }
        </div>
    </section>
  )
}

export default SearchProduct;