import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { get } from 'lodash-es';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      confirmPassword: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      let email = get(this.registerForm.value, 'email');
      let name = get(this.registerForm.value, 'name');
      let password = get(this.registerForm.value, 'password');
      let confirmPassword = get(this.registerForm.value, 'confirmPassword');

      if (password.length < 8) {
        Swal.fire({
          icon: 'error',
          title: 'Password Too Short',
          text: 'The password you entered is too short, please try again',
          didClose: () => {
            // this.registerForm.reset();
          },
        });
      } else {
        if (password.search(/[a-z]/i) < 0) {
          Swal.fire({
            icon: 'error',
            title: 'No Letter Found',
            text: 'Your password must contain at least one letter, please try again',
            didClose: () => {
              // this.registerForm.reset();
            },
          });
        } else {
          if (password.search(/[0-9]/) < 0) {
            Swal.fire({
              icon: 'error',
              title: 'No Digit Found',
              text: 'Your password must contain at least one digit, please try again',
              didClose: () => {
                // this.registerForm.reset();
              },
            });
          } else {
            if (password !== confirmPassword) {
              Swal.fire({
                icon: 'error',
                title: 'Password Mismatched',
                text: 'The password you entered did not match the confirm password entered, please try again',
                didClose: () => {
                  this.registerForm.reset();
                },
              });
            } else {
              this.createAccount({
                email,
                name,
                password,
              });
            }
          }
        }
      }
      
    }
  }

  createAccount(requestBody: any) {
    return this.httpClient
      .post(`${environment.apiUrl}/user/create`, requestBody)
      .subscribe((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Account Created Succssfully',
          text: 'Your account has been created, please login',
          didClose: () => {
            this.router.navigate(['/login']);
          },
        });
      });
  }
}
