import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers:[FetchdataService]
})
export class EmailComponent implements OnInit {
  RequestResetForm: FormGroup;
  successMessage: string;
  constructor(private saveData:FetchdataService ) { }

  ngOnInit() {
  

      this.RequestResetForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
      });
    
  }
  
  onSubmit() {
    let employee = this.RequestResetForm.value;
    this.resetpassword(employee);
    
    this.RequestResetForm.reset();
  }
  resetpassword(employee:any) {
    this.saveData.sendMail(employee).subscribe( res => {
      this.successMessage = "check your email";
    })
  }

}
