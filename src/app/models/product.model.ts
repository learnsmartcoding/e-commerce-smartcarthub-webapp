export interface ProductModel {
    productId: number;
    productName: string;
    productDescription:string;
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
  