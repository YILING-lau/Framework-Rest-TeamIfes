import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { get } from 'lodash-es';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    console.log(
      'JSON.parse => ',
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get isAuthenticated(): boolean {
    return this.currentUserValue != null;
  }

  login(email: string, password: string) {
    console.log(
      `login + email => ${email} + password => ${password} + environment => ${environment.apiUrl}/user/login`
    );
    return this.http
      .post<any>(`${environment.apiUrl}/user/login`, {
        email,
        password,
      })
      .pipe(
        map((response) => {
          console.log('did i get here');
          if (get(response, 'success', false)) {
            // let jwtToken = get(response, 'data.jwtToken');
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let user = get(response, 'data');
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          }
          return null;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
