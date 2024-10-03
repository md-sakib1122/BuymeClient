import { createContext, useState } from 'react';
function productEditModal () {
    const [toggleProductEdit,setTogleProductEdit] = useState(false);
    const [productDetail , setProductDetail] = useState({});
    const [RefetchAllProducts , setRefetchAllProducts] = useState(false);


    
    return{
        toggleProductEdit,
        setTogleProductEdit,
        productDetail,
        setProductDetail,
        RefetchAllProducts,
        setRefetchAllProducts
        // Other functions for updating product details and fetching products should be added here...
    }

}
const contex = createContext(null);

export default contex;

export { productEditModal };