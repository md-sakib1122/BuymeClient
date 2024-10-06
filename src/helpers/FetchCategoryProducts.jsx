import React from 'react'
import summaryApi from '../common'

async function FetchCategoryProducts(category) {
   
    const response  = await fetch(summaryApi.fetchCategoryProducts.url,{
        method: summaryApi.fetchCategoryProducts.method,
        credentials: 'include',  // Include cookies in requests
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({category}),
    })

    const dataResponse = await response.json();

    return dataResponse.data;
}

export default FetchCategoryProducts