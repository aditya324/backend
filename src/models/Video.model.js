import mongoose ,{Schema} from "mongoose"
import mongooseAggrigate from "mongoose-aggregate-paginate-v2"

const VideoSchema=new mongoose.Schema({
    videofile:{
        type:String,//cloudinary
        required:true
    },
    thumbnail:{
        type:String,//cloudinary
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,//cloudinary
        required:true
    },
    views:{
        type:Number,
        default:0,
        
    },
    ispublished:{
        type:Boolean,
        default:true,
    },
    Owener:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})


VideoSchema.plugin(mongooseAggrigate)


export const Video=mongoose.model("Video",VideoSchema)