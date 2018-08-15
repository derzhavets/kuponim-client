import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../models/coupon';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  coupon: Coupon = new Coupon();
  types: Array<string>;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCouponTypes().subscribe(data => {
      this.types = data;
    })
  }

  submit() {
    console.log("Saving coupon:", this.coupon);
    this.companyService.createCoupon(this.coupon, "1").subscribe(data => {
      console.log("Saved coupon on the server:", data);   
    })  
  }

}
