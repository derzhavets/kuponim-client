import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CouponsComponent } from './coupons/coupons.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [CouponsComponent, CreateCouponComponent]
})
export class CompanyModule { }
