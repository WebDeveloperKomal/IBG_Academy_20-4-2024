import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {


  activeTab: string = 'tab1';
  showfinancial: boolean = true;
  showbusiness: boolean = false;
  showmarketing: boolean = false;

  showfina() {
    this.showfinancial = true;
    this.showbusiness = false;
    this.showbusiness = false;
  }

  showbusi() {
    this.showfinancial = false;
    this.showbusiness = true;
    this.showbusiness = false;
  }

  showmark() {
    this.showfinancial = false;
    this.showbusiness = false;
    this.showbusiness = true;
  }

  changeTab(tabId: string) {
    this.activeTab = tabId;
  }

}
