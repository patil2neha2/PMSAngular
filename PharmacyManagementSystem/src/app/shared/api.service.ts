import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private baseUrl:string='https://localhost:44395/api/Users/GetAllUser';

  constructor(private http:HttpClient) { }
  getUsers(){
    
    console.log('api service');
    return this.http.get<any>(this.baseUrl);
  }
}
