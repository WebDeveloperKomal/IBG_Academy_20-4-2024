import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses-details7',
  templateUrl: './courses-details7.component.html',
  styleUrls: ['./courses-details7.component.css']
})
export class CoursesDetails7Component {
 // [x: string]: any;
 courses: any[] = [];
 originalCourseList : any[] = [] ;
 search : any ;
 filteredCourses: any[] = [];
 financialCourses: any[] = [];
 businessCourses: any[] = [];
 marketingCourses: any[] = [];
 constructor(private apiservice : ApiService,private sanitizer: DomSanitizer, private router : Router) { }
 activeTab: string = 'tab1';
 showfinancial: boolean = true;
 showbusiness: boolean = false;
 showmarketing: boolean = false;
 price = {
  price : "" 
}
 slides = [
   { id: 1, image:"../assets/Courses_S2.jpg", text: 'Description for slide 1' },
   { id: 2, image:"../assets/Courses_S2.jpg", text: 'Description for slide 2' },
   { id: 3, image:"../assets/Courses_S2.jpg", text: 'Description for slide 3' }
 ];

 showfina() {
   this.showfinancial = true;
   this.showbusiness = false;
   this.showbusiness = false;
 }

 showbusi() {
   this.showfinancial = false;
   this.showbusiness = true;
   this.showbusiness = false;
 }

 showmark() {
   this.showfinancial = false;
   this.showbusiness = false;
   this.showbusiness = true;
 }

 changeTab(tabId: string) {
   this.activeTab = tabId;
 }

 
 items = [{ img: 'https://picsum.photos/200/200?random=1' },
 { img: 'https://picsum.photos/200/200?random=2' },
 { img: 'https://picsum.photos/200/200?random=3' },
 { img: 'https://picsum.photos/200/200?random=4' },
 { img: 'https://picsum.photos/200/200?random=5' },
 { img: 'https://picsum.photos/200/200?random=6' },
 { img: 'https://picsum.photos/200/200?random=7' },
 { img: 'https://picsum.photos/200/200?random=8' }
 ];


 ngOnInit(){ 
   this.allcourses() ;
   this.categorizeCourses() ;
 }
 
 allcourses(){
   this.apiservice.getallCourses().subscribe((resp: any)=>{
   this.courses = resp.data ;
   // this.originalCourseList = resp.data[0];
   // this.filteredCourses = resp.data[0];
   this.filteredCourses = this.courses ;
   console.log("data***", this.courses);
   console.log("name***", resp.data);
   let objectURL = 'data:image/jpeg;base64,' + resp.image;
})
 }

 Saveid(id:any){
  //  this.router.navigate([`/after-enroll/`+id]);
  console.log("cid" , id)
  localStorage.setItem("cid" , id)
  this.router.navigate([`/courses/`]);


 }



 categorizeCourses() {
   // this.financialCourses = [];
   // this.businessCourses = [];
   // this.marketingCourses = [];

   for (const course of this.courses) {
     switch (course.contentType) {
       case 'financial':
         this.financialCourses.push(course);
         break;
       case 'business':
         this.businessCourses.push(course);
         break;
       case 'marketing':
         this.marketingCourses.push(course);
         break;
       default:
         break;
         
     }
     console.log("finance", this.financialCourses)
   }
 }

 // applyfilter(){
 //   const searchString = this.search.toLowerCase().trim();
 //   this.courses = this.originalCourseList.filter((data) =>
 //     data.branchName.toLowerCase().includes(searchString) 
     
 //   );
 // }

 
 // applyfilter() {
 //   const searchString = this.search.toLowerCase().trim();

   // if (!searchString) {
   //   this.filteredCourses = this.originalCourseList;
   //   return;
   // }

   // this.filteredCourses = this.courses.filter(course =>
   //   course.name.toLowerCase().includes(searchString)
 //   );
 // }

 
applyfilter() {
 const searchString = this.search.toLowerCase().trim();

 // if (!searchString ) {
 //   this.filteredCourses = this.courses;
 //   return;
 // }

 this.filteredCourses = this.courses.filter(course =>
   course[0].name.toLowerCase().includes(searchString)
 );
}


enroll(){
  this.apiservice.enrollment(this.price).subscribe((resp: any)=>{
    Swal.fire("Enroll Successfully");
    console.log("ffffffff",resp.status);
    // if(resp.status == true){
    // }
    // this.router.navigate([`/after-enroll/`+id])
  },
  error=>{
    console.error("API Error", error)
    Swal.fire("Enrollment not done yet !")
  
  })

  // 
}


coursePurchase(){
  this.apiservice.coursePurchase(this.price).subscribe((resp: any)=>{
    Swal.fire("Purchase Successfully");
    console.log("ffffffff",resp);
    // this.router.navigate([`/after-enroll/`+id])
  },
  error=>{
    console.error("API Error", error)
    Swal.fire("Enrollment not done yet !")
  
  })

}
}
