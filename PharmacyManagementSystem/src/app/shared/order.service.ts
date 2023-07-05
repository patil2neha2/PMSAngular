import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  DataOrder: any;


  constructor(private http:HttpClient) { }
  orderUrl="https://localhost:44395/api/Orders";
  listorder:Order[]=[]

  orderData:Order=new Order();//for post
 
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl, this.httpOptions);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.orderUrl, order, this.httpOptions);
  }
}
