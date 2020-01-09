import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[FetchdataService]
})
export class DashboardComponent implements OnInit {
  results:any = [];
  id:any
  constructor(private uploads: FetchdataService,private router:ActivatedRoute,private route:Router){}
  
      //  this.uploads.fetchData().subscribe(data => {
      
      //  console.log("usersimage =" + JSON.stringify(data));
      //   this.results = data})
     

  ngOnInit() {
    this.uploads.fetchData().subscribe(data => {
      
      //console.log("usersimage =" + JSON.stringify(data));
       this.results = data}) 
       //this.id = this.router.snapshot.paramMap.get("id");
      // this.id = this.router.snapshot.paramMap.get("id");
  }

  deleteData(_id) { 
    console.log(_id)
   
    this.uploads.deleteData(_id).subscribe( res => {
      console.log("res>>>>>>" + res);
      this.ngOnInit();
      alert (res)
      this.ngOnInit();
    })

  }

  // onSubmit() {
  //   this.id = this.router.snapshot.paramMap.get("id");
  //   let employee = this


  // }
  
  

}
