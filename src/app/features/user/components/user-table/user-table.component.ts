import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @Input() users: User[] = [];

  @Output() update = new EventEmitter<User>();

  @Output() delete = new EventEmitter<string>();



  displayedColumns = [
    'name',
    'user',
    'actions',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(user: User) {
    this.update.emit(user);

  }

  onDelete(id: string) {
    this.delete.emit(id);

  }

}
