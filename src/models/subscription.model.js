import mongoose, {Schema} from "mongoose";



const subscriptionSchema = new Schema({
    subscribe:{
        type:Schema.Types.ObjectId,//one who subscribes
        ref:"User"
    },

    channel:{
        type:Schema.Types.ObjectId,//the one who is subscribed to
        ref:"User"
    }
},{timestamps:true});





export default mongoose.model("Subscription", subscriptionSchema);