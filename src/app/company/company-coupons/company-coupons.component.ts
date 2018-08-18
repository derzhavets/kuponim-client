import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../models/coupon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-coupons',
  templateUrl: './company-coupons.component.html',
  styleUrls: ['./company-coupons.component.css']
})
export class CompanyCouponsComponent implements OnInit {

  coupons: Array<any>

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.companyService.getAllCoupons("1").subscribe(data => {
      this.coupons = data;
      console.log("Received coupons for hardcoded company id=1: ", this.coupons);
    })
  }

  deleteCoupon(couponId: string) {
    this.companyService.deleteCoupon(couponId).subscribe(data => {
      console.log("Successfully deleted coupon", data);
      window.location.reload()
    })
  }

}
