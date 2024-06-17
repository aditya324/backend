import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";



const connectToDB = async ()=>{
 try {
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log("mongodb connceted")
 } catch (error) {
    console.log(error)
    process.exit(1)
 }
}


export default connectToDB;