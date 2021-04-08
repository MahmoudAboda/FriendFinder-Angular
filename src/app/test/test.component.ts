import { Component, OnInit } from '@angular/core';
import { FriendService } from '../service/friend.service';
import { Post } from '../common/post';
import { Friend } from '../common/friend';
import { PostService } from '../service/post.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../common/user';
import { LoginComponent } from '../components/login/login.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private postService: PostService, private fb: FormBuilder) { }
  listOfPost1: Post[] = [];



  postForm!: FormGroup;


  ngOnInit(): void {

    this.postService.fetchAll().subscribe(Post => this.listOfPost1 = Post);
    this.postForm = this.fb.group({
      image: [''],
      like: [''],
      text: [''],

    });
  }

  handleSubmit() {
    this.postService.addPosts(this.postForm.value).subscribe();
    this.ngOnInit();
  }

}
