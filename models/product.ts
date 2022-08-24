import mongoose from "mongoose";
const { Schema } = mongoose;
const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  images: [{ src: String }],
  description: String,
  price: String,
  veg: Number,
  ingredients: String,
  contains: String,
  nutritionValues: {
    servingSize: String,
    servingsPerContainer: String,
    amountPerServing: {
      calories: Number,
      totalFat: String,
      saturatedFat: String,
      transFat: String,
      cholesterol: String,
      sodium: String,
      totalCarbohydrate: String,
      dietaryFiber: String,
      sugars: String,
      protein: String,
    },
  },
});
export default mongoose.models.product || mongoose.model("product", Product);
