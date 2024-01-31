export interface ProductModel {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    categoryId: number;
    productImages: ProductImageModel[];
  }
  
  export interface ProductImageModel {
    imageId: number;
    productId: number;
    imageUrl: string;
  }
  