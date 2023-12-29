import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent {

  selectedTag: string = 'Tag';

  navigateToPage(): void {
    // Add your navigation logic here
    console.log('Navigating to page:', this.selectedTag);
  }

}
