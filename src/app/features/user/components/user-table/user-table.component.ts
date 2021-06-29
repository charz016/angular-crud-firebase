import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @Input() users: User[] = [];


  displayedColumns = [
    'name',
    'user',
    'actions',
];

  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(e: any) {

  }

  onDelete(e: any) {

  }

}
