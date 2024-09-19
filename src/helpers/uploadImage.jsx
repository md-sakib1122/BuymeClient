const url = `https://api.cloudinary.com/v1_1/dy4bvhofv/image/upload`
async function uploadImage(iamgeFile) {
   
    const formData = new FormData();
    formData.append('file', iamgeFile);
    formData.append('upload_preset' , "mern_product"); // preset is the folder name 

    const dataResponse = await fetch(url,{
        method: 'post',
        body: formData,
    })

  return dataResponse.json();
}

export default uploadImage