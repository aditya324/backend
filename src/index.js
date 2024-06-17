

import dotenv from "dotenv"



import connectToDB from "./db/index.js";


dotenv.config({
    path:"./env"
})




connectToDB().then(()=>{
    app.listen(process.env.PORT |8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`
    })
}).catch((e)=>{
    console.log("Error connecting to database", e)
})







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