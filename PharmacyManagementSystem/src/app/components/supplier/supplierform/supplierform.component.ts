import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Supplier } from 'src/app/shared/supplier.model';
import { SupplierService } from 'src/app/shared/supplier.service';

@Component({
  selector: 'app-supplierform',
  templateUrl: './supplierform.component.html',
  styleUrls: ['./supplierform.component.css']
})
export class SupplierformComponent implements OnInit {
  constructor(public service:SupplierService,public route:Router,public toast:NgToastService){}
  ngOnInit() {
    this.service.getSuppliers().subscribe(res=>{
      this.service.listsupplier=res;
  })
}

  submit(form:NgForm){
    console.log('submitted');
    if(this.service.supplierData.supplierId==0)
      this.insertSupplier(form);
     else
     this.updateSupplier(form);
  }

  insertSupplier(myform:NgForm){
    this.service.saveSuppliers().subscribe(d=>{
      this.refreshData();
      this.resetForm(myform);
     this.route.navigate(['supplier']);
     window.location.reload();
     this.toast.success({detail:"success",summary:"Record Added Successfully!",duration:5000});
      console.log('success');
    });
  }

  updateSupplier(myform:NgForm){
    this.service.updateSuppliers().subscribe(d=>{
      this.resetForm(myform);
      this.refreshData();
      window.location.reload();
      this.toast.success({detail:"success",summary:"Record Updated Successfully!",duration:8000});
      console.log('update success');
    });

  }

  resetForm(myform:NgForm){
   myform.form.reset();
   this.service.supplierData=new Supplier();
  }

  refreshData(){
    this.service.getSuppliers().subscribe(res=>{
      this.service.listsupplier=res;
    }); 
  }
  

}
