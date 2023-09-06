import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }


  addStudent(data : any): Observable<any>{

   return this.http.post("http://localhost:3000/posts", data);
  }
    
    getStudent(): Observable<any>{
    
    return this.http.get("http://localhost:3000/posts");
    
     }
    
    
    
    
    updateStudent(id : number,data : any): Observable<any>{
    
    return this.http.put(`http://localhost:3000/posts/${id}`, data);
    
   }
    
    
    
    
     deleteStudent(id : number): Observable<any>{
    
    return this.http.delete(`http://localhost:3000/posts/${id}`);
    
     }
}
