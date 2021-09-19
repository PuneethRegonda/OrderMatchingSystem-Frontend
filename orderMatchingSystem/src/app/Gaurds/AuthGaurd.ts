import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGaurd implements CanActivate{
    constructor(private loginservice: LoginService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    :boolean{

        if(this.loginservice.isauthenticate())
        return true;

        else this.router.navigate(['/login']);

        return false;

    }
}