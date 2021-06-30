import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfficePage } from './list-office.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { CreateOfficeModule } from '../../dialogs/create-office/create-office.module';
import { DeleteUserModule } from 'src/app/features/user/dialogs/delete-user/delete-user.module';
import { UpdateOfficeModule } from '../../dialogs/update-office/update-user.module';
import { OfficeTableModule } from '../../components/office-table/product-table.module';
import { DeleteOfficeModule } from '../../dialogs/delete-office/delete-office.module';



@NgModule({
  declarations: [
    ListOfficePage
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    CreateOfficeModule,
    DeleteOfficeModule,
    UpdateOfficeModule,
    OfficeTableModule,
  ],
  exports:[
    ListOfficePage
  ]
})
export class ListOfficeModule { }
