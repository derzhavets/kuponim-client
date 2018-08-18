import { CompanyService } from './../services/company.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private loginService: LoginService, private companyService: CompanyService) { }

  ngOnInit() {
    this.loginService.login("appe@mau.we", "steve", "COMPANY").subscribe(data => {
      this.companyService.getAllCoupons("1").subscribe(data => {
        console.log(data);
      })
    })
  }

}
