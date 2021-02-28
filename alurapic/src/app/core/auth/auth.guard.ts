import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../user/user.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

    constructor(private userService:UserService, private router:Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.userService.isLogged()) {
            var userName = this.userService.getUserName();
            this.router.navigate(['user',userName]);
            return false;
        }
        return true;
    }
}