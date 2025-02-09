import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { cachingInterceptor } from './core/cache/caching.interceptor';
import { corsInterceptor } from './core/interceptor/cors.interceptor';
import { MessageService } from 'primeng/api';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withViewTransitions({
    skipInitialTransition: false
  })), 
  provideAnimations(),
  provideHttpClient(
    withInterceptors([cachingInterceptor, corsInterceptor])
   ),
   MessageService
]
};
