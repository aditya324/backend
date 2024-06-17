

import dotenv from "dotenv"



import connectToDB from "./db/index.js";


dotenv.config({
    path:"./env"
})




connectToDB()







// const app=express()


// ;(async()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log(error)
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })