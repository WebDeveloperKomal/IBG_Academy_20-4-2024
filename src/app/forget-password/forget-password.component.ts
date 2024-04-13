import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

interface Forget {
  email: string;
  securityQuestion: string;
  answer: string;
  newPassword: string;
}

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})

export class ForgetPasswordComponent implements OnInit {

  forget = {
    email: '',
    question: '',
    answers: '',
    updatedPassword: '',
  };




  forgotPasswordForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient , private apiservice : ApiService) { }

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      securityQuestion: ['', Validators.required],
      answer: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm!.valid) {
      console.log('Form submitted:', this.forgotPasswordForm!.value);
    }
  }

  // onSubmitforget() {
  //   console.log("dataaaaa", this.forget);

  //   this.http.post('http://localhost:8080/forget_password', this.forget).subscribe(response => {
  //     console.log('API response:', response);
  //   });
  // }

  onSubmitforget(){
    console.log("dataaaaa", this.forget);
  this.apiservice.forgotpassword(this.forget).subscribe((resp)=>{
    console.log("meassage ******" , resp);
    this.router.navigate(['/login'])  ;
    Swal.fire("Changed Password Successfully!");
  }
  , error => {
    console.error('API error:', error);
    Swal.fire("An error occurred during login. Please try again.");
  });
} 

}
