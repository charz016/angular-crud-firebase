import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { user: User },
  ) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
    console.log(this.data.user);
    
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.userService.updateUser(this.form.value, "123123").then(() => {
      this.dialogRef.close();
    })
  }

}
