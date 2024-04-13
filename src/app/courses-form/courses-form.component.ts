import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';


interface Courses {
  courseName: string;
  moduleName: string;
  lesson1: string;
  lesson2: string;
  lesson3: string;
  tags: string;
}

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})

export class CoursesFormComponent {

  addcourses = {
    name: '',
    description: '',
    certificate: '',
    duration: '',
    level: '',
    language: '',
    contentType:'',
    tag : '',
    // module: ''
  };

  
  course_img !: File ;
  constructor(private router: Router, private http: HttpClient, private apiservice : ApiService) { }

  selectedTag: string = 'Tag';


  ngOnInit(){

    this.getallInstructorCourses();
    
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
  

addcourse(){
  console.log("credential*****" , this.addcourses ,this.course_img)
  this.apiservice.addcourse(this.addcourses, this.course_img).subscribe((resp: any)=>{
    console.log("meassage ******" , resp);
    Swal.fire("Added Successfully!");
  }
  , error => {
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
