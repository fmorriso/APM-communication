import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../user/auth.service';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  pageTitle: string = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

  // collapse the "hamburger stack" if it is currently expanded.
  // Should be called on the click event of each navigation anchor.
  // Example:
  /*
       <li class="nav-item" routerLinkActive="active">
          <a (click)="collapseNav()" class="nav-link" [routerLink]="['/home']">Home</a>
       </li>
       <li class="nav-item" routerLinkActive="active">
           <a (click)="collapseNav()" class="nav-link" [routerLink]="['/about']">About</a>
       </li>
    */
  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      console.log('collapseNav in NavigationComponent clicking navbarToggler')
      this.navbarToggler.nativeElement.click();
    }
  }

  private navBarTogglerIsVisible() {
    const isVisible: boolean = (this.navbarToggler.nativeElement.offsetParent !== null);
    return isVisible;
  }
}
