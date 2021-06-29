import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CreateUserComponent } from '../../dialogs/create-user/create-user.component';

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
      this.users = data;
      this.loading=false;
    });
  }


  createUser() {
    this.dialog.open(CreateUserComponent);
  }

}
