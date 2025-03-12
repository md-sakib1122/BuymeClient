import React, { useState, useEffect, useRef, useContext } from 'react';
import FetchCategoryProducts from '../helpers/FetchCategoryProducts';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import AddToCart from '../helpers/AddToCart';
import contex from '../contex';

function HorizontalCardProduct({ category, heading }) {
  const { fetchCartProductCount } = useContext(contex);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCart, setLoadingCart] = useState({});
  const scrollRef = useRef();
  const navigate = useNavigate();

  // Fetch products based on category
  const getProducts = async () => {
    setLoading(true);
    const response = await FetchCategoryProducts(category);
    setData(Array.isArray(response) ? response : []); // Ensure response is an array
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [category]); // Re-fetch products when category changes

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
    <div className='my-6 container m-auto'>
      <h2 className='font-semibold text-2xl mb-3'>{heading}</h2>
      <div className='relative'>

        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className='hidden md:block z-20 bg-green-400 p-1 rounded-full left-1 top-1/2 -translate-y-1/2 absolute'
        >
          <FaChevronLeft />
        </button>

        {/* Product List */}
        <div className='px-1 py-2 relative flex scrollbar-none w-full overflow-x-scroll scroll-smooth' ref={scrollRef}>
          {loading ? (
            // Skeleton Loader
            [...Array(13)].map((_, ind) => (
              <div
                key={ind}
                className='animate-pulse h-24 mr-6 rounded-sm bg-white shadow-2xl flex gap-4 min-w-[280px] max-w-[280px] md:max-w-[320px] md:min-w-[320px]'
              >
                <div className='animate-pulse min-w-[120px] max-w-[120px] bg-slate-200'></div>
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
          ) : data.length > 0 ? (
            // Product Cards
            data.map((product, ind) => (
              <Link
                to={'product-details/' + product._id}
                className='bg-white mr-6 rounded-sm shadow-lg flex gap-5 min-w-full max-w-full md:max-w-[300px] md:min-w-[300px]'
                key={ind}
              >
                <div className='min-w-[120px] max-w-[120px] bg-slate-200'>
                  <img
                    className='transition-all hover:scale-75 object-contain mix-blend-multiply'
                    src={product.images?.[0] || "fallback-image.jpg"}
                    alt={product.productName || "No Name"}
                  />
                </div>
                <div className='flex-1'>
                  <h3 className='mb-1 font-semibold text-ellipsis line-clamp-1'>
                    {product.productName || "Unnamed Product"}
                  </h3>
                  <p className='mb-1 capitalize text-slate-500'>{product.category || "Unknown Category"}</p>
                  <div className='mb-1 flex gap-3'>
                    <p className='text-orange-600 font-semibold'>${product.buyingPrice ?? "N/A"}</p>
                    <p className='line-through text-slate-500'>${product.sellingPrice ?? "N/A"}</p>
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(e, product._id)}
                    className='bg-orange-500 text-white rounded-full p-[2px] w-32'
                  >
                    {loadingCart[product._id] ? "Adding..." : "Add To Cart"}
                  </button>
                </div>
              </Link>
            ))
          ) : (
            // No Products Found
            <p className='text-center w-full text-gray-500'>No products available</p>
          )}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className='hidden md:block bg-lime-400 rounded-full p-1 right-1 top-1/2 -translate-y-1/2 absolute'
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default HorizontalCardProduct;
