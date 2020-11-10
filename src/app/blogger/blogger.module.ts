import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReadPostComponent } from './read-post/read-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [DashboardComponent, ReadPostComponent, NewPostComponent, ProfileComponent],
  imports: [
    CommonModule
  ]
})
export class BloggerModule { }
