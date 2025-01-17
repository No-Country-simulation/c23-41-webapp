import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { CacheService } from './cache.service';
import { of, tap } from 'rxjs';

export const cachingInterceptor: HttpInterceptorFn = (req, next) => {
  const cacheService = inject(CacheService);
  if (req.method !== 'GET') {
    return next(req);
  }

  const cacheKey = `${req.url}?${req.params.toString()}`;

  // Check if there is a valid cached response
  const cachedResponse = cacheService.get(cacheKey);

  
  if (cachedResponse) {
    
    return of(new HttpResponse({ body: cachedResponse, status: 200 }));
  }

  // If there is no cached response, continue with the HTTP request
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        cacheService.set(cacheKey, event.body); 
      }
    })
  );
};
