import { Component, OnInit } from '@angular/core';
import {DataService} from '../api/data.service';
import { RouterModule,Routes, Router } from '@angular/router';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  myDate?:any;
  myTime: Date = new Date();
  minTime: Date = new Date();
  maxTime: Date = new Date();
  selected = 'option2';
  title = '';
  descp='';
  priority='';
  date='';
  isSuccess = false;
  isFailed = false;
  msg = '';
  interval?:any;
  constructor(private serv: DataService,private router: Router) { 
    this.minTime.setHours(8);
    this.minTime.setMinutes(0);
    this.maxTime.setHours(23);
    this.maxTime.setMinutes(55);
    this.msg = "hello";
  }

  ngOnInit(): void {
  }

  createTask(){
    let user_id = localStorage.getItem('userObj');
    let date = this.myDate;
    let time = this.myTime.toLocaleTimeString('en-US').toString();
    console.log(time);
    
    this.serv.createTasks(
      this.title,
      this.descp,
      this.priority,
      this.myDate,
      time,
      user_id
    ).subscribe((data)=>{
      console.log(data);
      if(data.msg == "success"){
        this.msg = "Task has been created successfully";
        this.isSuccess = ! this.isSuccess;
        setTimeout(() => {
          console.log('hide');
           this.router.navigate(['tasks']);
        }, 1000);
       
        
      }  
      else{
        this.msg = "Something went wrong. Please refresh and try again.";
        this.isFailed = ! this.isFailed;
      }
      
    },error=>{
      
      console.log(error.error.msg.name);
      this.msg = error.error.msg.name + "."+" Please fill all the required fields.";
      this.isFailed = ! this.isFailed;
      setTimeout(() => {
        console.log('hide');
        this.isFailed = false;
      }, 2000);
    })
    
  }

}
