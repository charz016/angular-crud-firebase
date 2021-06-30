import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(private userService: UserService,
    private dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { id:string },)
     {

  }

  ngOnInit(): void {    
  }

  onSubmit() {

    this.userService.deleteUser(this.data.id).then(() => {
      this.dialogRef.close();
    })
  }

}
