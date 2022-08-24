export interface Product {
  name: string;
  category: string;
  images: Image[];
  description: string;
  price: string;
  veg: number;
  ingredients: string;
  contains: string;
  nutritionValues: NutritionValues;
  _id: string;
  __v: number;
}

export interface Image {
  src: string;
  _id: string;
}

export interface NutritionValues {
  servingSize: string;
  amountPerServing: AmountPerServing;
}

export interface AmountPerServing {
  calories: number;
  totalFat: string;
  saturatedFat: string;
  transFat: string;
  sodium: string;
  totalCarbohydrate: string;
  dietaryFiber: string;
  sugars: string;
  protein: string;
}
export interface User {
  username: string;
  password: string;
}
