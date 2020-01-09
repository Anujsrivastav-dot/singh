import { FetchdataService } from '../fetchdata.service';
import { FormGroup, Validators, FormControl ,FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
 import {ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  providers:[FetchdataService]
})
export class PasswordComponent implements OnInit {
resetToken:any;
RequestResetForm: FormGroup;
  constructor( private fb: FormBuilder,private route :ActivatedRoute,private saveData:FetchdataService) { 
    this.route.params.subscribe(params => {
      this.resetToken = params.token;
      console.log("token>>>>>>>" + this.resetToken);

  })
  }
  ngOnInit() {
    this.RequestResetForm = this.fb.group(
      {
        reset_password_token: [this.resetToken],
        password: ['', [Validators.required, Validators.minLength(4)]]
      
      }
    );
    // this.RequestResetForm = this.fb.group(
    //   {
    //     resettoken: [this.resetToken],
    //     RequestResetForm: ['', [Validators.required, Validators.minLength(4)]],
    //     confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    //   }
    // );
  }
  // VerifyToken() {
  //   this.saveData.ValidPasswordToken({ reset_password_token: this.resetToken }).subscribe(
  //     data => {
  //       console.log("data token>>>>>"+ data)
  //     },
  //     err => {
  //       console.log("error")
  //     }
  //   );
  // }
  onSubmit() {
    let token = this.route.snapshot.paramMap.get("token");
    console.log("submit>>>>>>"+ token)
    let employee = this.RequestResetForm.value;
    this.setPassword(employee,token);
    }
    setPassword(employee:any,token:any){
      this.saveData.passWord(employee,token).subscribe( res => {
        console.log("res>>>>>>" + res);
      })

    }
}
