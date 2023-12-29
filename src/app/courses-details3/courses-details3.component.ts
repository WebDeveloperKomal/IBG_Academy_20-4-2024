import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-details3',
  templateUrl: './courses-details3.component.html',
  styleUrls: ['./courses-details3.component.css']
})
export class CoursesDetails3Component {

  activeTab: string = 'tab1';
  showdescription: boolean = true;
  showinstructors: boolean = false;
  showreviews: boolean = false;


  showdes() {
    // this.showdescription=!this.showdescription;
    // this.showinstructors=!this.showinstructors;
    // this.showreviews=!this.showreviews;
    this.showdescription = true;
    this.showinstructors = false;
    this.showreviews = false;
  }

  showinstr() {
    this.showdescription = false;
    this.showinstructors = true;
    this.showreviews = false;

  }

  showrev() {
    this.showdescription = false;
    this.showinstructors = false;
    this.showreviews = true;

  }


  changeTab(tabId: string) {
    this.activeTab = tabId;
  }


}
