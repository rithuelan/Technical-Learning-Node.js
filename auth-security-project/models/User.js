import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // only for normal auth
  googleId: String,
  githubId: String,
});

export default mongoose.model("User", UserSchema);
