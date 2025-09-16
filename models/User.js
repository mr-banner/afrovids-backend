import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  bio:{type:String},
  phone:{type:String},
  location:{type: String},
  name: { type: String },
  avatar: { type: String },
}, { timestamps: true });

export default mongoose.model("User", userSchema);