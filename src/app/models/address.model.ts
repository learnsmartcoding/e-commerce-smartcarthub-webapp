export interface AddressModel {
    addressId: number;
    userId: number;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    isShippingAddress: boolean;
}
