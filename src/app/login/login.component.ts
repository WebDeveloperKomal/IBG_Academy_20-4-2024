import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';

interface Login {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  login = {
    username: '',
    password: '',
  };
  credential ={
    username: '',
    password: '' ,
    
  }

  isAuthenticated: boolean = false;

  constructor(private router: Router, private http: HttpClient, private apiservice : ApiService) { }

  onSubmitLogin() {
    console.log('API response:', this.login);
    // if (this.validateInputs()) {

      this.http.post('http://localhost:8080/AcademyBackend/flogin', this.login).subscribe(response => {
        console.log('API response**:', response);
        // Swal.fire("Login Successfully!");
      }, error => {
        console.error('API error:', error);
        // Swal.fire("An error occurred during login. Please try again.");
      });
    // }
  }

login1(){
  console.log("credential*****" , this.credential)
  this.apiservice.login(this.credential).subscribe((resp: any)=>{
    localStorage.setItem("msg", resp.msg);
    localStorage.setItem("status", resp.status);
    console.log("meassage ******" , resp.msg);

    console.log("credential" , resp)
    if(resp.status== "true"){
      this.router.navigate(['/all-courses-student-login']) ;
    }
    else{
      Swal.fire("Enter Valid Credentials") ;
    }
    // this.isAuthenticated = true;
   
    // this.router.navigate(['/after-enroll']) ;
 })
}

login2(){
  console.log("credential*****" , this.credential)
  this.apiservice.login(this.credential).subscribe((resp: any)=>{
    localStorage.setItem("msg", resp.msg);
    localStorage.setItem("status", resp.status);
    console.log("meassage ******" , resp.msg);

    console.log("credential" , resp)
    if(resp.status== "true"){
      this.router.navigate(['/courses-admin']) ;
    }
    else{
      Swal.fire("Enter Valid Credentials") ;
    }
    // this.isAuthenticated = true;
   
    // this.router.navigate(['/after-enroll']) ;
 })
}



  validateInputs(): boolean {
    if (!this.login.username || !this.login.password) {
      Swal.fire("Please enter both email and password.");
      return false;
    }
    // You can add more specific validation if needed, such as email format validation.
    return true;
  }
}



