
import 'dotenv/config'

import connectDB from './db/index.js';
import { app } from './app.js';

connectDB ().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(  `server is running at port : ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("Mongodb connection failed",err)
})
// import express from "express"
// const app = express()
// (async()=>{
// try{
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",(error)=>{
//     console.log("err:",error);
//     throw error
//    })
//    app.listen(process.env.PORT,()=>{
//     console.log(    `App is listening on port ${process.env.PORT}`);
//    })
// }catch(error){
//     console.error("error:",error);
//     throw error
    
// }

// })()