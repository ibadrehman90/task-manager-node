import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes, Router } from '@angular/router';
import {DataService} from '../api/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email='';
  password='';
  isSuccess = false;
  isFailed = false;
  msg = '';
  constructor(private router: Router,private serv: DataService) { 
    this.email = "";
  }

  ngOnInit(): void {
  }

  login(){

   this.serv.login(this.email,this.password).subscribe((data)=>{
    console.log(data);
    if(data.msg == "success"){
      localStorage.setItem('userObj',data.body)
      this.msg = "Login successful";
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
      
    console.log(error.error);
    this.msg = "Invalid username or password.";
    this.isFailed = ! this.isFailed;
    setTimeout(() => {
      console.log('hide');
      this.isFailed = false;
    }, 2000);
  })

  }

}
