import {v2 as cloudinary} from 'cloudinary'

 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        //upload on cloudinary
      const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })

        console.log("file uploaded on cloudinary",response.url);
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the locally saved temp file as upload failed
        return null
    }
}

export {uploadOnCloudinary}