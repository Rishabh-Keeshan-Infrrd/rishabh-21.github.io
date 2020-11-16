import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';
import {AuthResponseModel} from '../../shared/models/AuthResponse.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  signUp: FormGroup;
  user: Subscription;
  signupStatus: {status: boolean};

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.signUp = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(18)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(): void{
    this.user = this.authenticationService.signup(this.signUp.get('name').value,
      this.signUp.get('email').value, this.signUp.get('password').value).subscribe(status => this.signupStatus = status);
    if (this.signupStatus.status === true) {
      this.router.navigate(['./dashboard']);
    } else {
      alert('Signup Failed');
      this.user.unsubscribe();
      this.signUp.reset();
      this.router.navigate(['/auth']);
    }
  }

}
