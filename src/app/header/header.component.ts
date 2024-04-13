import { Component } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbDropdown]
})

export class HeaderComponent {
  ngbDropdown: any;

  onMenuOpen(): string | string[] | Set<string> | { [klass: string]: any; } | null | undefined {
    throw new Error('Method not implemented.');
  }

  isMenuOpen: boolean = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  //-------------------------------------------------------------------

  closeDropdown() {
    // Close the dropdown by calling the close method on NgbDropdown
    this.ngbDropdown.close();
  }

}
