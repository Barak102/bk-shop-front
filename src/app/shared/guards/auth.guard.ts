import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable, Subject } from 'rxjs';
import { UserDetailsService } from '../services/user-details.service';

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  private loginReady: boolean = true;

  constructor(
    private router: Router,
    private userDetailsService: UserDetailsService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    route: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const canActivateSubscription = new Subject<boolean>();

    this.userDetailsService.userDetails.subscribe((details) => {
      if (details !== null) {
        if (details === false) {
          this.router.navigate(["/login"]);
          canActivateSubscription.next(false);
        }
        canActivateSubscription.next(true);
      }
    });
    return canActivateSubscription;
  }
}
