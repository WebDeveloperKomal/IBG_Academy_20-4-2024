import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent {

joinfrom : any[] = [] ;
date : any
  constructor(private router: Router, private http: HttpClient , private apiservice : ApiService,  private route : ActivatedRoute) { }

  ngOnInit(){
     this.getjoiningnwherefrom() ;
  }
  
  getjoiningnwherefrom( ){
    // console.log('courserating',this.courserating.rating);
    this.apiservice.getjoiningnwherefrom().subscribe((resp: any)=>{
      console.log('joinnfrom', resp.data);
this.joinfrom = resp.data;

for (let innerArray of this.joinfrom) {
  // Access the object at index 0 of each inner array
  const obj = innerArray[0];
  // Access the "date_time " property of the object
  const date_time = obj["date_time "];
  console.log('date_time', date_time);
}
// const date_time = this.joinfrom[0][0].date_time;
//       console.log('date_time', date_time);
// this.data = resp
    })
    }

  
}
