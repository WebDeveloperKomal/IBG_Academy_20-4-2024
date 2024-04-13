import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css']
})
export class EngagementComponent {

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
