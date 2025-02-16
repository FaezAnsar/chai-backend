import {v2 as cloudinary} from 'cloudinary'
import { log } from 'console';
import fs from "fs"


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     secure: true
//   });
cloudinary.config({
    cloudinary_url: process.env.CLOUDINARY_URL
});

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        //upload on cloudinary
      const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })

        console.log("file uploaded on cloudinary",response.url);
        fs.unlinkSync(localFilePath);
        return response;
        
    } catch (error) {
        console.log(error)
        fs.unlinkSync(localFilePath)//remove the locally saved temp file as upload failed
        return null
    }
}

export {uploadOnCloudinary}