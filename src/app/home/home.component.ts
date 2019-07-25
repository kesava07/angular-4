import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { selectedTableData } from '../table/table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  todos: any[];
  buttonTitle = "Click in Home";
  courses=[1,2];

  constructor(http: Http) {
    http.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(response => {
        this.todos = response.json();
      });
  }

  handleHomeClick() {
    console.log("button was clicked in home page")
  }
  handleDeleteData(eventArgs: selectedTableData, http: Http) {
    // if (eventArgs && eventArgs.id) {
    //   http.delete(`https://jsonplaceholder.typicode.com/posts/${eventArgs.id}`)
    //     .subscribe(res => {
    //       console.log(res)
    //     })
    // }
    console.log(eventArgs);
  }

}
