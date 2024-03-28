import { ProductCategory } from 'src/app/models/category.model';
import { ProductModel } from 'src/app/models/product.model';

export const appConstants ={
  contactEmailId:'learnsmartcoding@gmail.com'
};
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
  { categoryId: 1, categoryName: 'Electronics' },
  { categoryId: 2, categoryName: 'Clothing' },
  { categoryId: 3, categoryName: 'Mobile' },
  // { categoryId: 1, categoryName: 'Fresh Meat' },
  // { categoryId: 2, categoryName: 'Vegetables' },
  // { categoryId: 3, categoryName: 'Fruit & Nut Gifts' },
  // { categoryId: 4, categoryName: 'Fresh Berries' },
  // { categoryId: 5, categoryName: 'Ocean Foods' },
  // { categoryId: 6, categoryName: 'Butter & Eggs' },
  // { categoryId: 7, categoryName: 'Fastfood' },
  // { categoryId: 8, categoryName: 'Fresh Onion' },
  // { categoryId: 9, categoryName: 'Papaya & Crisps' },
  // { categoryId: 10, categoryName: 'Oatmeal' },
  // { categoryId: 11, categoryName: 'Fresh Bananas' },
];

export const sampleProducts: ProductModel[] = [
  {
    productId: 7,
    productName: '4DV9 Mini Drone',
    productDescription:
      '4DV9 Mini Drone with 1080PHD Camera for Kids FPV Live Video RC Quadcopter Helicopter for Adults beginners Toys Gifts,Altitude Hold, Waypoints Functions,One Key Start,3D Flips,3 Batteries,Gray',
    price: 29.99,
    quantity: 8,
    categoryId: 1,
    productImages: [
      {
        imageId: 12,
        productId: 7,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_4DV9_Mini_Drone.jpg',
      },
      {
        imageId: 13,
        productId: 7,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_4DV9_Mini_Drone.jpg',
      },
      {
        imageId: 14,
        productId: 7,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_4DV9_Mini_Drone.jpg',
      },
    ],
  },
  {
    productId: 8,
    productName: '4DV9 Mini Drone',
    productDescription:
      '4DV9 Mini Drone with 1080PHD Camera for Kids FPV Live Video RC Quadcopter Helicopter for Adults beginners Toys Gifts,Altitude Hold, Waypoints Functions,One Key Start,3D Flips,3 Batteries,Gray',
    price: 29.99,
    quantity: 8,
    categoryId: 1,
    productImages: [
      {
        imageId: 15,
        productId: 8,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_4DV9_Mini_Drone_minidrone-1.jpg',
      },
      {
        imageId: 16,
        productId: 8,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_4DV9_Mini_Drone_minidrone-2.jpg',
      },
      {
        imageId: 17,
        productId: 8,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_4DV9_Mini_Drone_minidrone-3.jpg',
      },
    ],
  },
  {
    productId: 6,
    productName:
      'Dimur Sweaters for Women Trendy Long Sleeve Shirts Loose Fit Tunic Tops 2023',
    productDescription:
      "Casual long sleeve tops. Classical V neck, trendy button side detail. Comfortable fabric with loose fit style.\nInvisible stripe details enhance body shape. Classic v neck with decorative buttons, adding more charm!\nSuper comfortable with our soft, breathable lightweight fabric. Add this sweater to your wardrobe for style and comfort!\nVersatile for any occasion, whether it’s casual, work, or party. And it's easy to effortlessly pairing with a variety of outfits.\nConsult our Dimur Size Chart for perfect fit. Contact us for help or questions anytime.",
    price: 16.99,
    quantity: 15,
    categoryId: 2,
    productImages: [
      {
        imageId: 9,
        productId: 6,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/2_Dimur_Sweaters_for_Women_Trendy_Long_Sleeve_Shirts_Loose_Fit_Tunic_Tops_2023.jpg',
      },
      {
        imageId: 10,
        productId: 6,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/2_Dimur_Sweaters_for_Women_Trendy_Long_Sleeve_Shirts_Loose_Fit_Tunic_Tops_2023.jpg',
      },
      {
        imageId: 11,
        productId: 6,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/2_Dimur_Sweaters_for_Women_Trendy_Long_Sleeve_Shirts_Loose_Fit_Tunic_Tops_2023.jpg',
      },
    ],
  },
  {
    productId: 9,
    productName:
      'Dimur Sweaters for Women Trendy Long Sleeve Shirts Loose Fit Tunic Tops 2023',
    productDescription:
      "Casual long sleeve tops. Classical V neck, trendy button side detail. Comfortable fabric with loose fit style. Invisible stripe details enhance body shape. Classic v neck with decorative buttons, adding more charm! Super comfortable with our soft, breathable lightweight fabric. Add this sweater to your wardrobe for style and comfort! Versatile for any occasion, whether it’s casual, work, or party. And it's easy to effortlessly pairing with a variety of outfits. Consult our Dimur Size Chart for perfect fit. Contact us for help or questions anytime.",
    price: 16.99,
    quantity: 15,
    categoryId: 2,
    productImages: [
      {
        imageId: 18,
        productId: 9,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/2_Dimur_Sweaters_for_Women_Trendy_Long_Sleeve_Shirts_Loose_Fit_Tunic_Tops_2023_Dimur-Sweaters-for-Women-1.jpg',
      },
      {
        imageId: 19,
        productId: 9,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/2_Dimur_Sweaters_for_Women_Trendy_Long_Sleeve_Shirts_Loose_Fit_Tunic_Tops_2023_Dimur-Sweaters-for-Women-2.jpg',
      },
      {
        imageId: 20,
        productId: 9,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/2_Dimur_Sweaters_for_Women_Trendy_Long_Sleeve_Shirts_Loose_Fit_Tunic_Tops_2023_Dimur-Sweaters-for-Women-3.jpg',
      },
    ],
  },
  {
    productId: 5,
    productName: 'SAMSUNG Galaxy S24 Ultra Cell Phone 512GB AI Smartphone',
    productDescription:
      'CIRCLE & SEARCH¹ IN A SNAP: What’s your favorite influencer wearing? Where’d they go on vacation? What’s that word mean? Don’t try to describe it — use Circle to Search1 with Google to get the answer; With S24 Series, circle it on your screen and learn more\nREAL EASY, REAL-TIME TRANSLATIONS: Speak foreign languages on the spot with Live Translate²; Unlock the power of convenient communication with near real-time voice translations, right through your Samsung Phone app\nNOTE SMARTER, NOT HARDER: Focus on capturing your notes and spend less time perfecting them; Note Assist³ will summarize, format, and even translate them for you; All of your notes are organized neatly so that you can find what you need\nBRING DETAILS OUT OF THE DARKNESS: Brighten up your night with Nightography on S24 Ultra; Want a closer look? Zoom in from a distance, even in low light\nMORE WOW, LESS WORK: Turn every photo into a post-worthy masterpiece; Move or remove objects; Fill in empty space; Simply snap a pic and take it from great to jaw-dropping with Generative Edit⁴\nCAPTURE. SHARE. IMPRESS: Create crystal-clear content worth sharing; From bustling cityscape to a serene landscape, capture a masterpiece of detail with 200MP camera and let S24 Ultra adjust each hue and shade to reflect the world as you see it\nOUR MOST POWERFUL GALAXY SMARTPHONE YET: Jump seamlessly between apps without the wait and see content in high quality with our fastest processor yet, Snapdragon 8 Gen 3 for Galaxy⁵',
    price: 1419,
    quantity: 10,
    categoryId: 3,
    productImages: [
      {
        imageId: 1,
        productId: 5,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone.jpg',
      },
      {
        imageId: 2,
        productId: 5,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone.jpg',
      },
      {
        imageId: 3,
        productId: 5,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone.jpg',
      },
      {
        imageId: 4,
        productId: 5,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone.jpg',
      },
      {
        imageId: 5,
        productId: 5,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone.jpg',
      },
      {
        imageId: 6,
        productId: 5,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone.jpg',
      },
      {
        imageId: 7,
        productId: 5,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/1_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone.jpg',
      },
      {
        imageId: 8,
        productId: 5,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/3_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone.mp4',
      },
    ],
  },
  {
    productId: 10,
    productName: 'SAMSUNG Galaxy S24 Ultra Cell Phone 512GB AI Smartphone',
    productDescription:
      'CIRCLE & SEARCH¹ IN A SNAP: What’s your favorite influencer wearing? Where’d they go on vacation? What’s that word mean? Don’t try to describe it — use Circle to Search1 with Google to get the answer; With S24 Series, circle it on your screen and learn more REAL EASY, REAL-TIME TRANSLATIONS: Speak foreign languages on the spot with Live Translate²; Unlock the power of convenient communication with near real-time voice translations, right through your Samsung Phone app NOTE SMARTER, NOT HARDER: Focus on capturing your notes and spend less time perfecting them; Note Assist³ will summarize, format, and even translate them for you; All of your notes are organized neatly so that you can find what you need BRING DETAILS OUT OF THE DARKNESS: Brighten up your night with Nightography on S24 Ultra; Want a closer look? Zoom in from a distance, even in low light MORE WOW, LESS WORK: Turn every photo into a post-worthy masterpiece; Move or remove objects; Fill in empty space; Simply snap a pic and take it from great to jaw-dropping with Generative Edit⁴ CAPTURE. SHARE. IMPRESS: Create crystal-clear content worth sharing; From bustling cityscape to a serene landscape, capture a masterpiece of detail with 200MP camera and let S24 Ultra adjust each hue and shade to reflect the world as you see it OUR MOST POWERFUL GALAXY SMARTPHONE YET: Jump seamlessly between apps without the wait and see content in high quality with our fastest processor yet, Snapdragon 8 Gen 3 for Galaxy',
    price: 1419,
    quantity: 3,
    categoryId: 3,
    productImages: [
      {
        imageId: 21,
        productId: 10,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/3_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone_samsung-mobile-1.jpg',
      },
      {
        imageId: 22,
        productId: 10,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/3_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone_samsung-mobile-2.jpg',
      },
      {
        imageId: 23,
        productId: 10,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/3_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone_samsung-mobile-3.jpg',
      },
      {
        imageId: 24,
        productId: 10,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/3_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone_samsung-mobile-4.jpg',
      },
      {
        imageId: 25,
        productId: 10,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/3_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone_samsung-mobile-5.jpg',
      },
      {
        imageId: 26,
        productId: 10,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/3_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone_samsung-mobile-6.jpg',
      },
      {
        imageId: 27,
        productId: 10,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/3_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone_samsung-mobile-7.jpg',
      },
      {
        imageId: 28,
        productId: 10,
        imageUrl:
          'https://learnsmartcoding.blob.core.windows.net/products/images/3_SAMSUNG_Galaxy_S24_Ultra_Cell_Phone_512GB_AI_Smartphone_samsung-mobile-8-video.mp4',
      },
    ],
  },
];

