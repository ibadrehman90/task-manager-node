import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllTasks(user_id:string){
    
    return this.http.get<any>('http://localhost:3000/api/v1/tasks/user/'+user_id);
  }

  getCompletedTasks(user_id:string){
    
    return this.http.get<any>('http://localhost:3000/api/v1/tasks/user/completed/'+user_id);
  }

  createTasks(title:string,descp:string,priority:string,date:string,mytime:string,user_id:string){
    return this.http.post<any>('http://localhost:3000/api/v1/tasks',
    {'title' : title, 'description' : descp, 'priority': priority, 'date': date, 'time': mytime , 'user_id': user_id });
  }

  getSingleTask(id:string){
    return this.http.get<any>('http://localhost:3000/api/v1/tasks/'+id);
  }

  deleteTask(id:string){
    return this.http.delete<any>('http://localhost:3000/api/v1/tasks/'+id);
  }

  signup(first_name:string,email:string,password:string){
    return this.http.post<any>('http://localhost:3000/api/v1/users',
    {'full_name' : first_name, 'email' : email, 'password': password});
  }

  login(email:string,password:string){
    return this.http.post<any>('http://localhost:3000/api/v1/users/login',
    {'email' : email, 'password': password});
  }

  updateTask(title:string,descp:string,priority:string,date:string,mytime:string,completed:boolean,user_id:string,id:string){
    console.log(title," ", descp);
    
    return this.http.patch<any>('http://localhost:3000/api/v1/tasks/'+id,
    {'title' : title, 'description' : descp, 'priority': priority, 'date': date, 'time': mytime ,'completed':completed, 'user_id': user_id });
  }
}
