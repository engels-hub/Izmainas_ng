import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { ImportantViewComponent } from './important-view/important-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/student', pathMatch:'full'},
  {path:'student', component: StudentViewComponent},
  {path:'teacher', component: TeacherViewComponent},
  {path:'important', component: ImportantViewComponent},
  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [StudentViewComponent, TeacherViewComponent];