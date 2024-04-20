import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-traffic-conversion',
  templateUrl: './traffic-conversion.component.html',
  styleUrls: ['./traffic-conversion.component.css']
})
export class TrafficConversionComponent {

  getmintaughtStudentactive : any[] = [] ;
  constructor(private router: Router, private http: HttpClient , private apiservice : ApiService,  private route : ActivatedRoute) { }

  ngOnInit(){
   this.getminnactivestudent() ;
  }
  
  getminnactivestudent( ){
    // console.log('courserating',this.courserating.rating);
    this.apiservice.getminnactivestudent().subscribe((resp: any)=>{
      console.log('courserating', resp.data);
      this.getmintaughtStudentactive = resp.data ;
    })
    }
}
