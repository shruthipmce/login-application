import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  
  {path:'homepage', component:HomePageComponent,
    children: [
      {path:'addStudent', component:AddStudentComponent},
      {path:'listStudents', component:ListStudentsComponent},
      {path:'charts', component:ChartsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
