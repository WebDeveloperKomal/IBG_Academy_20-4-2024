import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-instructor-register',
  templateUrl: './instructor-register.component.html',
  styleUrls: ['./instructor-register.component.css']
})
export class InstructorRegisterComponent {

  constructor(private router: Router) { }

  onUserRoleChange(event: Event): void {
    
    const selectedRole = (event.target as HTMLSelectElement).value;

    switch (selectedRole) {
      case 'INSTRUCTOR':
        this.router.navigate(['/instructor-register']);
        break;
      case 'STUDENT':
        this.router.navigate(['/student-register']);
        break;
      default:
        // Handle other cases or provide a default route
        break;
    }
  }


}
