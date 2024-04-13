import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';


interface Rating {
  studentID: string;
  courseID: string;
  studentRating: string;

}
@Component({
  selector: 'app-after-enroll',
  templateUrl: './after-enroll.component.html',
  styleUrls: ['./after-enroll.component.css']
})

export class AfterEnrollComponent {

  rating: Rating = {
    studentID: '',
    courseID: '',
    studentRating: '',
  };
  courses : any ;
  Courseid : any ;
  Courseno : any ;
  module : any[] = [] ;
  alldatareview : any[] = [] ;
  // constructor(private router: Router, private apiservice : ApiService,) { }


  constructor(private router: Router, private http: HttpClient , private apiservice : ApiService,  private route : ActivatedRoute) { }
  // ngOnInit(){

  
  
// }


  
ngOnInit(){ 
  this.getallStudentCourses();
  // this.getmodule() ;
  // this.allcourses() ;
  this.Courseid = this.route.snapshot.params['id'] ;
  console.log("id*****" , this.Courseid);
  localStorage.setItem("Couseid", this.Courseid)
  // console.log("no*****" , this.Courseno);
  this.apiservice.getcoursebyid(this.Courseid).subscribe((resp: any)=>{
    this.courses = resp.data;
this.module = resp.data.module
console.log("data***", this.courses) ;
console.log("data***l", this.courses.level) ;
// let objectURL = 'data:image/jpeg;base64,' + resp.image;

// this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
//     console.log("data", resp)
  })


  // console.log("reiewdata","sons")

  // this.apiservice.getreviewnameimage(this.Courseid).subscribe((resp: any)=>{
  //   console.log("reiewdata",resp.data)
  //   this.alldatareview = resp.data ;
  // })


  this.apiservice.getinstratingpicname().subscribe((resp: any)=>{
    console.log("getinstratingpicname**",resp.data)
    this.alldatareview = resp.data ;
  })
  
}

  onSubmitRatingForm() {
    console.log("data", this.rating);

    this.http.post('http://localhost:8080/add_instructor_ratings/', this.rating).subscribe(response => {
      console.log('API response:', response);
    });
  }

  // -----------------------------------------------------------

  activeTab: string = 'tab1';

  showoverview: boolean = true;
  showdescription: boolean = false;
  showcertificates: boolean = false;
  showinstructor: boolean = false;
  showstudentrating: boolean = false;
  showinstructorrating: boolean = false;
  showaskquestion: boolean = false;


  ask = {
    question : ''
  }

  give = {
    answer : ''
  }

  courserating = {
    rating : ''
  }

  instructorrating = {
    rating : ''
  }

  
  review = {
    review : ''
  }



  showover() {
    this.showoverview = true;
    this.showdescription = false;
    this.showcertificates = false;
    this.showinstructor = false;
    this.showstudentrating = false;
    this.showinstructorrating = false;
    this.showaskquestion = false;
  }

  showdesc() {
    this.showoverview = false;
    this.showdescription = true;
    this.showcertificates = false;
    this.showinstructor = false;
    this.showstudentrating = false;
    this.showinstructorrating = false;
    this.showaskquestion = false;

  }

  showcert() {
    this.showoverview = false;
    this.showdescription = false;
    this.showcertificates = true;
    this.showinstructor = false;
    this.showstudentrating = false;
    this.showinstructorrating = false;
    this.showaskquestion = false;

  }

  showinst() {
    this.showoverview = false;
    this.showdescription = false;
    this.showcertificates = false;
    this.showinstructor = true;
    this.showstudentrating = false;
    this.showinstructorrating = false;
    this.showaskquestion = false;
  }

  showstud() {
    this.showoverview = false;
    this.showdescription = false;
    this.showcertificates = false;
    this.showinstructor = false;
    this.showstudentrating = true;
    this.showinstructorrating = false;
    this.showaskquestion = false;
  }


  showinstru() {
    this.showoverview = false;
    this.showdescription = false;
    this.showcertificates = false;
    this.showinstructor = false;
    this.showstudentrating = false;
    this.showinstructorrating = true;
    this.showaskquestion = false;
  }

  showaskque() {
    this.showoverview = false;
    this.showdescription = false;
    this.showcertificates = false;
    this.showinstructor = false;
    this.showstudentrating = false;
    this.showinstructorrating = false;
    this.showaskquestion = true;
  }


  changeTab(tabId: string) {
    this.activeTab = tabId;
  }

  // ------------------------------------------------------------------------------------------------

  isCollapsed = true; // Initial state of the dropdown

  toggleDropdown() {
    this.isCollapsed = !this.isCollapsed;
  }


  logout(){
    this.apiservice.logout().subscribe((resp)=>{
      console.log('getdata', resp);
      this.router.navigate(['/logout']);
    })
  }

  askquestion(){
    console.log('added question', this.ask);
    // this.Courseid = this.route.snapshot.params['id'] ;
  console.log("id*****" , this.Courseid)
  this.apiservice.askquestion(this.ask).subscribe((resp)=>{
    console.log('added question', resp);
    Swal.fire("Question Added") ;
  },
(error : any) =>{
console.log("Error" , error) ;
}
)
  }
   

  giveanswer(){
    console.log('added question', this.give);
    this.apiservice.giveanswer(this.give).subscribe((resp)=>{
      console.log('added question', resp);
       Swal.fire("Answer Added") ;
  },
(error : any) =>{
console.log("Error" , error) ;
    })
  }
  

  courseratings( ){
    console.log('courserating',this.courserating.rating);
    this.apiservice.courserating(this.courserating).subscribe((resp)=>{
      console.log('courserating', resp);
       Swal.fire("Rating Added") ;
  },
(error : any) =>{
console.log("Error" , error) ;
    })
    }
     
    
    instructorratings(){
      console.log('instructorrating', this.instructorrating.rating);
      this.apiservice.instructorrating(this.instructorrating).subscribe((resp)=>{
        console.log('instructorrating**', resp);
         Swal.fire("Ratting Added") ;
  },
(error : any) =>{
console.log("Error" , error) ;
      })
    }



    getallStudentCourses(){
      console.log('getcourse', "bye");
      this.apiservice.getallStudentCourses().subscribe((resp: any)=>{
        console.log('getcourse', "Hi");
      })
    }

    
  addreview(){
    console.log("review" , JSON.stringify(this.review.review))
    this.apiservice.addcoursereview(this.review).subscribe((resp)=>{
      console.log("review", resp);
       Swal.fire("review Added") ;
  },
(error : any) =>{
console.log("Error" , error) ;
    })
  }

  getmodule(){
    
    this.apiservice.getmodule().subscribe((resp: any)=>{
        this.module = resp.data;
        console.log("data***SSSSSSSSSS" , resp.data)
    })
  }




}
