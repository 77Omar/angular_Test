import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {AddTransactionComponent} from "./add-transaction/add-transaction.component";

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"transaction",component:TransactionComponent},
  {path:"transaction/create",component:AddTransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
