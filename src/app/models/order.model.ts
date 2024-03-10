export interface OrderModel {
    orderId: number;
    userId?: number;
    orderDate: Date;
    totalAmount: number;
    orderItemsModel?: OrderItemModel[];
    orderStatusesModel?: OrderStatusModel[];
  }
  
  export interface OrderItemModel {
    orderItemId: number;
    orderId?: number;
  
    productId: number;
  
    quantity: number;
    price: number;
    totalCost?: number;
  }
  
  export interface OrderStatusModel {
    statusId: number;
    orderId?: number;
    statusName: string;
  }
  