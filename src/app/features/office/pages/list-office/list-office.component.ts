import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Office } from 'src/app/models/office';
import { OfficeService } from 'src/app/services/office.service';
import { CreateOfficeComponent } from '../../dialogs/create-office/create-office.component';
import { DeleteOfficeComponent } from '../../dialogs/delete-office/delete-office.component';
import { UpdateOfficeComponent } from '../../dialogs/update-office/update-office.component';

@Component({
  selector: 'list-office',
  templateUrl: './list-office.component.html',
  styleUrls: ['./list-office.component.scss']
})
export class ListOfficePage implements OnInit {

  offices: Office[] = [];
  loading: boolean = true;

  constructor(private dialog: MatDialog, private officeService: OfficeService) { }

  ngOnInit(): void {
    this.officeService.getOfficeList().subscribe((data: any) => {
      this.offices = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        } as Office
      });
    });
  }

  createOffice() {
    this.dialog.open(CreateOfficeComponent);
  }

  deleteOffice(id: string) {
    this.dialog.open(DeleteOfficeComponent,{ data: { id } });
  }

  updateOffice(office: Office) {
    this.dialog.open(UpdateOfficeComponent,{ data: { office } })
  }

}
