import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drug } from './drug.model';
import { Observable } from 'rxjs';
import { Supplier } from './supplier.model';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
 
  private httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private myhttp:HttpClient) { }
  drugUrl="https://localhost:44395/api/drugs";
  supplierUrl="https://localhost:44395/api/Suppliers";
  listdrug:Drug[]=[];
  cartItems:Drug[]=[];
  drugData: Drug = new Drug(); 

  listsupplier:Supplier[]=[];


  getDrugs():Observable<Drug[]>{
    return this.myhttp.get<Drug[]>(this.drugUrl);
  }
getSuppliers():Observable<Supplier[]>{
  return this.myhttp.get<Supplier[]>(this.supplierUrl);
}


  addToCart(product: Drug) {
    this.cartItems.push(product);
  }
  
  getCartItems(): Drug[] {
    return this.cartItems;
  }
  
  clearCart() {
    this.cartItems = [];
  }
  saveDrugs() {
    return this.myhttp.post(this.drugUrl, this.drugData, this.httpOptions);
  }

  updateDrugs() {
    return this.myhttp.put(`${this.drugUrl}/${this.drugData.drugId}`, this.drugData, this.httpOptions);
  }

  

  deleteDrug(id: number) {
    return this.myhttp.delete(`${this.drugUrl}/${id}`);
  }
}
