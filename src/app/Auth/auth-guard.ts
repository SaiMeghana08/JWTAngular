import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStorage } from '../../Services/auth-storage';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authStorage = inject(AuthStorage);

  // 1️⃣ Check token
  const token = authStorage.getToken();

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // 2️⃣ Get roles allowed for this route
  const allowedRoles = route.data['roles'] as string[];

  if (allowedRoles) {

    // 3️⃣ Get current user role
   const userRoles = authStorage.getRoles(); // example: ["ADMIN"]

    // 4️⃣ Check if role matches
    const match = allowedRoles.some(role => userRoles.includes(role));

    if (match) {
      return true;
    } else {
      router.navigate(['/NotFound']);
      return false;
    }
  }

  return true;
};