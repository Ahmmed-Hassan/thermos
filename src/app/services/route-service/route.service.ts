import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouteService {
  private currentRoute = new Subject<string>();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute.next(event.url);
      }
    });
  }

  getCurrentRoute() {
    return this.currentRoute.asObservable();
  }
}
