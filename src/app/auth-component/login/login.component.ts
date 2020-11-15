import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

}
