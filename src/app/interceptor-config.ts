import {
  MsalInterceptorConfiguration,
  ProtectedResourceScopes,
} from '@azure/msal-angular';
import { InteractionType } from '@azure/msal-browser';
import {
  userProfileProtectedResource,
  productProtectedResource,
  cartWishlistProtectedResource,
  ordersProtectedResource,
} from './auth-config';

/**
 * MSAL Angular will automatically retrieve tokens for resources
 * added to protectedResourceMap. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#get-tokens-for-web-api-calls
 */
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<
    string,
    Array<string | ProtectedResourceScopes> | null
  >();

  protectedResourceMap.set(userProfileProtectedResource.api.endpoint, [
    {
      httpMethod: 'GET',
      scopes: [...userProfileProtectedResource.api.scopes.read],
    },
    {
      httpMethod: 'POST',
      scopes: [...userProfileProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'PUT',
      scopes: [...userProfileProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...userProfileProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...userProfileProtectedResource.api.scopes.write],
    },
  ]);

  protectedResourceMap.set(productProtectedResource.api.endpoint, [
    // {
    //   httpMethod: 'GET',
    //   scopes: [...productProtectedResource.api.scopes.read],
    // },
    {
      httpMethod: 'POST',
      scopes: [...productProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'PUT',
      scopes: [...productProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...productProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...productProtectedResource.api.scopes.write],
    },
  ]);

  protectedResourceMap.set(cartWishlistProtectedResource.api.endpoint, [
    {
      httpMethod: 'GET',
      scopes: [...cartWishlistProtectedResource.api.scopes.read],
    },
    {
      httpMethod: 'POST',
      scopes: [...cartWishlistProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'PUT',
      scopes: [...cartWishlistProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...cartWishlistProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...cartWishlistProtectedResource.api.scopes.write],
    },
  ]);

  protectedResourceMap.set(ordersProtectedResource.api.endpoint, [
    {
      httpMethod: 'GET',
      scopes: [...ordersProtectedResource.api.scopes.read],
    },
    {
      httpMethod: 'POST',
      scopes: [...ordersProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'PUT',
      scopes: [...ordersProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...ordersProtectedResource.api.scopes.write],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...ordersProtectedResource.api.scopes.write],
    },
  ]);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}
