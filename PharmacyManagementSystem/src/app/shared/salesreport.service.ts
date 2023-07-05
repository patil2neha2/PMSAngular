import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class SalesreportService {
  private orders: Order[] = [];

  constructor() { }

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  getOrders(): Order[] {
    return this.orders;
  }
}