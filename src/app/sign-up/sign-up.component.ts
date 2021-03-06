import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  hasSaved: boolean = false;

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

  onEmailSignUp() {
    this.authService
      .signUpWithEmail(this.email.value, this.password.value)
      .then((res) => {
        this.hasSaved = true;
        window.alert('You have successfully signed up');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  canDeactive(): boolean {
    if (this.hasSaved) {
      return true;
    } else {
      const confirmResult = window.confirm(
        'Are you sure you wanna leave without saving ?'
      );
      return confirmResult ? true : false;
    }
  }
}
