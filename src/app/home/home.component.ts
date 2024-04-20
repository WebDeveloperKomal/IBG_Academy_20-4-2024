import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  // [x: string]: any;
  courses: any[] = [];
  originalCourseList : any[] = [] ;
  search : any ;
  alldatareview : any[] = [] ;
  Courseid : any ;
  filteredCourses: any[] = [];
  financialCourses: any[] = [];
  businessCourses: any[] = [];
  marketingCourses: any[] = [];
 
  selectedCategory: string = 'financial'; 

  activeTab1: string = 'financial';

  constructor(private apiservice : ApiService,private sanitizer: DomSanitizer, private router : Router) { }
  activeTab: string = 'tab1';
  showfinancial: boolean = true;
  showbusiness: boolean = false;
  showmarketing: boolean = false;
  slides = [
    { id: 1, image:"../assets/Courses_S2.jpg", text: 'Description for slide 1' },
    { id: 2, image:"../assets/Courses_S2.jpg", text: 'Description for slide 2' },
    { id: 3, image:"../assets/Courses_S2.jpg", text: 'Description for slide 3' }
  ];

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

  
  items = [{ img: 'https://picsum.photos/200/200?random=1' },
  { img: 'https://picsum.photos/200/200?random=2' },
  { img: 'https://picsum.photos/200/200?random=3' },
  { img: 'https://picsum.photos/200/200?random=4' },
  { img: 'https://picsum.photos/200/200?random=5' },
  { img: 'https://picsum.photos/200/200?random=6' },
  { img: 'https://picsum.photos/200/200?random=7' },
  { img: 'https://picsum.photos/200/200?random=8' }
  ];


  ngOnInit(){ 
    this.allcourses() ;
    this.categorizeCourses() ;

    
  // this.apiservice.getreviewnameimage(this.Courseid).subscribe((resp: any)=>{
  //   console.log("reiewdata",resp.data)
  //   this.alldatareview = resp.data ;

  // })
  }
  

  allcourses(){
    this.apiservice.getallCourses().subscribe((resp: any)=>{
    this.courses = resp.data ;
    // this.originalCourseList = resp.data[0];
    // this.filteredCourses = resp.data[0];
    this.filteredCourses = this.courses ;

    
    console.log("data***", this.courses);
    console.log("name***", resp);
    // console.log("name***", resp.data[0].courserating);
    let objectURL = 'data:image/jpeg;base64,' + resp.image;
 })
  }

  Saveid(id:any){
    this.router.navigate([`/courses-details1/`+id])
  }



  categorizeCourses() {
    // this.financialCourses = [];
    // this.businessCourses = [];
    // this.marketingCourses = [];

    for (const course of this.courses) {
      switch (course.contentType) {
        case 'financial':
          this.financialCourses.push(course);
          break;
        case 'business':
          this.businessCourses.push(course);
          break;
        case 'marketing':
          this.marketingCourses.push(course);
          break;
        default:
          break;
          
      }
      console.log("finance", this.financialCourses)
    }
  }

  // applyfilter(){
  //   const searchString = this.search.toLowerCase().trim();
  //   this.courses = this.originalCourseList.filter((data) =>
  //     data.branchName.toLowerCase().includes(searchString) 
      
  //   );
  // }

  
  // applyfilter() {
  //   const searchString = this.search.toLowerCase().trim();

    // if (!searchString) {
    //   this.filteredCourses = this.originalCourseList;
    //   return;
    // }

    // this.filteredCourses = this.courses.filter(course =>
    //   course.name.toLowerCase().includes(searchString)
  //   );
  // }

  
applyfilter() {
  const searchString = this.search.toLowerCase().trim();

  // if (!searchString ) {
  //   this.filteredCourses = this.courses;
  //   return;
  // }

  this.filteredCourses = this.courses.filter(course =>
    course[0].name.toLowerCase().includes(searchString)
  );
}

changeTab1(tabId: string) {
  this.activeTab1 = tabId;
}

filterCourses(category: string) {
  this.selectedCategory = category; // Update selected category

  // Fetch and filter courses based on category
  switch (category) {
      case 'financial':
          this.financialCourses = this.courses.filter(course => course.contentType === 'financial');
         console.log("f",this.financialCourses)
          break;
      case 'business':
          this.businessCourses = this.courses.filter(course => course.contentType === 'business');
          console.log("b",this.financialCourses)
          break;
      case 'marketing':
          this.marketingCourses = this.courses.filter(course => course.contentType === 'marketing');
          console.log("m",this.financialCourses)
          break;
      default:
          break;
  }
}



  
}
