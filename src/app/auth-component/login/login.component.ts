import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../shared/services/auth/auth.service';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {AuthResponseModel} from '../../shared/models/AuthResponse.model';

class AuthResponse {
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Subscription;
  login: FormGroup;
  loginStatus: AuthResponseModel;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  onSubmit(): void {
    this.user = this.authenticationService.login(this.login.get('email').value, this.login.get('password').value)
      .subscribe(status => this.loginStatus = status);
    if (this.loginStatus.message.toString() === 'Login successful') {
      this.router.navigate(['./dashboard']);
    } else {
      alert('Invalid Login');
      this.login.reset();
      this.user.unsubscribe();
      this.router.navigate(['/auth']);
    }
  }
}
