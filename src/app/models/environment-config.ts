export interface EnvironmentConfiguration {
  env_name: string;
  production: boolean;    
  apiBaseUrl: {
    userProfile: string;
    orders: string;
    carts:string;
    products: string;
  };
  apiScopeConfig: {
    product: {
      readScopeUrl: string[];
      writeScopeUrl: string[];
      apiEndpointUrl: string;
    };
    profile: {
      readScopeUrl: string[];
      writeScopeUrl: string[];
      apiEndpointUrl: string;
    };
    orders: {
      readScopeUrl: string[];
      writeScopeUrl: string[];
      apiEndpointUrl: string;
    };
    cartwishlist: {
      readScopeUrl: string[];
      writeScopeUrl: string[];
      apiEndpointUrl: string;
    };
  };
  cacheTimeInMinutes: number;
}
