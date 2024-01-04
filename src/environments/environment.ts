// // This file can be replaced during build by using the `fileReplacements` array.
// // `ng build` replaces `environment.ts` with `environment.prod.ts`.

// import { EnvironmentConfiguration } from "../app/models/environment-configuration";



// const localhostUrl = 'https://localhost:7262/api';
// const serverUrl='https://lsc-ecommerce-userprofile.azurewebsites.net/api';

// // The list of file replacements can be found in `angular.json`.
// export const environment: EnvironmentConfiguration = {
//   env_name: 'dev',
//   production: false,
//   apiUrl: localhostUrl,
//   apiEndpoints: {
//     userProfile:'user-profiles'
//   },
//   adb2cConfig: {
//     clientId: '0f5f0c1f-2df9-4f6f-a8e3-3550371d3ed4',
//     readScopeUrl: 'https://learnsmartcoding.onmicrosoft.com/smartcarthub/userprofile/api/UserProfile.Read',
//     writeScopeUrl: 'https://learnsmartcoding.onmicrosoft.com/smartcarthub/userprofile/api/UserProfile.Write',
//     apiEndpointUrl: 'https://localhost:7262/api/user-profiles'
//   },
//   cacheTimeInMinutes: 30,
// };

// /*
//  * For easier debugging in development mode, you can import the following file
//  * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
//  *
//  * This import should be commented out in production mode because it will have a negative impact
//  * on performance if an error is thrown.
//  */
// // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

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