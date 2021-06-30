import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeTableComponent } from './office-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    OfficeTableComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports:[OfficeTableComponent]
})
export class OfficeTableModule { }
