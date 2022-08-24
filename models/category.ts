import mongoose from "mongoose";
const { Schema } = mongoose;
const Category = new mongoose.Schema({
  name: String,
});
export default mongoose.models.category || mongoose.model("category", Category);
