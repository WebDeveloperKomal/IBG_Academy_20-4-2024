import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses-details5',
  templateUrl: './courses-details5.component.html',
  styleUrls: ['./courses-details5.component.css']
})
export class CoursesDetails5Component {
// addlesson : any[] = [] ;
lessons: any[] = [];

  addlesson = {
    name: '',
    number: '',
    videoUrl: '',
    lessonDetails: '',
    videoLength: '',
    student_Lesson: {},
   };
  //  this.lessons.push(addlesson);
  //  [{"name":"new lesson4","number":"1","videoUrl":"url of video","lessonDetails":"java in detail course","courseOrder":"","videoLength":"12","student_Lesson":{} }, {"name":"new lesson5","number":"2","videoUrl":"url of video 2","lessonDetails":"angular in detail course 2","courseOrder":"","videoLength":"14","student_Lesson":{}    }]

  course_img !: File ;
  constructor(private router: Router, private http: HttpClient, private apiservice : ApiService) { }

  selectedTag: string = 'Tag';
 

  ngOnInit(){

    this.getallInstructorCourses();
    // let id = localStorage.getItem("moduleId");
    // console.log("idu" , id)
  }
  
  navigateToPage(): void {
    // Add your navigation logic here
    console.log('Navigating to page:', this.selectedTag);
  }

  // onSubmitCourses() {
  //   console.log("data", this.courses);

  //   this.http.post('http://localhost:8080/addmore', this.courses).subscribe(response => {
  //     console.log('API response:', response);

  //   });
  // }
  onFileSelected(event: any) {
    this.course_img = event.target.files[0];
  }
  

// addLesson(){
//   console.log("credential*****" , this.addlesson ,this.course_img)
//   this.apiservice.addlesson(this.addlesson).subscribe((resp: any)=>{
//     console.log("meassage ******" , resp);
//     Swal.fire("Added Successfully!");
//   }
//   , error => {
//     console.error('API error:', error);
//     Swal.fire("Error");
//   });
// }

addLesson() {
  console.log("Credentials: ", this.addlesson, this.course_img);
  console.log("Lessons: ", this.lessons);
  this.lessons.push(this.addlesson);
  this.apiservice.addLesson(this.lessons).subscribe((resp: any) => {
    console.log("Response: ", resp);
    Swal.fire("Added Successfully!");
  }, error => {
    console.error('API error:', error);
    Swal.fire("Error");
  });
}

getallInstructorCourses(){
  console.log('getcourse', "bye");
  this.apiservice.getallinstructorCourses().subscribe((resp: any)=>{
    console.log('getcourse',resp);
  })
}
}
