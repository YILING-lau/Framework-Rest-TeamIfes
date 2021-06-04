import { Component } from '@angular/core';
import { AuthenticationService } from './core/auth/auth.service';
import { User } from './core/auth/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentUser: User;
  title = 'Expenses Tracker';

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }
}
