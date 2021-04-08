import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/service/post.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  constructor(private post: PostService, private fb: FormBuilder, private router: Router
  ) { }
  postForm!: FormGroup;

  ngOnInit(): void {
    this.postForm = this.fb.group({
      text: [''],


    });
  }
  handleSubmit() {
    this.post.addPosts(this.postForm.value).subscribe();


  }




}
