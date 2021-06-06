import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/core/auth/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  currentUser: User | undefined;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  logout() {
    this.authenticationService.logout();
    this.currentUser = undefined;
    this.router.navigate(['/login']);
  }

  getMenuItems() {
    if (this.currentUser != null)
      return [
        {
          label: 'Dashboard',
          routerLink: ['/dashboard'],
          routerLinkActiveOptions: { exact: true },
        },
        {
          label: 'Expenses',
          routerLink: ['/expenses'],
          routerLinkActiveOptions: { exact: true },
        },
        {
          label: 'Logout',
          command: () => this.logout(),
        },
      ];
    else
      return [
        {
          label: 'Login',
          routerLink: ['/login'],
          routerLinkActiveOptions: { exact: true },
        },
      ];
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe((user) => {
      this.currentUser = user;
      this.items = this.getMenuItems();
    });
  }
}
