import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('tableData') data: any[];

  @Output("clickButton") clicked = new EventEmitter();

  selected: any

  constructor() { }

  ngOnInit() {

  }
  handlePassData(data) {
    this.clicked.emit(data)
  }
}

export interface selectedTableData {
  userId: number,
  id: number,
  title: string,
  body: string
};
