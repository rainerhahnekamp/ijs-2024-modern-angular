import {HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, throwError} from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackbar = inject(MatSnackBar)

  return next(req).pipe(catchError(err => {
    snackbar.open(err)
    return throwError(() => err)
  }))
}

