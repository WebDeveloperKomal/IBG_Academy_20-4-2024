import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import { log } from 'console';
// import { error } from 'console';
// import { Console } from 'console';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: any[] = [];
  thumbnail: any;
  originalCourseList : any[] = [] ;
  search : any ;
  filteredCourses: any[] = [];
  price = {
    price : "" 
    

  }
// array = [] ;
// Constructor(private apiservice : ApiService)
constructor(private apiservice : ApiService,private sanitizer: DomSanitizer, private router : Router) { }

ngOnInit(){ 
  this.allStudentcourses() ;
}

allStudentcourses(){
  this.apiservice.getallStudentCourses().subscribe((resp: any)=>{
    this.courses = resp.data;
// this.array = resp.data ;
console.log("data***", this.courses);
// console.log("price***", resp.data.course_Purchased[0].price);

// this.originalCourseList = this.courses ;
this.filteredCourses = this.courses;
// this.filteredCourses = resp.data;
// let objectURL = 'data:image/jpeg;base64,' + resp.image;

// this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
//     console.log("data", resp)
  })
}
getSanitizedImageUrl(fileName: string): SafeResourceUrl  {
  const imagePath = `../assets/${fileName}`;
  return this.sanitizer.bypassSecurityTrustUrl(imagePath);
}

Saveid(id:any){
  this.router.navigate([`/after-enroll/`+id])
//  localStorage.setItem("Couseid",id)

//  console.log("iiiiiiiii",localStorage.setItem("Couseid",id)) ;
}

applyfilter() {
  const searchString = this.search.toLowerCase().trim();

  // if (!searchString ) {
  //   this.filteredCourses = this.courses;
  //   return;
  // }

  this.filteredCourses = this.courses.filter(course =>
    course.name.toLowerCase().includes(searchString)
  );
}

// getCourseImageUrl(fileName: string): string {
//   return `/${fileName}`;
// }

enroll(id: any){
  this.apiservice.enrollment(this.price).subscribe((resp: any)=>{
    Swal.fire("Enroll Successfully");
    console.log("ffffffff",resp);
    // this.router.navigate([`/after-enroll/`+id])
  },
  error=>{
    console.error("API Error", error)
    Swal.fire("Enrollment not done yet !")
  
  })

  // 
}


coursePurchase(id: any){
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
