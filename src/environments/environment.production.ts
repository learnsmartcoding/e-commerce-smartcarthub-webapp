// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.

import { EnvironmentConfiguration } from 'src/app/models/environment-config';

const userProfileUrl = 'https://localhost:7262/api';
const productUrl = 'https://localhost:7086/api';
const orderUrl = 'https://localhost:7208/api';
const cartWishlistUrl='https://localhost:7292/api';
const adb2cProfileApiScopeBasePath='https://learnsmartcoding.onmicrosoft.com/smartcarthub/userprofile/api';
const adb2cProductApiScopeBasePath='https://learnsmartcoding.onmicrosoft.com/smartcarthub/product/api';
const adb2cOrderApiScopeBasePath='https://learnsmartcoding.onmicrosoft.com/smartcarthub/orders/api';
const adb2cCartWishlistApiScopeBasePath='https://learnsmartcoding.onmicrosoft.com/smartcarthub/carts/api';

// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'production',
  production: true,
  cacheTimeInMinutes: 30,
  apiScopeConfig: {
    product: {
      readScopeUrl: [
        `${adb2cProductApiScopeBasePath}/Product.Read`,
        `${adb2cProductApiScopeBasePath}/ProductReview.Read`,
      ],
      writeScopeUrl: [
        `${adb2cProductApiScopeBasePath}/Product.Write`,
        `${adb2cProductApiScopeBasePath}/ProductReview.Write`
      ],
      apiEndpointUrl: `${productUrl}`,
    },
    profile: {
      readScopeUrl: [
        `${adb2cProfileApiScopeBasePath}/UserProfile.Read`,
        `${adb2cProfileApiScopeBasePath}/UserActivity.Read`,
        `${adb2cProfileApiScopeBasePath}/Address.Read`,
      ],
      writeScopeUrl: [
        `${adb2cProfileApiScopeBasePath}/UserProfile.Write`,
        `${adb2cProfileApiScopeBasePath}/UserActivity.Write`,
        `${adb2cProfileApiScopeBasePath}/Address.Write`,
      ],
      apiEndpointUrl: `${userProfileUrl}`,
    },
    orders: {
      readScopeUrl: [
        `${adb2cOrderApiScopeBasePath}/Order.Read`,
      ],
      writeScopeUrl: [
        `${adb2cOrderApiScopeBasePath}/Order.Write`
      ],
      apiEndpointUrl: `${orderUrl}/orders`,
    },
    cartwishlist: {
      readScopeUrl: [
        `${adb2cCartWishlistApiScopeBasePath}/Cart.Read`,
        `${adb2cCartWishlistApiScopeBasePath}/Wishlist.Read`
      ],
      writeScopeUrl: [
        `${adb2cCartWishlistApiScopeBasePath}/Cart.Write`,
        `${adb2cCartWishlistApiScopeBasePath}/Wishlist.Write`
      ],
      apiEndpointUrl: `${cartWishlistUrl}/carts`,
    },
  },
  apiBaseUrl: {
    userProfile: userProfileUrl,
    orders: orderUrl,
    carts: cartWishlistUrl,
    products: productUrl
  }
};
