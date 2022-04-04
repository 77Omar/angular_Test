import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User = new User("", "")
  message: any;

  constructor(private service: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public loginNow(){
   /* if (this.user.username== "omar" && this.user.password== "password") {
      this.router.navigate(['/transaction']);
    }*/

    let resp= this.service.loginCheck(this.user);
    resp.subscribe((data:any)=> {
      console.log(data)
      this.message = data;
      //localStorage.setItem('tokens', data.accessToken);
      this.router.navigate(['/transaction']);
    });
  }

}
