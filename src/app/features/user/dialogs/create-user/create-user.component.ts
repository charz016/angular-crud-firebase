import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private dialogRef: MatDialogRef<CreateUserComponent>,) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.userService.createUser(this.form.value).then(() => {
      this.dialogRef.close();
    })
  }

}
