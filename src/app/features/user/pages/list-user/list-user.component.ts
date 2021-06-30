import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CreateUserComponent } from '../../dialogs/create-user/create-user.component';
import { DeleteUserComponent } from '../../dialogs/delete-user/delete-user.component';
import { UpdateUserComponent } from '../../dialogs/update-user/update-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserPage implements OnInit {

  users: User[] = [];
  loading: boolean = true;

  constructor(private dialog: MatDialog, private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserList().subscribe((data: any) => {
      this.users = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        } as User
      });
    });
  }


  createUser() {
    this.dialog.open(CreateUserComponent);
  }

  UpdateUser(user: User) {
    this.dialog.open(UpdateUserComponent, { data: { user } });
  }

  deleteUser(id: string) {
    this.dialog.open(DeleteUserComponent, { data: { id } })
  }

}
