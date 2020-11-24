import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
    on(){
      $('#overlay').css('display', 'block');
    }

  // tslint:disable-next-line:typedef
    off(){
      $('#overlay').css('display', 'none');
    }

    publish(): void{
    }
}
