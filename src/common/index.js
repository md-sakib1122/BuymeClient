
const backendDomain  = import.meta.env.VITE_backendURL;     //"https://buyme-server.vercel.app";

const summaryApi = {
    signUp : {
        url: `${backendDomain}/api/signup`,
        method: 'post',
    },
    login : {
        url: `${backendDomain}/api/login`,
        method: 'post',
    },
    userDetails : {
        url: `${backendDomain}/api/user-details`,
        method: 'get',
    },
    userLogout : {
        url: `${backendDomain}/api/logout`,
        method: 'get',
    },
    allUsers : {
        url: `${backendDomain}/api/all-users`,
        method: 'get',
    },
    updateUserRole : {
        url : `${backendDomain}/api/user-role-update`,
        method: 'post',
    },
    uploadProduct : {
        url : `${backendDomain}/api/upload-product`,
        method: 'post',
    },
    fetchAllProducts : {
        url : `${backendDomain}/api/all-product`,
        method: 'get',
    },
    updateProduct : {
        url : `${backendDomain}/api/update-product`,
        method: 'put',
    },
    fetchCategoryProducts : {
        url : `${backendDomain}/api/category-products`,
        method: 'post',
    },
    fetchProductDetails : {
        url : `${backendDomain}/api/fetch-products`,
        method: 'post',
    },
    addToCart : {
        url : `${backendDomain}/api/addTo-cart`,
        method: 'post',
    },
    countCartProducts : {
        url : `${backendDomain}/api/cart-product-count`,
        method: 'get',
    },
    fetchAllCartProducts : {
        url : `${backendDomain}/api/all-cart-products`,
        method: 'get',
    },
    deleteCartProduct : {
        url:`${backendDomain}/api/delete-cart`,
        method: 'delete',
    },
    updateCartProduct : {
        url:`${backendDomain}/api/update-cart-product`,
        method:'put',
    },
    searchProduct: {
        url:`${backendDomain}/api/search`,
        method:'get',
    }

}



export default summaryApi;