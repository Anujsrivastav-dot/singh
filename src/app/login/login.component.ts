import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchdataService } from '../fetchdata.service';

import {  FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[FetchdataService]
})
export class LoginComponent implements OnInit {
email:String;
password:String;
results:String;


  constructor(private router:Router,private saveData:FetchdataService,private formBuilder:FormBuilder) { }
  profileForm: FormGroup;
  //contactForm:formGroup;
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      email: ['', [ Validators.required,Validators.minLength(6)]],
      password: ['',[ Validators.required,Validators.minLength(6)]]
    })
  }
  Register(){
    this.router.navigateByUrl('Register');
}
getData() {
  this.router.navigateByUrl('Dashboard');
}
Login(email,password) {

  if(this.email == email || this.password === password){
    alert("please enter your emil and password")
  }else{
    this.saveData.login(this.email,this.password) 
    this.router.navigateByUrl('Dashboard')
  }
//  console.log(this.email)
//   if (this.saveData.login(this.email,this.password)//(((this.email!='')||(this.email!=undefined) && (this.password!=''|| this.password!=undefined)))
//   {
//     //this.saveData.login(this.email,this.password) 
//    this.router.navigateByUrl('Dashboard');
//    console.log("true")
//   }
//   else {
//     console.log("false")
//     this.results = "failed"
//   }
  

}
}
