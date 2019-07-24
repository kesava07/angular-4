import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title: any;
  
  @Output() change = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  handleClcik() {
    this.change.emit()
  }

}
