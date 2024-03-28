export interface OrderModel {
    orderId: number;
    userId?: number;
    orderDate: Date;
    totalAmount: number;
    orderItems?: OrderItems[];
    orderItemsModel?:OrderItemsModel[],
    orderStatusesModel?: OrderStatusModel[];
  }
  
  export interface OrderItemsModel extends OrderItems{

  }

  export interface OrderItems {
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
  