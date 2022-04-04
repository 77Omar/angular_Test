import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Transaction} from "../Transaction";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  trans: Transaction = new Transaction("", Date(), "")
  message: any;

  constructor(private service: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public addTransaction(){
    let resp = this.service.loginAddTrans(this.trans);
    resp.subscribe((data)=>{
      this.message = data
      this.router.navigate(['transaction'])
    });

  }
}
