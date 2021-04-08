import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import { User } from 'src/app/common/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = new User();
  msg = "";
  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    this.service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this.router.navigate(['/login']);
      },
      error => {
        console.log("exception occured");
        this.msg = error.error;
      }
    )
  }

}
