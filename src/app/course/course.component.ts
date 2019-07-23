import { CourseService } from '../course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  title = "List of courses";
  count=30210;
  rating=4.9;
  currency="120.00";
  releseDate=new Date()
}
