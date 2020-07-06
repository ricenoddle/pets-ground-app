import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a your email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter Your Password';
    }
  }

  onGoogleSignIn() {
    this.authService.signInWithGoogle().then((res) => {
      this.router.navigate(['/']);
    });
  }

  onGithubSignIn() {
    this.authService.signInWithGithub().then((res) => {
      this.router.navigate(['/']);
    });
  }

  onFacebookSignIn() {
    this.authService.signInWithFacebook().then((res) => {
      this.router.navigate(['/']);
    });
  }

  onEmailSignIn() {
    this.authService
      .signInWithEmail(this.email.value, this.password.value)
      .then((res) => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
