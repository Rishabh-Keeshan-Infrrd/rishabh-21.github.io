import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {AuthResponseModel} from '../../shared/models/auth-response.model';
import {Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';

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
  loginStatus: AuthResponseModel = new AuthResponseModel();

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
      .subscribe(random => {
        console.log(random.message);
        if (random.message.endsWith('Login Successful')) {
          console.log(random.message);
          this.router.navigate(['./dashboard']);
        } else {
          alert('Invalid Login \n' + random.message);
          this.login.reset();
          this.user.unsubscribe();
          this.router.navigate(['/auth']);
        }
      } );
  }
}
