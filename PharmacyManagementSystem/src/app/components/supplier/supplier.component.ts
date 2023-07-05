import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/shared/supplier.model';
import { SupplierService } from 'src/app/shared/supplier.service';



@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  listsupplier:Supplier[];
constructor(public service:SupplierService,public route:Router){}
  ngOnInit() {
    this.service.getSuppliers().subscribe(data=>{
      this.listsupplier=data;

    });
    
  }

  populateSupplier(selectedSupplier:Supplier){
    console.log(selectedSupplier);
    this.service.supplierData=selectedSupplier;
  }

  delete(id:number){
    if(confirm('Are You Sure?')){
      this.service.deleteSupplier(id).subscribe(data=>{
        console.log('record deleted');
        this.service.getSuppliers().subscribe(data=>{
          this.listsupplier=data;
        
        });
      
      });
    
    }

    }
   
  }
      

