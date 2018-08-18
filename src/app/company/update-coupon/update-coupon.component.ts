import { ActivatedRoute } from '@angular/router';
import { Coupon } from './../../models/coupon';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  coupon: Coupon

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.companyService.getCoupon(params.id).subscribe(data => {
        this.coupon = data;
      })
    })
  }

}
