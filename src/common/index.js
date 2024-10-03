const backendDomain = "http://localhost:8080"
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
    }
    


}



export default summaryApi;