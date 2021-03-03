import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  // Get method to fecth the details 
  getUserDetails() {
    return this.http.get
    ('https://jsonplaceholder.typicode.com/users');         
  }
}
