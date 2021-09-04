import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email?: string;
  password?: string;
  constructor(private router: Router) { 
    this.email = "";
  }

  ngOnInit(): void {
  }

  login(){

    if(this.email != "admin" && this.password != "admin"){
      alert("Incorrect username or password");
    }
    else{
      this.router.navigate(['tasks'])
    }
    
    

  }

}
