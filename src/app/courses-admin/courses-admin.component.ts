import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

interface Coursesadmin {
  tab1: string;
  tab2: string;
  tab3: string;
}

@Component({
  selector: 'app-courses-admin',
  templateUrl: './courses-admin.component.html',
  styleUrls: ['./courses-admin.component.css']
})

export class CoursesAdminComponent {

  activeTab: string = 'tab1';
  showfinancial: boolean = true;
  showbusiness: boolean = false;
  showmarketing: boolean = false;
  courses : any[] =[];
  dataarr : any;
  ratingarray : any[] = [] ;
ngOnInit(){
  this.getallinstructorCorses();
  this.calculateRating() ;
  // this.getern_enroll_rate() ;
  // this.addDataToCoursesAdmin() ;
}
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

  coursesadmin: Coursesadmin = {
    tab1: '',
    tab2: '',
    tab3: '',
  };

  constructor(private router: Router, private http: HttpClient, private apiservice : ApiService) { }

  addDataToCoursesAdmin(): void {
    this.coursesadmin.tab1 = 'Data for Tab 1';
    this.coursesadmin.tab2 = 'Data for Tab 2';
    this.coursesadmin.tab3 = 'Data for Tab 3';

    console.log('coursesadmin:', this.coursesadmin);

    console.log("dataaaaa", this.coursesadmin);

    // Make an HTTP GET request with the built parameters
    this.http.get('http://localhost:8080/get_allinstructorscourses').subscribe(response => {
      console.log('API response:', response);
    });
  }


  getallinstructorCorses(){
      // if(localStorage.getItem("msg") == "User signed-in successfully!."){                                       
        this.apiservice.getallinstructorCourses().subscribe((resp: any)=>{
          console.log('getdata', resp);
          this.courses = resp.data ;
          console.log('getdata))))', resp.data);
        //    for (let course of this.courses) {
        //     this.Saveidfordet1(course.courseId);
        //     console.log("sss", course.courseId) ;
        //     localStorage.setItem("cidforrate", course.courseId);

        // }
          this.ratingarray = resp.data.courseRatings
          console.log('getdatarating', resp.data[0].courseRatings[0].rating);
      //   for(let i = 0 ; i<= resp.data.length ; i ++){

      // }
        })
      // }
  }


  getern_enroll_rate(){
    // if(localStorage.getItem("msg") == "User signed-in successfully!."){                                       
      this.apiservice.total_courserating_enrollment_earn_bycourse().subscribe((resp: any)=>{
        console.log('dataarr', resp);
        this.dataarr = resp.data ;
        console.log('dataarr666', this.dataarr);
        this.ratingarray = resp.data.courseRatings
        console.log('getdatarating', resp.data[0].courseRatings[0].rating);
    //   for(let i = 0 ; i<= resp.data.length ; i ++){

    // }
      })
    // }
}

  // getImage(){
  //   this.apiservice.getimage().subscribe((resp:any)=>{
  //     console.log('getdata', resp);
  //   })
  // }
  
  logout(){
    this.apiservice.logout().subscribe((resp)=>{
      console.log('getdata', resp);
      this.router.navigate(['/logout']);
    })
  }

  saveid(id: any){
    this.router.navigate([`/module-form/` + id])
    console.log("iiiiiiii", id)
    localStorage.setItem("idcorseformodule" , id)
    console.log("lociii", localStorage.getItem("idcorseformodule"))
  }
  Saveidfordet(id: any){
    this.router.navigate([`/instructor-courses-details/` + id])
  }

  Saveidfordet1(id: any){
    this.router.navigate([`/instructor-courses-details/` + id])
  }

  
  calculateRating(): number {
    // Here, you can implement your logic to calculate the rating
    // For example, you might calculate the average rating
    const sum = this.ratingarray.reduce((acc, rating) => acc + rating, 0);
    return sum / this.ratingarray.length;  
    // console.log( "rating" , sum) ;
  }

// Saveid(id:any){
//   this.router.navigate([`/after-enroll/`+id])
//  localStorage.setItem("Couseid",id)
//  console.log("iiiiiiiii",localStorage.setItem("Couseid",id)) ;
// }



}
