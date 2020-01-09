import { Component } from '@angular/core';
import { FetchdataService } from './fetchdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FetchdataService]
})
export class AppComponent {
  // constructor(private uploads: FetchdataService){}
  // title = 'fetchdata';
  // results:any = [];
  // userData(){
  //   this.uploads.fetchData().subscribe(data => {
    
  //     console.log("usersimage =" + JSON.stringify(data));
  //     this.results = data})
  // }
}
