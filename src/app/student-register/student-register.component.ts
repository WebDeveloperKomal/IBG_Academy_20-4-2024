import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface register {
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


  register: register = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userRoles: '',
    additionalInterest: '',
    countryName: '',
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    console.log(this.register);


    this.http.post('http://localhost:8080/register', this.register).subscribe(response => {
      console.log('API response:', response);

    });


    this.register = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      userRoles: '',
      additionalInterest: '',
      countryName: '',
    };
  }




  // constructor(private router: Router) { }

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
  //       // Handle other cases or provide a default route
  //       break;
  //   }
  // }
}
