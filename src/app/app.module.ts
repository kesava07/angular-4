import { CourseService } from './course.service';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SummeryPipe } from './summery.pipe';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { InputFormatDirective } from './input-format.directive';
import { TemplateFormsComponent } from './template-forms/template-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    SummeryPipe,
    AboutComponent,
    HeaderComponent,
    NoPageFoundComponent,
    HomeComponent,
    TableComponent,
    ButtonComponent,
    CardComponent,
    InputFormatDirective,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "form", component: TemplateFormsComponent },
      { path: "**", component: NoPageFoundComponent }
    ]),
    HttpModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
