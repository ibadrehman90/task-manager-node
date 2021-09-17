import { Component, OnInit } from '@angular/core';
import {DataService} from '../api/data.service';
import { RouterModule,Routes, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  items?: any;
  id = '';
  myItems = [];
  index:number;
  isSuccess = false;
  isFailed = false;
  msg = '';
  constructor(private serv: DataService,
    private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchAllServices();
  }

  fetchAllServices(){
    this.id = localStorage.getItem('userObj');
    this.serv.getCompletedTasks(this.id).subscribe((data)=>{
      console.log(data);
      this.items = data.body;
      this.myItems.push(data.body);
    })
  }

  deleteTask(event){
    console.log("delete");
    console.log(event._id);
    
    this.serv.deleteTask(event._id).subscribe((data)=>{
      console.log(data);
      if(data.msg == "success"){
        this.fetchAllServices();
        this.openSnackBar();
       
      }
      else{
        alert("Something went wrong");
      }
      
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

  openSnackBar(){
    this._snackBar.open('Task has been deleted successfully.');
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000);
    
  }

  openSnackBarMSG(id){
    this._snackBar.open('http://localhost:4200/view-task?id='+id.textContent, 'Close');
  }
  

}
