import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  http:HttpClient) {}

  public loginCheck(user: any) {
    return this.http.post("http://localhost:9002/api/login", user,{responseType:'text' as 'json'});
  }

  public getTransaction (){
    return this.http.get("http://localhost:9002/api/transaction")
  }

  public loginAddTrans(trans: any) {
    return this.http.post("http://localhost:9002/api/transaction/create", trans,{responseType:'text' as 'json'});
  }

  public deleteTrans(id: any){
    return this.http.delete("http://localhost:9002/api/transaction/"+id);
  }
}
