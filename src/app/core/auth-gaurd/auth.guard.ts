import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {AuthenticationService} from '../../shared/services/auth/auth.service';
import {User} from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser: User = this.authenticationService.currentUserValue;
    if (currentUser.email != null) {
      this.router.navigate(['./dashboard']);
      return true;
    }
    this.router.navigate(['./auth']);
    return false;
  }

}
