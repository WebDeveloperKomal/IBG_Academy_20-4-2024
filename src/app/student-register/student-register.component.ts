import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Student {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userRoles: string;
  additionalInterest: string;
  countryName: string;
}


@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})


export class StudentRegisterComponent {

  selectedRole: string = '';

  student: Student = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userRoles: '',
    additionalInterest: '',
    countryName: '',
  };

  constructor(private router: Router, private http: HttpClient) { }


  onUserRoleChange(event: Event): void {
    const selectedRole = (event.target as HTMLSelectElement).value;

    switch (selectedRole) {
      case 'INSTRUCTOR':
        this.router.navigate(["/instructor-register"]);
        break;
      case 'STUDENT':
        this.router.navigate(["/student-register"]);
        break;
      default:
        // Handle other cases or provide a default route
        break;
    }
  }

  onSubmitstudent() {
    console.log("data", this.student);

    this.http.post('http://localhost:8080/register', this.student).subscribe(response => {
      console.log('API response:', response);

    });
  }
}
