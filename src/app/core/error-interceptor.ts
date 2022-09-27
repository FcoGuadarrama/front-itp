import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {AuthenticationService} from "../../services/authentication.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private authService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if ([401,403].indexOf(err.status) !== -1) {
        this.authService.logout();
      }

      return throwError(err.error);
    }))
  }

}
