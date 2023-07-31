import mongoose from "mongoose";
const kidsSchema = new mongoose.Schema({
  fullname: String,
  phone: String,
  email: String,
  password:String
});

 export const kidsDetails = mongoose.model("kidsdetails", kidsSchema);
 
//  export default kidsDetails;