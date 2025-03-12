import React, { useState, useEffect, useRef, useContext } from 'react';
import FetchCategoryProducts from '../helpers/FetchCategoryProducts';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import AddToCart from '../helpers/AddToCart';
import contex from '../contex';

function VerticalCardProduct({ category, heading }) {
  const [data, setData] = useState([]);
  const { fetchCartProductCount } = useContext(contex);
  const [loading, setLoading] = useState(true);
  const [loadingCart, setLoadingCart] = useState({});
  const scrollRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await FetchCategoryProducts(category);
      setData(Array.isArray(response) ? response : []);
      setLoading(false);
    };
    getProducts();
  }, [category]);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 337;
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= 337;
  };

  const handleAddToCart = async (e, productId) => {
    e.preventDefault();
    setLoadingCart((prev) => ({ ...prev, [productId]: true }));
    await AddToCart(productId, navigate);
    setLoadingCart((prev) => ({ ...prev, [productId]: false }));
    await fetchCartProductCount();
  };

  return (
    <div className='container my-6 m-auto'>
      <h2 className='font-semibold text-2xl mb-3'>{heading}</h2>
      <div className='relative'>
        <button onClick={scrollLeft} className='hidden md:block z-20 bg-green-400 p-1 rounded-full left-1 top-1/2 -translate-y-1/2 absolute'>
          <FaChevronLeft />
        </button>
        <div className='px-1 py-3 relative flex scrollbar-none w-full overflow-x-scroll scroll-smooth' ref={scrollRef}>
          {loading
            ? [...Array(13)].map((_, ind) => (
                <div key={ind} className='h-36 animate-pulse mr-6 rounded-sm bg-white shadow-2xl flex gap-4 min-w-[280px] max-w-[280px] md:max-w-[320px] md:min-w-[320px]'>
                  <div className='h-full animate-pulse min-w-[120px] max-w-[120px] bg-slate-200'></div>
                  <div className='my-3 flex-1'>
                    <h3 className='animate-pulse mb-2 rounded-full h-2 w-24 bg-slate-300'></h3>
                    <p className='h-3 animate-pulse rounded-full w-36 bg-slate-300 mb-1'></p>
                    <div className='mb-1 flex gap-3'>
                      <p className='animate-pulse h-2 mb-2 rounded-full bg-slate-300 w-16'></p>
                      <p className='h-2 animate-pulse rounded-full bg-slate-300'></p>
                    </div>
                    <button className='animate-pulse h-6 bg-slate-300 text-white rounded-full p-[2px] w-32'></button>
                  </div>
                </div>
              ))
            : data.length > 0
            ? data.map((product, ind) => (
                <Link key={ind} to={'product-details/' + product._id} className='shadow-lg mr-6 rounded-sm bg-white min-w-full max-w-full md:max-w-[300px] md:min-w-[300px]'>
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
            : <p className='text-center w-full text-gray-500'>No products available</p>}
        </div>
        <button onClick={scrollRight} className='hidden md:block bg-lime-400 rounded-full p-1 right-1 top-1/2 -translate-y-1/2 absolute'>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default VerticalCardProduct;