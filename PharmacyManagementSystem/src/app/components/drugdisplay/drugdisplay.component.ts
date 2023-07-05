import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Drug } from 'src/app/shared/drug.model';
import { DrugService } from 'src/app/shared/drug.service';

@Component({
  selector: 'app-drugdisplay',
  templateUrl: './drugdisplay.component.html',
  styleUrls: ['./drugdisplay.component.css']
})
export class DrugdisplayComponent implements OnInit{
listdrug:DrugService[];
listDrug:Drug[];
cart:Drug[]=[];
constructor(public Service:DrugService,private router:Router,public toast:NgToastService){}
ngOnInit(){
  this.Service.getDrugs().subscribe(data=>{
    this.Service.listdrug=data;

  });



}

addToCart(drug:Drug){
  this.Service.addToCart(drug);
  this.cart=this.Service.getCartItems();
  this.toast.success({detail:"success",summary:'Added to cart Successfully',duration:2000})
}

goToCart(){
  this.router.navigate(['/cart'])
}
}
