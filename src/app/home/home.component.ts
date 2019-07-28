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
  courses;
  viewMode = "home";

  task = {
    title: "checking the titlr",
    sub: {
      name: "chenna kesava",
      age: 23
    }
  }

  getCourses() {
    this.courses = [
      { id: 1, name: "React js" },
      { id: 2, name: "angular 4" },
      { id: 1, name: "React js" },
      { id: 2, name: "angular 4" },
      { id: 1, name: "React js" },
      { id: 2, name: "angular 4" },
    ];
  }

  canSave = false;

  addCourse() {
    this.courses.push({ id: 2, name: "vue js" })
  };

  trackCourse(index, course) {
    return course ? course.id : undefined
  }

  // handleDelete(course) {
  //   let index = this.courses.indexOf(course);

  //   this.courses.splice(index, 1)
  // }

  handleEdit(course) {
    let index = this.courses.indexOf(course);
    this.courses[index].name = "chenna kesava"
  }

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
  handleView(view) {
    this.viewMode = view
  }

}
