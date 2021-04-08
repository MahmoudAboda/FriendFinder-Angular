import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { LeftBarComponent } from './components/userhome/left-bar/left-bar.component';
import { RightBarComponent } from './components/userhome/right-bar/right-bar.component';
import { PublishComponent } from './components/userhome/publish/publish.component';
import { FriendsComponent } from './components/userhome/friends/friends.component';
import { CoolImagesComponent } from './components/userhome/cool-images/cool-images.component';
import { MainPageComponent } from './components/userhome/main-page/main-page.component';
import { TimeLinesComponent } from './components/time-lines/time-lines.component';
import { TimeLineComponent } from './components/time-lines/time-line/time-line.component';
import { TimeAboutComponent } from './components/time-lines/time-about/time-about.component';
import { TimeAlbumComponent } from './components/time-lines/time-album/time-album.component';
import { TimeFriendsComponent } from './components/time-lines/time-friends/time-friends.component';
import { TimeLineProfileComponent } from './components/time-lines/time-line-profile/time-line-profile.component';
import { TimeLineDetailsComponent } from './components/time-lines/time-line-details/time-line-details.component';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { FriendService } from './service/friend.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComentService } from './service/coment.service';
import { PostService } from './service/post.service';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/userhome/main-page/posts/posts.component';
import { CommentsComponent } from './components/userhome/main-page/comments/comments.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mainpage', component: MainPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'timeline', component: TimeLineComponent },
  { path: 'timeline-about', component: TimeAboutComponent },
  { path: 'timeline-friends', component: TimeFriendsComponent },
  { path: 'timeline-album', component: TimeAlbumComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: MainPageComponent },
]




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    ContactComponent,
    UserhomeComponent,
    LeftBarComponent,
    RightBarComponent,
    PublishComponent,
    FriendsComponent,
    CoolImagesComponent,
    MainPageComponent,
    TimeLinesComponent,
    TimeLineComponent,
    TimeAboutComponent,
    TimeAlbumComponent,
    TimeFriendsComponent,
    TimeLineProfileComponent,
    TimeLineDetailsComponent,
    TestComponent,
    LoginComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FriendService, ComentService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
