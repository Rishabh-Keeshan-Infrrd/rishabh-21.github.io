import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  selector = 0;

  constructor() {
  }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  loadSignUpComponent(){
    this.selector = 1;
  }

  // tslint:disable-next-line:typedef
  loadLogInComponent(){
    this.selector = 0;
  }

}
