import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {TasksComponent} from './tasks/tasks.component';
import {NewTaskComponent} from '../app/new-task/new-task.component';
import {ViewTaskComponent} from '../app/view-task/view-task.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'view-task', component: ViewTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


