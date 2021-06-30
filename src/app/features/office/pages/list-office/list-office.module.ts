import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfficePage } from './list-office.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ListOfficePage
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  exports:[
    ListOfficePage
  ]
})
export class ListOfficeModule { }
