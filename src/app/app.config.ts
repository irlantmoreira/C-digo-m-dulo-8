import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-vdr7u144b0j680bm.us.auth0.com',
      clientId: 'K5n6pS73nDpNks7KZ7Wpdu3d3QfE6HEP',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://dev-vdr7u144b0j680bm.us.auth0.com/api/v2/',
        scope: 'openid profile email offline_access',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
  ],
};
