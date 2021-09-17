import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {ActiveTasksComponent} from './active-tasks/active-tasks.component';
import {CompletedTasksComponent} from './completed-tasks/completed-tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ViewTaskComponent } from './view-task/view-task.component';



const MaterialConponents = [
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatTabsModule,
  MatChipsModule,
  MatBadgeModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressBarModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TasksComponent,
    ActiveTasksComponent,
    CompletedTasksComponent,
    NewTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialConponents,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
