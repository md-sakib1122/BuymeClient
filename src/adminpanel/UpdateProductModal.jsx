import React, { useContext, useState } from 'react';
import {toggle_upload_modal} from'../store/products_slice';
import { useDispatch } from 'react-redux';
import { FaUpload } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import uploadImage from '../helpers/uploadImage';
import { MdDelete } from "react-icons/md";
import productCategory from "../helpers/productCategory";
import summaryApi from '../common';
import { toast } from 'react-toastify';
import contex from '../contex';

function UpdateProductModal() {
   const {setTogleProductEdit ,productDetail,setRefetchAllProducts } = useContext(contex).editModal;
   console.log(productDetail);
   const dispatch = useDispatch();
   const [product, setProduct] = useState({
      _id:productDetail._id,
      productName: productDetail?.productName,
      brandName: productDetail?.brandName,
      category: productDetail?.category,
      images: productDetail?.images,
      sellingPrice : productDetail?.sellingPrice,
      buyingPrice : productDetail?.buyingPrice,
      description: productDetail?.description,
   });

   const handleChange = (e) => {
      const {name , value} = e.target;
      setProduct({...product, [name]: value });
   }

   const handleImage = async (e) => {
      const value = e.target.files[0];
      const image = await uploadImage(value);
    
      setProduct((product)=>{return {...product, images: [...product.images, image.url] }});
   }


   const handleDeletImg = (index) => {
        const images  = product.images.filter((img , ind)=>{
          if(index !== ind) return true;
          else return false;
        });

        setProduct((product)=>{return {...product, images }});
   }

    const handleUpdate = async (e) => {
        const response = await fetch(summaryApi.updateProduct.url,{
          method: summaryApi.updateProduct.method,
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({...product }),
        });


       const dataResponse = await response.json();
       
       if(dataResponse.success) {
          console.log(dataResponse)
          toast.success('Product updated successfully');
          setRefetchAllProducts((prv)=>!prv);
          setTogleProductEdit(false);     
        }
       if(dataResponse.error) {
        toast.error('Product updated failed');
       }
    }


  return (
    <div className='z-50 absolute h-full w-full  bg-black  bg-opacity-15 flex justify-center items-center'>
        <div className=' w-1/2 h-[450px] bg-white mb-12  p-2  overflow-y-scroll'> 
            <div className='flex justify-between mb-5'>
              <h1 className=' font-bold'>Update Product</h1>
              <button className=' hover:bg-red-500 hover:text-white p-1 rounded-full' onClick={()=>setTogleProductEdit(false)}>
                 <ImCross />
              </button>
            </div>

            < div className=' flex flex-col mb-4'>
               <label htmlFor="ProductName">Product Name</label>
               <input className=' h-9 px-2 outline-none w-full bg-slate-200' 
                  placeholder='enter product name' 
                  type="text" 
                  name= 'productName'
                  onChange={handleChange}
                  value={product.productName}
               />
            </div>

            < div className=' flex flex-col mb-4'>
               <label htmlFor="ProductName">Brand Name</label>
               <input className=' h-9 px-2 outline-none w-full bg-slate-200' 
                  placeholder='enter product name' 
                  type="text" 
                  name = 'brandName'
                  onChange={handleChange}
                  value={product.brandName}
               />
            </div>

            <div className=' flex flex-col mb-4'>
               <label htmlFor="category"> category</label>
               <select className=' bg bg-slate-200 h-9 outline-none 'value={product.category} name="category" id=""  onChange={handleChange}>
                  <option value="Airpods">Select</option>
                  {
                     productCategory.map((item, index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                     ))
                  }
               </select>
            </div>

            <div className=' flex flex-col '>
               <label htmlFor="ProductImage">Product Image</label>
               <div className=' h-28 w-full bg-slate-200 relative'>
                  <div className=' flex flex-col justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-xl text-slate-800'>
                     <FaUpload />
                     <p>Upload Products Image</p>
                  </div>
                  <input className=' opacity-0 bg-opacity-50  px-2 outline-none  top-0 left-0 bottom-0 right-0 bg-slate-200 absolute' 
                      type="file"
                      name = "productImage"
                      onChange={handleImage}

                   /> 
               </div>
            </div>
            <div className=' flex gap-2 relative mt-1 mb-2'>
               {
                  product.images.length > 0 ? (
                     product.images.map((images, index)=>(
                        <div className=' relative bg-slate-200'>
                          <img className=' h-20 w-20 object-scale-down' key={index} src={images} alt="products" />
                          <button className=' absolute bottom-1 right-1 bg-red-600 p-1 text-white rounded-full' onClick={()=>handleDeletImg(index)}><MdDelete /></button>
                        </div>
                     ))
                  ): (<p className=' text-red-600 '>*please upload product</p>)
               }
               
            </div>

            < div className=' flex flex-col mb-4'>
               <label htmlFor="ProductName">Buying Price</label>
               <input className=' h-9 px-2 outline-none w-full bg-slate-200' 
                  placeholder='Buiying Price...' 
                  type="number" 
                  name = 'buyingPrice'
                  onChange={handleChange}
                  value={product.buyingPrice}
               />
            </div>

            < div className=' flex flex-col mb-4'>
               <label htmlFor="Selling Price">Selling Price</label>
               <input className=' h-9 px-2 outline-none w-full bg-slate-200' 
                  placeholder='Selling Price...' 
                  type="number" 
                  name = 'sellingPrice'
                  onChange={handleChange}
                  value={product.sellingPrice}
               />
            </div>

            <div className=' flex flex-col'>
               <label htmlFor="description">Description</label>
               <textarea className=' border outline-none' value={product.description} rows={5} cols={20} onChange={handleChange}  name="description" id="">
                 
               </textarea>

            </div>
            
            <div className=' mt-4'>
               <button onClick={handleUpdate}  className=' w-full h-8 bg-red-600 text-white hover:bg-red-700'> Update Product </button>
            </div>
        </div>
    </div>
  )
}

export default UpdateProductModal