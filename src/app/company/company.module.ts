import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { CompanyCouponsComponent } from './company-coupons/company-coupons.component';
import { CouponFormComponent } from './coupon-form/coupon-form.component';
import { UpdateCouponComponent } from './update-coupon/update-coupon.component';

const routes: Routes = [
  {
    path: 'company-coupons',
    component: CompanyCouponsComponent
  },
  {
    path: 'create-coupon',
    component: CreateCouponComponent
  },
  {
    path: 'update-coupon/:id',
    component: UpdateCouponComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [CreateCouponComponent, CompanyCouponsComponent, CouponFormComponent, UpdateCouponComponent]
})
export class CompanyModule { }
