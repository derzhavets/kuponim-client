import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  coupons: Array<any>

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCoupons("1").subscribe(data => this.coupons = data)
    console.log("Received company coupons: " + this.coupons);
  }

}
