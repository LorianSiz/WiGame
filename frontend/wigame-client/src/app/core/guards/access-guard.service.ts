import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.getUserName() == null) {
      this.router.navigate(['connexion'], { queryParams: { redirectURL: state.url } });
    } else {
      return true;
    }
  }
}
