import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // null for Google users
  image: { type: String, default: '' },
  provider: { type: String, default: 'credentials' }, // 'credentials' | 'google'
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model('User',UserSchema)
export default User