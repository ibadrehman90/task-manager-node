import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from "@angular/router";
import {DataService} from '../api/data.service';
import { RouterModule,Routes, Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  myDate?:any;
  myTime: Date = new Date();
  minTime: Date = new Date();
  maxTime: Date = new Date();
  selected = 'option2';
  isUpdate: boolean;
  title?: string;
  descp?: string;
  id = '';
  time?:string;
  items?: any;
  isSuccess = false;
  isFailed = false;
  msg = '';
  isUser:boolean = false;
  isCompleted:boolean;
  constructor(private modalService: BsModalService,private route: ActivatedRoute,private serv: DataService,private router: Router) {
    this.minTime.setHours(8);
    this.minTime.setMinutes(0);
    this.maxTime.setHours(23);
    this.maxTime.setMinutes(55);
    this.isUpdate = false;
    this.title = "This is a sample task that needs to be completed...";
    this.descp = "In this task we need to send out emails and then also follow up with the client.";
    this.route.queryParams.subscribe(params => {
    this.id = params["id"];
    console.log(this.id);
    this.isUser = true;
     
    });
   }

  ngOnInit(): void {
    let checkUser;
    this.serv.getSingleTask(this.id).subscribe((data)=>{
      console.log(data);
      checkUser = data.task.user_id;
      console.log("isCompleted is ", data.task.completed);
      this.isCompleted = data.task.completed;
      if(checkUser != localStorage.getItem('userObj')){
        this.isUser = false;
        this.items = data;
        this.title = data.task.title;
        this.descp = data.task.description;
        this.selected = data.task.priority;
        this.myDate = data.task.date;
        this.time = data.task.time;
        console.log("completed is ", this.isCompleted);
        
      }
      else{
        this.isUser = true;
        this.items = data;
        this.title = data.task.title;
        this.descp = data.task.description;
        this.selected = data.task.priority;
        this.myDate = data.task.date;
        this.time = data.task.time;

      }
      
    })
    
  }

  update(){
    this.isUpdate = true;
  }

  updateTask(){
    let user_id = localStorage.getItem('userObj');
    let completed = false;
    let time = this.myTime.toLocaleTimeString('en-US').toString();
    this.isUpdate = true;
    // console.log(this.title);
    // console.log(this.descp);
    // console.log(this.selected);
    // console.log(time);
    // console.log(this.myDate);
    
    this.serv.updateTask(
      this.title,
      this.descp,
      this.selected,
      this.myDate,
      time,
      completed,
      user_id,
      this.id
    ).subscribe((data)=>{
      console.log(data);
      if(data.task){
        this.msg = "Task updated successfully.";
        this.isSuccess = ! this.isSuccess;
        setTimeout(() => {
           this.router.navigate(['tasks']);
        }, 1000);
      }
      else{
        this.msg = "Something went wrong.";
        this.isFailed = ! this.isFailed;
        setTimeout(() => {
          this.isFailed = false;
       }, 1000);
      }
      
    })
  }

  delete(){
    console.log("delete");
    this.serv.deleteTask(this.id).subscribe((data)=>{
      console.log(data);
      if(data.msg == "success"){
        this.msg = "Task has been deleted successfully.";
        this.isSuccess = ! this.isSuccess;
        setTimeout(() => {
           this.router.navigate(['tasks']);
        }, 1000);
       
      }
      else{
        alert("Something went wrong");
      }
      
    })
    
  }

 

}
