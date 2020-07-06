import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else {
        this.userDetails = null;
        console.log('no login');
      }
    });
  }

  signInWithGithub() {
    return this._firebaseAuth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }

  signInWithGoogle() {
    return this._firebaseAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithFacebook() {
    return this._firebaseAuth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  signInWithEmail(email: string, password: string) {
    return this._firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  signUpWithEmail(email: string, password: string) {
    return this._firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  getCurrentUserInfo() {
    return this.userDetails;
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this._firebaseAuth.signOut().then((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }
}
