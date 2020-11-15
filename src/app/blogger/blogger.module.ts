import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReadPostComponent } from './read-post/read-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ProfileComponent } from './profile/profile.component';
import { BloggerComponent } from './blogger.component';
import {HeaderComponent} from '../shared/components/header/header.component';



@NgModule({
  declarations: [DashboardComponent, ReadPostComponent, NewPostComponent, ProfileComponent, BloggerComponent, HeaderComponent],
    exports: [
        DashboardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BloggerModule { }
