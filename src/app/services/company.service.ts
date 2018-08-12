import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
