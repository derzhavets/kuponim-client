import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getAllCoupons(companyId: string): Observable<any> {
    return this.http.get("http://localhost:8080/company/get-all-coupons", {params: {
      "company_id": companyId
    }})
  }

  createCoupon(coupon: Coupon, companyId: string) : Observable<any> {
    return this.http.post("http://localhost:8080/company/create-coupon", coupon, {params: {
      "company_id": companyId
    }})
  }

  getCouponTypes(): Observable<any> {
    return this.http.get("http://localhost:8080/company/get-coupon-types")
  }
}
