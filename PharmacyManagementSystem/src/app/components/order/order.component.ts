import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/shared/auth.service';
import { EmailService } from 'src/app/shared/email.service';
import { Order } from 'src/app/shared/order.model';
import { OrderService } from 'src/app/shared/order.service';
import { UserStoreService } from 'src/app/shared/user-store.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderData: Order = new Order();
  showDialog: boolean;
  tp: number;
  email: string;
 
  body: string = "Your Order has been placed successfully and We will try to deliver it within 7 working Days. Thank You for using eDrugs!";

  constructor(
    private orderService: OrderService,
    public rs: ActivatedRoute,
    private auth: AuthService,
    public userStore: UserStoreService,
    public emailSending: EmailService,
    public toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.tp = Number(this.rs.snapshot.paramMap.get('qunt'));
    this.orderData.total = this.tp;
    console.log(this.tp);

    this.userStore.getEmailFromStore()
      .subscribe(val => {
        let emailFromToken = this.auth.getEmailFromToken();
        this.email = val || emailFromToken;
        console.log(this.email);
      });
  }

  submitOrder() {
    this.orderService.addOrder(this.orderData)
      .subscribe((order: Order) => {
        console.log('Order placed successfully:', order);
        this.showDialog = true;
        
        
        const emailDTO = {
          email: this.email,
          body: this.body
        };
        
        
        this.emailSending.sendEmail(emailDTO)
          .subscribe(() => {
            console.log('Email sent successfully');
          }, error => {
            console.error('Failed to send email:', error);
          });
      }, error => {
        console.error('Failed to place order:', error);
      });
      this.toast.success({detail:"success",summary:'Order Confirmation mail Sent!',duration:2000})
  }

  closeDialog() {
    this.showDialog = false;
    this.orderData = new Order();
  }
}