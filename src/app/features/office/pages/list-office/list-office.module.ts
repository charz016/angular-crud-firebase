import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfficePage } from './list-office.component';



@NgModule({
  declarations: [
    ListOfficePage
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListOfficePage
  ]
})
export class ListOfficeModule { }
