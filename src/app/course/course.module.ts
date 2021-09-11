import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CoursePageComponent } from './components/course-page/course-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    CourseItemComponent,
    CourseListComponent,
    CoursePageComponent
  ],
  exports: [
    CoursePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
