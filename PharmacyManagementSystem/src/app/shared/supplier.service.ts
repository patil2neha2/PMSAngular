import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from './supplier.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };


  constructor(private myhttp:HttpClient) { }
  supplierUrl="https://localhost:44395/api/Suppliers";
  listsupplier:Supplier[]=[];
  cartItems:Supplier[]=[];

  supplierData:Supplier=new Supplier();//for post
 
  saveSuppliers(){
    return this.myhttp.post(this.supplierUrl,this.supplierData,this.httpOptions);
  }

  updateSuppliers(){
    return this.myhttp.put(`${this.supplierUrl}/${this.supplierData.supplierId}`,this.supplierData,this.httpOptions);
  }

  getSuppliers():Observable<Supplier[]>{
    return this.myhttp.get<Supplier[]>(this.supplierUrl);
  }

  deleteSupplier(id:number){
    return this.myhttp.delete(`${this.supplierUrl}/${id}`);
  }
}

