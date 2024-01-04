import { EnvironmentConfiguration } from "../app/models/environment-configuration";


const serverUrl='https://lsc-ecommerce-userprofile.azurewebsites.net/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'prod',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    userProfile:'user-profiles'
  },
  adb2cConfig: {
    clientId: '973ccf3e-e600-4b1c-b678-fad135c9c31e',
    readScopeUrl: 'https://learnsmartcoding.onmicrosoft.com/prod/smartcarthub/userprofile/api/UserProfile.Read',
    writeScopeUrl: 'https://learnsmartcoding.onmicrosoft.com/prod/smartcarthub/userprofile/api/UserProfile.Write',
    apiEndpointUrl: 'https://lsc-ecommerce-userprofile.azurewebsites.net/api/user-profiles'
  },
  cacheTimeInMinutes: 30,
};