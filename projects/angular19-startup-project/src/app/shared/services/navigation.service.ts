import { Injectable, inject } from '@angular/core';
import { NavigationBehaviorOptions, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private router = inject(Router);

  navigateByUrl(url: string | UrlTree, extras?: NavigationBehaviorOptions): Promise<boolean> {
    return this.router.navigateByUrl(url, extras);
  }
}
