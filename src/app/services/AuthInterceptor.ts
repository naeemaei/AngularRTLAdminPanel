import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
//import { AuthService } from './authService';

@Injectable({ providedIn: 'root' })

export class AuthInterceptor implements HttpInterceptor {
    constructor(/*private authService: AuthService*/) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = "";  //TODO this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}