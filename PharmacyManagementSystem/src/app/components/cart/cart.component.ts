import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drug } from 'src/app/shared/drug.model';
import { DrugService } from 'src/app/shared/drug.service';
import { SupplierService } from 'src/app/shared/supplier.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Drug[] = [];
  total: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private drugService: DrugService,
    private supplierService: SupplierService
  ) {}

  ngOnInit() {
    this.cart = this.drugService.getCartItems();
    this.updateTotal();
  }

  updateTotal(): void {
    this.total = this.calculateTotal();
  }

  calculateTotal(): number {
    let total = 0;
    for (let item of this.cart) {
      total += item.price * item.quantity;
    }
    return total;
  }

  clearCart(): void {
    this.cart = [];
    this.drugService.clearCart();
    this.updateTotal();
  }

  goToDisplayDrugs(): void {
    this.router.navigate(['/drugdisplay']);
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    this.updateTotal();
  }

  goToOrder(): void {
    this.router.navigate(['/order']);
  }
}
