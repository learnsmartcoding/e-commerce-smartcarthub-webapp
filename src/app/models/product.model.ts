export interface CartId{
  cartId?:number;
}
export interface ProductModel extends CartId {
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
  