import { catchError } from 'rxjs/operators';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}
  types: Array<string> = ["COMPANY", "CUSTOMER", "ADMIN"]

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.model.email, this.model.password, this.model.type).subscribe(data => {
      console.log("Logged in", data);
      localStorage.setItem("currentUserId", JSON.parse(data).id)
    })
  }

}
