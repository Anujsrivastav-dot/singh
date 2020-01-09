import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse ,HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http:HttpClient) { }

  fetchData():Observable<any> {
    return this.http.get<any>("http://localhost:3000/findalldata").pipe(
      map(res => res.employeedata) // or any other operator for individal data in acontitution by using localhost:4000/getalldatlocalhost:3000/findalldata
    )
  }


  getEmployeeById(id: number) {  
    return this.http.get<any>("http://localhost:3000/userdata/" + id);  
  }  

  createBlog(employee) {
    return this.http.post<any>("http://localhost:3000/token",employee).pipe(
      
      catchError(this.handleError)
    )
  }
  updateBlog(user: any,id:any) {
    return this.http.put( 'http://localhost:3000/update/' + id, user);
  }
  requestReset(body): Observable<any> {
    return this.http.post('http://localhost:3000/forgotpassword', body);
  }
  sendMail(employee) {
    return this.http.post<any>("http://localhost:3000/forgotpassword",employee);
  }
  passWord(user:any,token:any) {
    return this.http.post("http://localhost:3000/auth/reset_password/"+token,user)
  }
  ValidPasswordToken(body): Observable<any> {
    return this.http.post("http://localhost:3000/auth/reset_password", body);
  }
  // getUserById(id: number) {
  //   return this.http.get<any>("http://localhost:3000/userdata/" + id);
  // }


  // updateBlog(blog,id:number) {
  //   return this.http.post<any>("")
  // }
  // submit(email,password,username,mobileNumber) {
  //   let userData = {email:email,password:password,username:username,mobileNumber:mobileNumber
  //   }
  //   return this.http.post("http://localhost:3000/token",userData).subscribe( response => {
  //     console.log("response>>>>>>>" + JSON.stringify(response) )
  //   })
  // }
  login(email,password) {
    let userData = {email:email,password:password
    }
    return this.http.post("http://localhost:3000/login",userData).subscribe( response => {
      console.log("logindata>>>>>>>" + JSON.stringify(response) )
      alert(response)
    })
  }
  deleteData(_id:String) {
    return this.http.delete<any>("http://localhost:3000/delete/"+_id).pipe(map(res => 
    console.log("deleted data>>>>>>" + JSON.stringify (res))
    ))
    
  }
  private handleError(error:HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log("error>>>>>" + error.error.message);
    }
    else {
      console.error(`backend return code ${error.status},` + `body was: ${error.error}`);
    }
    return throwError("somethind bad happened.please try again");

  }
}
