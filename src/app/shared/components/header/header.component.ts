import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  newPostCheck = true;
  buttonString = 'New Post';
  NewPostComponent ;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  buttonModifier(): void{
    if (this.router.url === './new-post' ){
      this.newPostCheck = true;
      this.buttonString = 'PUBLISH';
    }
    else{
      this.newPostCheck = false;
      this.buttonString = 'New Post';
    }
  }

  onClick( element ): void{
    this.buttonModifier();
    element.textContent = this.buttonString;
    if(this.newPostCheck !== true){
      this.router.navigate(['/new-post']);
    }else{
      this.NewPostComponent
    }
  }
}
