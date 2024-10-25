import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'SEU-DOMINIO',
      clientId: 'SEU-CLIENT-ID',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'SEU-AUDIENCE',
        scope: 'openid profile email offline_access',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
  ],
};
