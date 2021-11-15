import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private router:Router, private api: HttpClient) { }

  ngOnInit(): void {
  }
  fcEmail = new FormControl();
  fcPassword = new FormControl();
  requestResult = '';

  title = 'portal';

  userCredential1: string = '';
  userCredential2: string = '';
  async login(){
   // var result = await this.api.get(environment.API_URL+"/user/all").toPromise();
    //this.requestResult = result.data;
//    this.userCredential1 = email;
 //   this.userCredential2 = password;
 }
 nav(destination:string){
   this.router.navigate([destination]);
 }
}
