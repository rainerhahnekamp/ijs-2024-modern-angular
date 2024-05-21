import {CanMatch, CanMatchFn, GuardResult, MaybeAsync, Route, UrlSegment} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {inject} from "@angular/core";

export const backendGuard: CanMatchFn = (route, segments) => {
  const httpClient = inject(HttpClient)
  return httpClient.get('http://localhost:8080/heartbeat').pipe(map(() => true))
}
