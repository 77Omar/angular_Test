import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  trans: any;
  constructor(private service: LoginService) { }

  public delteTransaction(id:number){
    let resp= this.service.deleteTrans(id);
    resp.subscribe((data)=>this.trans=data);
  }
  ngOnInit(): void {
    let res= this.service.getTransaction();
    res.subscribe((data) => this.trans = data);
  }
}
