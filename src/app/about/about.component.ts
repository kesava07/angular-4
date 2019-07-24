import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  todos: any[];
  buttonTitle = "Click in about";

  constructor(http: Http) {
    http.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(response => {
        this.todos = response.json();
      });
  }

  handleAboutClick() {
    console.log("hello the button was clicked in about page")
  }

}
