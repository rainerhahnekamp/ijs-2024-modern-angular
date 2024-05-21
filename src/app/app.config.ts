import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import { provideClientHydration } from '@angular/platform-browser';
import {errorInterceptor} from "./error.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch(), withInterceptors([errorInterceptor])),
    provideRouter(routes),
    provideAnimationsAsync(), provideClientHydration()]
};
