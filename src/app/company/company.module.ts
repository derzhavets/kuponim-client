import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { CompanyCouponsComponent } from './company-coupons/company-coupons.component';

const routes: Routes = [
  {
    path: 'company-coupons',
    component: CompanyCouponsComponent
  },
  {
    path: 'create-coupon',
    component: CreateCouponComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [CreateCouponComponent, CompanyCouponsComponent]
})
export class CompanyModule { }
