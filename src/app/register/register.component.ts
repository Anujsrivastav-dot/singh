import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[FetchdataService]
})
export class RegisterComponent implements OnInit {
email:String;
password:String;
username:String;
mobileNumber:Number;
registerForm: FormGroup;
  constructor(private saveData: FetchdataService,private formBuilder: FormBuilder) { }
//   submit() {
// this.saveData.submit(this.email,this.password,this.username,this.mobileNumber)
//   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(6)]]
    
    
    
  })

}
onSubmit() {
 let employee = this.registerForm.value;
 this.createEmployee(employee);
 this.registerForm.reset(); 
  
}
createEmployee(employee:any) {
  this.saveData.createBlog(employee).subscribe( res => {
    console.log("data>>>>>>" + JSON.stringify(res))
  })
}
}