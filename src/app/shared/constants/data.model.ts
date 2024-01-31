import { ProductCategory } from "src/app/models/category.model";
import { ProductModel } from "src/app/models/product.model";

// export const categories = [
//     { categoryId: 1, categoryName: 'Electronics' },
//     { categoryId: 2, categoryName: 'Clothing' },
//     { categoryId: 3, categoryName: 'Home and Kitchen' },
//     { categoryId: 4, categoryName: 'Books' },
//     { categoryId: 5, categoryName: 'Sports and Outdoors' },
//     { categoryId: 6, categoryName: 'Beauty and Personal Care' },
//     { categoryId: 7, categoryName: 'Toys and Games' },
//     { categoryId: 8, categoryName: 'Health and Wellness' },
//     { categoryId: 9, categoryName: 'Automotive' },
//     { categoryId: 10, categoryName: 'Furniture' },
//     // Add more categories as needed
//   ];
  
export const categories: ProductCategory[] = [
  { categoryId: 1, categoryName: 'Fresh Meat' },
  { categoryId: 2, categoryName: 'Vegetables' },
  { categoryId: 3, categoryName: 'Fruit & Nut Gifts' },
  { categoryId: 4, categoryName: 'Fresh Berries' },
  { categoryId: 5, categoryName: 'Ocean Foods' },
  { categoryId: 6, categoryName: 'Butter & Eggs' },
  { categoryId: 7, categoryName: 'Fastfood' },
  { categoryId: 8, categoryName: 'Fresh Onion' },
  { categoryId: 9, categoryName: 'Papaya & Crisps' },
  { categoryId: 10, categoryName: 'Oatmeal' },
  { categoryId: 11, categoryName: 'Fresh Bananas' },
];

export const sampleProducts: ProductModel[] = [
  {
    productId: 1,
    productName: 'Crab Pool Security',
    price: 30.00,
    quantity: 20,
    categoryId: 1,
    productImages: [
      { imageId: 1, productId: 1, imageUrl: 'assets/img/featured/feature-1.jpg' },
    ],
  },
  {
    productId: 2,
    productName: 'Banana',
    price: 30.00,
    quantity: 20,
    categoryId: 3,
    productImages: [
      { imageId: 2, productId: 2, imageUrl: 'assets/img/featured/feature-2.jpg' },
    ],
  },
  {
    productId: 3,
    productName: 'Gauva',
    price: 30.00,
    quantity: 20,
    categoryId: 3,
    productImages: [
      { imageId: 3, productId: 3, imageUrl: 'assets/img/featured/feature-3.jpg' },
    ],
  },
  {
    productId: 4,
    productName: 'Water Melon',
    price: 30.00,
    quantity: 20,
    categoryId: 3,
    productImages: [
      { imageId: 4, productId: 4, imageUrl: 'assets/img/featured/feature-4.jpg' },
    ],
  },
  {
    productId: 5,
    productName: 'Berry',
    price: 30.00,
    quantity: 20,
    categoryId: 4,
    productImages: [
      { imageId: 5, productId: 5, imageUrl: 'assets/img/featured/feature-5.jpg' },
    ],
  },
  {
    productId: 6,
    productName: 'Chicken Burger',
    price: 30.00,
    quantity: 20,
    categoryId: 6,
    productImages: [
      { imageId: 6, productId: 6, imageUrl: 'assets/img/featured/feature-6.jpg' },
    ],
  },
  {
    productId: 7,
    productName: 'Mango',
    price: 30.00,
    quantity: 20,
    categoryId: 3,
    productImages: [
      { imageId: 7, productId: 7, imageUrl: 'assets/img/featured/feature-7.jpg' },
    ],
  },
  {
    productId: 8,
    productName: 'Apple',
    price: 30.00,
    quantity: 20,
    categoryId: 3,
    productImages: [
      { imageId: 8, productId: 8, imageUrl: 'assets/img/featured/feature-8.jpg' },
    ],
  },
  // Add more sample products as needed
];
  