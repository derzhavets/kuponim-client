import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon';

const baseUrl = "http://localhost:8080/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getAllCoupons(companyId: string): Observable<any> {
    return this.http.get(baseUrl + "/get-all-coupons", {
      params: {
        "company_id": companyId
      }
    })
  }

  createCoupon(coupon: Coupon, companyId: string): Observable<any> {
    return this.http.post(baseUrl + "/create-coupon", coupon, {
      params: {
        "company_id": companyId
      }
    })
  }

  updateCoupon(coupon: Coupon): Observable<any> {
    return this.http.post(baseUrl + "/update-coupon", coupon)
  }

  getCoupon(couponId: string): Observable<any> {
    return this.http.get(baseUrl + "/get-coupon/" + couponId)
  }

  deleteCoupon(couponId: string): Observable<any> {
    return this.http.get(baseUrl + "/delete-coupon/" + couponId)
  }

  getCouponTypes(): Observable<any> {
    return this.http.get(baseUrl + "/get-coupon-types")
  }
}
