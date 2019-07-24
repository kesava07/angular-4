import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: any[];

  @Output() clicked = new EventEmitter();

  selected: any

  constructor() { }

  ngOnInit() {

  }
  handlePassData(data) {
    this.clicked.emit(data)
  }
}
