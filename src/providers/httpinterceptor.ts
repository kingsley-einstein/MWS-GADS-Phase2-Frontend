import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Encryption, SnackBarUtil } from '../utils';
import { AppState } from '../management/states';
import { Store } from '@ngrx/store';
import { LoadEnd } from '../management/actions';

@Injectable()
export class HttpInterceptorProvider implements HttpInterceptor {
  constructor(private encryption: Encryption, private snackbar: SnackBarUtil, private store: Store<AppState>) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    const req: HttpRequest<any> = request.clone({
      setHeaders: {
        'Authorization': token ? `Bearer ${this.encryption.decryptToken(token, 30)}` : 'Bearer no-token'
      }
    });
    return next.handle(req).pipe(tap((event) => {}, (errorResponse: HttpErrorResponse) => {
      this.store.dispatch(new LoadEnd());
      if (errorResponse.status === 401) {
        const { error } = errorResponse.error;
        this.snackbar.open(error);
        return new Error(error);
      }
      if (errorResponse.status === 500) {
        const { error } = errorResponse.error;
        console.log(error);
        this.snackbar.open(error);
        return new Error(error.message);
      }
      if (errorResponse.status === 404) {
        const { error } = errorResponse.error;
        this.snackbar.open(error);
        return new Error(error);
      }
      if (errorResponse.status === 400) {
        const { error } = errorResponse.error;
        this.snackbar.open(error);
        return new Error(error);
      } 
    }));
  }
}
