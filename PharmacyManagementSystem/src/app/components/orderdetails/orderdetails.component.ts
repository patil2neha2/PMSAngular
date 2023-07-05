import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { SalesreportService } from 'src/app/shared/salesreport.service';
import { NgToastService } from 'ng-angular-popup';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  orders: Order[] = [];

  constructor(
    private orderService: OrderService,
    private salesReportService: SalesreportService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => {
        this.orders = orders;
      });
  }

  approveOrder(order: Order): void {
    // Perform actions to approve the order, e.g., update order status
    order.status = 'Approved';
    this.toast.success({ detail: "success", summary: 'Order Approved', duration: 2000 });
    this.salesReportService.addOrder(order);
  }

  deleteOrder(order: Order): void {
    const index = this.orders.indexOf(order);
    if (index > -1) {
      this.orders.splice(index, 1);
      this.toast.success({ detail: "success", summary: 'Order Cancelled', duration: 2000 });
    }
  }
}