import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/service/registration.service';
import { User } from 'src/app/common/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }
  loginUser() {
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this.router.navigate(['/mainpage']);
      },
      error => {
        console.log("exeception occured");
        this.msg = "Bad credentials,Please enter valid email and password";
      }
    )

  }
  gotoregistration() {
    this.router.navigate(['/signup'])
  }

}
