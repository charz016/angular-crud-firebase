import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.scss']
})
export class CreateOfficeComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private officeService: OfficeService, private dialogRef: MatDialogRef<CreateOfficeComponent>,) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.officeService.createOffice(this.form.value).then(() => {
      this.dialogRef.close();
    })
  }

}
