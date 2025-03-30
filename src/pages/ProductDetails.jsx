import { useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FetchCategoryProducts from '../helpers/FetchCategoryProducts';
import summaryApi from '../common';
import { FaStar, FaStarHalf } from "react-icons/fa";
import contex from '../contex';
import AddToCart from '../helpers/AddToCart';

function PoductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [hoverImg, setHoverImg] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [loadingCart, setLoadingCart] = useState({});
  const { fetchCartProductCount } = useContext(contex);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await fetch(summaryApi.fetchProductDetails.url, {
        method: summaryApi.fetchProductDetails.method,
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ productId }),
      });

      const dataResponse = await response.json();
      setProduct(dataResponse.data);

      // Call fetchRecommendedProducts AFTER product is set
      console.log(dataResponse.data)
      if (dataResponse.data?.category) {
        fetchRecommendedProducts(dataResponse.data.category);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const fetchRecommendedProducts = async (category) => {
    try {
      const response = await FetchCategoryProducts(category);
      setRecommended(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error("Error fetching recommended products:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]); // Fetch product when productId changes

  const handleAddToCart = async (e, productId) => {
    e.preventDefault();
    setLoadingCart((prev) => ({ ...prev, [productId]: true }));
    await AddToCart(productId, navigate);
    setLoadingCart((prev) => ({ ...prev, [productId]: false }));
    await fetchCartProductCount();
  };

  return (
    <div className='py-1 container mx-auto my-6'>
      <div className='md:flex md:gap-7'>
        <div className='gap-4 block md:flex md:flex-row-reverse'>
          <div className='cursor-pointer p-3 mx-auto mb-3 bg-slate-200 h-[344px] w-[344px]'>
            <img className='mix-blend-multiply h-full w-full object-contain' 
                 src={hoverImg || product?.images?.[0]} 
                 alt={product?.productName || "Product"} />
          </div>
          <div className='mx-auto w-[344px] justify-between md:justify-normal md:w-auto flex md:flex-col md:gap-[8px]'>
            {product?.images?.map((image, ind) => (
              <div key={ind} onMouseOver={() => setHoverImg(image)} 
                   className='p-2 cursor-pointer w-20 h-20 bg-slate-200'>
                <img className='mix-blend-multiply h-full w-full object-contain' 
                     src={image} alt={product?.productName} />
              </div>
            ))}
          </div>
        </div>

        <div className='mt-4 md:mt-0'>
          <h4 className='bg-orange-200 px-2 rounded-full w-fit'>{product?.brandName}</h4>
          <h1 className='mb-1 font-bold text-2xl'>{product?.productName}</h1>
          <p className='text-slate-500'>{product?.category}</p>
          <div className='gap-1 flex mb-1 text-orange-400'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
          </div>
          <div className='flex gap-3 font-semibold text-xl mb-3'>
            <p className='text-orange-400'>${product?.sellingPrice}</p>
            <p className='text-slate-400 line-through'>${product?.buyingPrice}</p>
          </div>

          <div className='flex gap-3 mb-3'>
            <button className='rounded-sm w-32 py-1 px-9 border-2 transition-all border-orange-400 text-orange-500 hover:text-white hover:bg-orange-400'>
              BUY
            </button>
            <button onClick={(e)=>handleAddToCart(e,product._id)}  className='rounded-sm w-32 py-1 border-2 transition-all hover:bg-white border-orange-400 hover:text-orange-500 text-white bg-orange-400'>
              Add To Cart
            </button>
          </div>
          <div>
            <h4 className='text-lg font-bold'>Description:</h4>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <section className='container mx-auto my-5'>
        <h1 className='font-bold text-2xl'>Recommended Products</h1>
        <div className='container mt-3 mx-auto grid grid-cols-1 lg:grid-cols-4 lg:gap-3 md:grid-cols-3 md:gap-2'>
          {recommended.length > 0 ? (
            recommended.map((product, ind) => (
              <Link key={ind} to={'/product-details/' + product._id} className='shadow-lg rounded-sm bg-white'>
                <div className='p-3 h-48 mix-blend-multiply flex justify-center bg-slate-200'>
                  <img className='transition-all hover:scale-90 h-full w-full object-contain' 
                       src={product.images?.[0] || 'fallback-image.jpg'} 
                       alt={product.productName || 'Unnamed Product'} />
                </div>
                <div className='p-4 flex-1'>
                  <h3 className='font-semibold text-ellipsis line-clamp-1'>{product.productName || 'Unnamed Product'}</h3>
                  <p className='capitalize text-slate-500'>{product.category || 'Unknown Category'}</p>
                  <div className='mb-1 flex gap-3'>
                    <p className='text-orange-600 font-semibold'>${product.buyingPrice ?? 'N/A'}</p>
                    <p className='line-through text-slate-500'>${product.sellingPrice ?? 'N/A'}</p>
                  </div>
                  <button onClick={(e) => handleAddToCart(e, product._id)} 
                          className='bg-orange-500 text-white rounded-full p-[2px] w-full'>
                    {loadingCart[product._id] ? 'Adding...' : 'Add to Cart'}
                  </button>
                </div>
              </Link>
            ))
          ) : (
            <p className='text-center w-full text-gray-500'>No products available</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default PoductDetails;
