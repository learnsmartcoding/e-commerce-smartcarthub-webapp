export interface EnvironmentConfiguration {
    env_name: string;
    production: boolean;
    apiBaseUrl: string;
    apiEndpoints: {
      product:{
        getAllProduct:string; 
        getProduct:string;       
      }
    }
}