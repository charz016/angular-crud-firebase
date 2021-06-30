import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(private userService: UserService,
    private dialogRef: MatDialogRef<DeleteUserComponent>,) {

  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.userService.deleteUser("123123").then(() => {
      this.dialogRef.close();
    })
  }

}
