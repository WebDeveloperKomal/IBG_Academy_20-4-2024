import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-courses-details4',
  templateUrl: './courses-details4.component.html',
  styleUrls: ['./courses-details4.component.css']
})
export class CoursesDetails4Component {

  addmodule = {
    name: '',
    
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
  

addModule(){
  console.log("credential*****" , this.addmodule)
  this.apiservice.addmodule(this.addmodule).subscribe((resp: any)=>{
    console.log("meassage ******" , resp);
    Swal.fire("Added Successfully!");
    localStorage.setItem("moduleId" , resp.data.moduleId);
    let id = localStorage.getItem("moduleId")
    console.log("meassage ******" , resp.data.moduleId);
    this.router.navigate(['/lesson-form/'+ id]);
  }
  , (error: any) => {
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
