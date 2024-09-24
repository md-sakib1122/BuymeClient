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
    }
    


}



export default summaryApi;