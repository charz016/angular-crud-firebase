import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-delete-office',
  templateUrl: './delete-office.component.html',
  styleUrls: ['./delete-office.component.scss']
})
export class DeleteOfficeComponent implements OnInit {

  constructor(private officeService: OfficeService,
    private dialogRef: MatDialogRef<DeleteOfficeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { id:string },)
     {

  }

  ngOnInit(): void {    
  }

  onSubmit() {
    this.officeService.deleteOffice(this.data.id).then(() => {
      this.dialogRef.close();
    })
  }

}
