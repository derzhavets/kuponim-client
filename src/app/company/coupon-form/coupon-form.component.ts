import { CompanyService } from './../../services/company.service';
import { Coupon } from './../../models/coupon';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.css']
})
export class CouponFormComponent implements OnInit {

  @Input() 
  coupon: Coupon = new Coupon()
  types: Array<string>

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCouponTypes().subscribe(data => {
      this.types = data;
    })
  }

  submit() {
    if (this.coupon.id) {
      this.companyService.updateCoupon(this.coupon).subscribe(data => {
        console.log("Coupon successfully updated:", data);
      })
    } else {
      this.companyService.createCoupon(this.coupon, "7").subscribe(data => {
        console.log("Coupon created successfully:", data);   
      })
    }
  }

}
