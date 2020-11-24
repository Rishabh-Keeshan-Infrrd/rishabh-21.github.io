import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';
import {AuthResponseModel} from '../../shared/models/auth-response.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  signUp: FormGroup;
  user;

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
      this.signUp.get('email').value, this.signUp.get('password').value).subscribe(random =>
    { console.log(random);
      if (!random.message.endsWith('Sign-Up Successful')) {
        alert('Signup Failed \n ' + random.status);
        this.user.unsubscribe();
        this.signUp.reset();
      }else{
        alert('Signup Success \n ' + random.status);
      }
      location.reload();
    });
  }

}
