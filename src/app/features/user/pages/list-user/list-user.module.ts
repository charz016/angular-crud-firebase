import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserPage } from './list-user.component';



@NgModule({
  declarations: [
    ListUserPage
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListUserPage
  ]
})
export class ListUserModule { }
