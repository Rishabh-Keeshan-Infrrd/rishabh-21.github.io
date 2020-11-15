import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  signUp: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.signUp = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

}
