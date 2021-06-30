import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Office } from 'src/app/models/office';
import { Product } from 'src/app/models/product';
import { OfficeService } from 'src/app/services/office.service';


@Component({
  selector: 'app-update-office',
  templateUrl: './update-office.component.html',
  styleUrls: ['./update-office.component.scss']
})
export class UpdateOfficeComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private officeService: OfficeService,
    private dialogRef: MatDialogRef<UpdateOfficeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { office: Office },
  ) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    })

  }

  ngOnInit(): void {
    this.form.patchValue({
      ...this.data.office
    })    
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.officeService.updateOffice(this.form.value, this.data.office.id).then(() => {
      this.dialogRef.close();
    })
  }

}
