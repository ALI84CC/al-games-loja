import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  if(localStorage.getItem("token") != null){
    return true
  }

router.navigate(['/login'])
  return false;
};
