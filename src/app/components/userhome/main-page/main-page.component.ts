import { Component, OnInit, ElementRef, ViewChild, ContentChild, AfterContentInit, AfterViewInit, Input } from '@angular/core';
import { Post } from 'src/app/common/post';
import { PostService } from 'src/app/service/post.service';
import { ComentService } from 'src/app/service/coment.service';
import { Comment } from 'src/app/common/comment';
import { from } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  postid: string = "5";
  PostToBeUpdared: Post = new Post();
  PostAfterUpdated: Post = new Post();
  postbetween: Post = new Post();
  updatedForm: FormGroup;
  @Input() recipe: Post;
  textcont: string = "";
  likecontent: number = 0;
  changelikestate: boolean = true;

  constructor(private postService: PostService, private comentService: ComentService, private fc: FormBuilder) { }


  comment: Comment[] = [];
  listOfPost: Post[] = [];
  listofComments: Comment[] = [];
  postForm!: FormGroup;
  comm = '';
  sta = false;
  loadProperty(pos: any) {
    console.log(pos.id);
    console.log(pos.text);
  }
  ngOnInit(): void {
    this.postService.fetchAll().subscribe(Post => this.listOfPost = Post);
    this.comentService.fetchComments(5).subscribe(com => this.comment = com);
    this.postForm = this.fc.group({
      text: [''],

    });
    this.changelikestate = true;


    ;//clicked index


  }
  passIndexValue(index) {
    console.log("dsdsd" + index);
  }
  handleSubmitcomment(name: HTMLParagraphElement, text1: string) {
    this.postid = name.textContent;
    this.textcont = text1;
    this.postForm = this.fc.group({
      text: this.textcont,
      postid: this.postid
    });
  }
  handleSubmit() {
    this.comentService.addComments(this.postForm.value).subscribe();
    this.ngOnInit();
  }



  onUpdateLikes(id1: number, name1: HTMLParagraphElement) {
    this.likecontent = +name1.textContent;

    this.postService.findById(this.likecontent).subscribe(post => this.PostToBeUpdared = post);

  }

  onsave() {
    this.updatedForm.setValue({
      text: this.PostToBeUpdared.text,
      like: this.PostToBeUpdared.like + 1,
      comment: this.PostToBeUpdared.comment
    });
  }

  saveToLike() {
    if (+this.PostToBeUpdared.like % 2 == 0) {
      this.PostToBeUpdared.like = +this.PostToBeUpdared.like + 1;
      this.changelikestate = false;
    }
    else if (+this.PostToBeUpdared.like % 2 == 1) {
      this.PostToBeUpdared.like = +this.PostToBeUpdared.like - 1;
      this.changelikestate = true;
    }

    this.postService.update(this.PostToBeUpdared.id, this.PostToBeUpdared).subscribe();

  }




}
