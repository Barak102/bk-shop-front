import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  private loginReady: boolean = true;

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    route: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.loginReady) {
      return true;
    } else {
      this.router.navigate(["/login"]);
    }
    return true;
  }
}
