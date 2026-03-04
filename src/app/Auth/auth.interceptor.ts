import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStorage } from '../../Services/auth-storage';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);
  const authStorage = inject(AuthStorage);
  const token = authStorage.getToken();

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    
       return next(cloned).pipe(
      catchError((err:HttpErrorResponse) => {
        if (err.status === 401) {  
          authStorage.clear();
          router.navigate(['/login']);
        }else if(err.status === 403){
          router.navigate(['/NotFound']);
        }
        return throwError(() => err);
      })
    );
  }
  return next(req);
}
