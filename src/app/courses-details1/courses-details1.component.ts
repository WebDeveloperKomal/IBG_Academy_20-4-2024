import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-courses-details1',
  templateUrl: './courses-details1.component.html',
  styleUrls: ['./courses-details1.component.css']
})
export class CoursesDetails1Component {

  activeTab: string = 'tab1';
  showdescription: boolean = true;
  showinstructors: boolean = false;
  showreviews: boolean = false;

  review = {
    review : ''
  }
  // courses: any[] = [];
  courses : any ;
  Courseid : any ;
  constructor(private router: Router, private apiservice : ApiService, private route : ActivatedRoute) { }

  showdes() {
    // this.showdescription=!this.showdescription;
    // this.showinstructors=!this.showinstructors;
    // this.showreviews=!this.showreviews;
    this.showdescription = true;
    this.showinstructors = false;
    this.showreviews = false;
  }

  showinstr() {
    this.showdescription = false;
    this.showinstructors = true;
    this.showreviews = false;

  }

  showrev() {
    this.showdescription = false;
    this.showinstructors = false;
    this.showreviews = true;

  }


  changeTab(tabId: string) {
    this.activeTab = tabId;
  }

  addreview(){
    console.log("review" , this.review)
    this.apiservice.addcoursereview(this.review).subscribe((resp)=>{
      console.log("review", resp)
    })
  }

  
ngOnInit(){ 
  // this.allcourses() ;
  this.Courseid = this.route.snapshot.params['id'] ;
  console.log("id*****" , this.Courseid)
  this.apiservice.getcoursebyid(this.Courseid).subscribe((resp: any)=>{
    this.courses = resp.data;

console.log("data***", this.courses) ;
console.log("data***l", this.courses.level) ;
// let objectURL = 'data:image/jpeg;base64,' + resp.image;

// this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
//     console.log("data", resp)
  })
  

}

allcourses(){
  this.apiservice.getallCourses().subscribe((resp: any)=>{
    this.courses = resp.data;
// this.array = resp.data ;
console.log("data***", this.courses);
let objectURL = 'data:image/jpeg;base64,' + resp.image;

// this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
//     console.log("data", resp)
  })
}

allcoursesbyid(){
  this.apiservice.getallCourses().subscribe((resp: any)=>{
    this.courses = resp.data;
// this.array = resp.data ;
console.log("data***", this.courses)
let objectURL = 'data:image/jpeg;base64,' + resp.image;

// this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
//     console.log("data", resp)
  })
}


}
