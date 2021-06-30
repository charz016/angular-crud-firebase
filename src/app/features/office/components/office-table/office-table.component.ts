import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Office } from 'src/app/models/office';

@Component({
  selector: 'office-table',
  templateUrl: './office-table.component.html',
  styleUrls: ['./office-table.component.scss']
})
export class OfficeTableComponent implements OnInit {

  @Input() offices: Office[] = [];

  @Output() update = new EventEmitter<Office>();

  @Output() delete = new EventEmitter<string>();



  displayedColumns = [
    'name',
    'actions',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(office: Office) {
    this.update.emit(office);

  }

  onDelete(id: string) {
    this.delete.emit(id);

  }

}
