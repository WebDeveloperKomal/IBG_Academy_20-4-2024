import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';


interface Register {
  userName: string;
  email: string;
  password: string;
  // confirmPassword: string;
  // userRoles: string;
  user_Roles : string ;
  country : string ;
  additionalIntrest : string ;
  // stud_img: File;
}

@Component({
  selector: 'app-instructor-register',
  templateUrl: './instructor-register.component.html',
  styleUrls: ['./instructor-register.component.css']
})


export class InstructorRegisterComponent {

  showcountry : boolean = false ;
  showforinstructor : boolean = false ;
  selectedFile: File | null = null; 
  selectedRole: string = '' ;
  stud_img !: File ;
  inst_img !: File ;
  // register: Register = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   userRoles: ''
  // };

  register = {
    // userName: '',
    // email: '',
    // password: '',
    
    // user_Roles : '',
    // country : '' ,
    // additionalIntrest :''
    

    userName: '',
    email: '',
    password: '',
    
    user_Roles: [{ roleName: '' }],
    country: '',
    securityQuestion:'',
    securityAnswer : '' ,
    additionalIntrest :''
  };

  constructor(private router: Router, private http: HttpClient , private apiservice : ApiService) { }

  // onUserRoleChange(event: Event): void {
  //   const selectedRole = (event.target as HTMLSelectElement).value;


  //   switch (selectedRole) {
  //     case 'INSTRUCTOR':
  //       this.router.navigate(['/instructor-register']);
  //       break;
  //     case 'STUDENT':
  //       this.router.navigate(['/student-register']);
  //       break;
  //     default:
       
  //       break;
  //   }
  // }

  
  onFileSelected(event: any) {
    this.stud_img = event.target.files[0];
  }
  onFileSelected1(event: any) {
    this.inst_img = event.target.files[0];
  }

  onUserRoleChange() {
    if (this.register.user_Roles[0].roleName === 'STUDENT') {
        this.showcountry = true;
    }else if(this.register.user_Roles[0].roleName === 'INSTRUCTOR'){
      this.showforinstructor = true
    }
     else {
        this.showcountry = false;
        this.showforinstructor = false ;
    }
}


  onSubmitRegister() {
    console.log("data", this.register);

    // this.http.post('http://localhost:8080/register', this.register).subscribe(response => {
      
      this.http.post('http://localhost:8080/add_student', this.register).subscribe(response => {
      console.log('API response:', response);
    });
  }

  

onsubmitregisterStudent(){
  console.log('data', this.register , this.stud_img)
  this.apiservice.registerstudent(this.register , this.stud_img).subscribe((resp)=>{
    console.log('API response for student:', resp);
     Swal.fire("Registered Successfully!");
  }
  , error => {
    console.error('API error:', error);
    Swal.fire("An error occurred during login. Please try again.");
  });
}

onsubmitregisterInstructor(){
  console.log('data', this.register , this.inst_img)
  this.apiservice.registerinstructor(this.register , this.inst_img).subscribe((resp)=>{
    console.log('API Response for instructor :' , resp) ;
    Swal.fire("Registered Successfully!");
  }
  , error => {
    console.error('API error:', error);
    Swal.fire("An error occurred during login. Please try again.");
  });
}




}
