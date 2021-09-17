import { Component, OnInit } from '@angular/core';
import {DataService} from '../api/data.service';
import { RouterModule,Routes, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name='';
  email='';
  pass='';
  confpass='';
  isSuccess = false;
  isFailed = false;
  msg = '';
  constructor(private router: Router,private serv: DataService) { }

  ngOnInit(): void {
  }

  signup(){

    if(this.pass != this.confpass){
        this.msg = "Password does not match.";
        this.isFailed = ! this.isFailed
    }
    else{
      this.serv.signup(
        this.name,
        this.email,
        this.pass
      ).subscribe((data)=>{
        console.log(data);
        if(data.msg != "Email already exist"){
          if(data.msg == "success"){
            this.msg = "You're registered successfully.";
            this.isFailed = false;
            this.isSuccess = ! this.isSuccess;
            setTimeout(() => {
              console.log('hide');
              this.router.navigate(['/']);
            }, 1000);
          }  
          else{
            this.msg = "Something went wrong. Please refresh and try again.";
            this.isFailed = ! this.isFailed;
          }
        }
        else{
          this.msg = "Email already exist";
          this.isFailed = ! this.isFailed
        }
      
      },error=>{
      
        console.log(error.error);
        this.msg = "Something went wrong. Please try again.";
        this.isFailed = ! this.isFailed;
        setTimeout(() => {
          console.log('hide');
          this.isFailed = false;
        }, 2000);
      })
    }
 

  }

}
