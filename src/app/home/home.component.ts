import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  todos: any[];
  buttonTitle = "Click in Home";

  constructor(http: Http) {
    http.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(response => {
        this.todos = response.json();
      });
  }

  handleHomeClick() {
    console.log("button was clicked in home page")
  }
  handleGetData(data) {
    alert(data.title)
  }

}
