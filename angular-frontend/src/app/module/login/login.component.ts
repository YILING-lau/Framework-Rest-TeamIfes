import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { get } from 'lodash-es';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading: boolean;
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    this.authenticationService
      .login(
        get(this.loginForm.value, 'email'),
        get(this.loginForm.value, 'password')
      )
      .subscribe((user) => this.router.navigate([this.returnUrl]));
  }

  ngOnInit(): void {
    this.loading = false;
    this.loginForm = new FormGroup({
      email: new FormControl(
        'My@email.com',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}
