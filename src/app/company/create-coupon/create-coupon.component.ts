import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../models/coupon';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  coupon: Coupon = new Coupon();

  constructor() { }

  ngOnInit() {}

}
