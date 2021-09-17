import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {DataService} from '../api/data.service';
import { RouterModule,Routes, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.css']
})
export class ActiveTasksComponent implements OnInit {
  modalRef?: BsModalRef;
  items?: any;
  id = '';
  myItems = [];
  index:number;
  isSuccess = false;
  isFailed = false;
  msg = '';
  constructor(private modalService: BsModalService, private serv: DataService,
    private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchAllServices();
    console.log(this.myItems.length);
    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fetchAllServices(){
    this.id = localStorage.getItem('userObj');
    this.serv.getAllTasks(this.id).subscribe((data)=>{
      console.log(data);
      this.items = data.body;
      this.myItems.push(data.body);
    })
  }

  viewTask(id){
    console.log(id.textContent);
  
    let navigationExtras: NavigationExtras = {
      queryParams: {
       id: id.textContent
      }
  };
  this.router.navigate(['view-task'],navigationExtras);  
  }

  openSnackBar(id){
    this._snackBar.open('http://localhost:4200/view-task?id='+id.textContent, 'Close');
  }

  markCompleted(event,i){
    console.log(i.index);
    console.log(event.body.title);
    let completed = true;
    let user_id = localStorage.getItem('userObj');
    this.serv.updateTask(
      event.body.title,
      event.body.descp,
      event.body.priority,
      event.body.date,
      event.body.time,
      completed,
      user_id,
      event.body._id,
    ).subscribe((data)=>{
      console.log(data);
      if(data.task){
        console.log("task found");
        this.fetchAllServices();
        this.openSnackBarMsg();
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

  openSnackBarMsg(){
    this._snackBar.open('Well done! Task successfully completed.');
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000);
    
  }

}
