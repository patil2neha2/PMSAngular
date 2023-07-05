import { Component ,ViewChild,ElementRef} from '@angular/core';
import { Order } from 'src/app/shared/order.model';
import { SalesreportService } from 'src/app/shared/salesreport.service';
import {jsPDF} from "jspdf"
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent {
  orders: Order[] = [];
  @ViewChild('table',{static:false}) el!:ElementRef;

  constructor(private salesReportService: SalesreportService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.orders = this.salesReportService.getOrders();
  }
  makePDF(): void {
    const pdf = new jsPDF('p', 'pt', 'a4');
    const table = this.el.nativeElement.querySelector('table');
  
    pdf.html(table, {
      callback: (pdf) => {
        pdf.save("sales_report.pdf");
      },
      x: 10,
      y: 10
    });
    this.toast.success({detail:"success",summary:'Sales Report Downloaded Successfully!',duration:2000})
  }
}