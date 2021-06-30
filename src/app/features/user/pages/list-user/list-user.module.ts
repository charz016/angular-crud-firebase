import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserPage } from './list-user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { CreateUserModule } from '../../dialogs/create-user/create-user.module';
import { UserTableModule } from '../../components/user-table/user-table.module';
import { UpdateUserModule } from '../../dialogs/update-user/update-user.module';
import { DeleteUserModule } from '../../dialogs/delete-user/delete-user.module';



@NgModule({
  declarations: [
    ListUserPage
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    CreateUserModule,
    UserTableModule,
    UpdateUserModule,
    DeleteUserModule,
  ],
  exports:[
    ListUserPage
  ]
})
export class ListUserModule { }