// export const sampleProducts: ProductModel[] = [
//   {
//     productId: 1,
//     productName: 'Crab Pool Security',
//     productDescription:'',
//     price: 30.00,
//     quantity: 20,
//     categoryId: 1,
//     productImages: [
//       { imageId: 1, productId: 1, imageUrl: 'assets/img/featured/feature-1.jpg' },
//     ],
//   },
//   {
//     productId: 2,
//     productName: 'Banana',
//     productDescription:'',
//     price: 30.00,
//     quantity: 20,
//     categoryId: 3,
//     productImages: [
//       { imageId: 2, productId: 2, imageUrl: 'assets/img/featured/feature-2.jpg' },
//     ],
//   },
//   {
//     productId: 3,
//     productName: 'Gauva',
//     productDescription:'',
//     price: 30.00,
//     quantity: 20,
//     categoryId: 3,
//     productImages: [
//       { imageId: 3, productId: 3, imageUrl: 'assets/img/featured/feature-3.jpg' },
//     ],
//   },
//   {
//     productId: 4,
//     productName: 'Water Melon',
//     productDescription:'',
//     price: 30.00,
//     quantity: 20,
//     categoryId: 3,
//     productImages: [
//       { imageId: 4, productId: 4, imageUrl: 'assets/img/featured/feature-4.jpg' },
//     ],
//   },
//   {
//     productId: 5,
//     productName: 'Berry',
//     productDescription:'',
//     price: 30.00,
//     quantity: 20,
//     categoryId: 4,
//     productImages: [
//       { imageId: 5, productId: 5, imageUrl: 'assets/img/featured/feature-5.jpg' },
//     ],
//   },
//   {
//     productId: 6,
//     productName: 'Chicken Burger',
//     productDescription:'',
//     price: 30.00,
//     quantity: 20,
//     categoryId: 6,
//     productImages: [
//       { imageId: 6, productId: 6, imageUrl: 'assets/img/featured/feature-6.jpg' },
//     ],
//   },
//   {
//     productId: 7,
//     productName: 'Mango',
//     productDescription:'',
//     price: 30.00,
//     quantity: 20,
//     categoryId: 3,
//     productImages: [
//       { imageId: 7, productId: 7, imageUrl: 'assets/img/featured/feature-7.jpg' },
//     ],
//   },
//   {
//     productId: 8,
//     productName: 'Apple',
//     productDescription:'',
//     price: 30.00,
//     quantity: 20,
//     categoryId: 3,
//     productImages: [
//       { imageId: 8, productId: 8, imageUrl: 'assets/img/featured/feature-8.jpg' },
//     ],
//   },
//   // Add more sample products as needed
// ];
