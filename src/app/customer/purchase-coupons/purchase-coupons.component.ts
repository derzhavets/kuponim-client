import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-coupons',
  templateUrl: './purchase-coupons.component.html',
  styleUrls: ['./purchase-coupons.component.css']
})
export class PurchaseCouponsComponent implements OnInit {

  coupons: Array<any>

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCoupons().subscribe(data => {
      this.coupons = data
    })
  }

  purchaseCoupon(coupondId: string) {
    this.customerService.purchaseCoupon(localStorage.getItem("currentUserId"), coupondId).subscribe(data => {
      console.log("Successfully purchased coupon", data)
    })
  }

}
