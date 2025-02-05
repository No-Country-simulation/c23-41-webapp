import { HttpInterceptorFn } from '@angular/common/http';

export const corsInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedRequest = req.clone({
    headers: req.headers.set('X-Requested-With', 'XMLHttpRequest'),
    withCredentials: true,
  });
  return next(modifiedRequest);
};
