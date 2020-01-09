
import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  email:String;
  password:String;
  username:String;
  mobileNumber:Number;
  id:any;
  updateForm: FormGroup;
  constructor(private saveData: FetchdataService,private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router) { }


 ngOnInit() {
  
    this.updateForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(6)]]
    
  
    
  })
  // this.saveData.getUserById(+userId)
  // .subscribe( data => {
  //   this.updateForm.setValue(data);
  // });
  // this.saveData.getUserById(+userId)
  // .subscribe( data => {
  //   this.updateForm.setValue(data);
  // });
   this.id = this.route.snapshot.paramMap.get("id"); 
    if (this.id) {  
      console.log("iddddd>>>>" + this.id)
      
      this.saveData.getEmployeeById(this.id).subscribe(data => {  
        console.log("back email>>>>>" + JSON.stringify(data.email))
        this.updateForm.controls["email"].setValue((data.message.email));
        this.updateForm.controls["password"].setValue(data.message.password);
        this.updateForm.controls["username"].setValue((data.message.username));
        this.updateForm.controls["mobileNumber"].setValue((data.message.mobileNumber));
        console.log("show data>>>>" +JSON.stringify((data.message.email)
        ))
        this.email= Object.assign({},data.email)
        console.log("back email>>>>>" + JSON.stringify(data.message))
      })  
    
      
    }  
}
// onSubmit() {
//   this.saveData.updateUser(this.updateForm.value)
  
//     .subscribe(
//       data => {
//       console.log(data)
//       this.router.navigateByUrl('update')
//       },
//       error => {
//         alert(error);
//       });
// }

// onSubmit() {
//   const formdata = new FormData();
//   formdata.append("email",this.registerForm.get("email").value);
//   formdata.append("password",this.registerForm.get("password").value);
//   formdata.append("username",this.registerForm.get("username").value);
//   formdata.append("mobileNumber",this.registerForm.get("mobileNumber").value);
// this.id = this.route.snapshot.paramMap.get("id");

// if(this.id) {
//   console.log("id>>>>>" + this.id)
//  // this.saveData.updateBlog(formdata,this.id).subscribe( res => 
//  // alert("submited");
    
//     console.log("updated successfully")
//     )
//     this.registerForm.reset();
// }

// }
onSubmit() {
  let id = this.route.snapshot.paramMap.get("id");
  let employee = this.updateForm.value;
this.updateEmployee(employee,id);

}
updateEmployee(employee:any,id:any) {
  this.saveData.updateBlog(employee,id).subscribe( res => {
    console.log(res)
  })
}
}
