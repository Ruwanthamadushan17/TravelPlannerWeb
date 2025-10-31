import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@env/environment';

export const apiBaseInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('/api')) {
    req = req.clone({ url: environment.apiBaseUrl.replace(/\/$/, '') + req.url });
  }
  return next(req);
};