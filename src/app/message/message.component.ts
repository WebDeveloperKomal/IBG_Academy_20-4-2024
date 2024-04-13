import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  courses : any ;
  give = {
    answer : ''
  }
  Courseid = localStorage.getItem("idforque")
  constructor(private router: Router, private http: HttpClient , private apiservice : ApiService) { }
 

  ngOnInit(){ 
    
    
    // console.log("id*****" , this.Courseid)
    this.apiservice.getcoursebyid(this.Courseid).subscribe((resp: any)=>{
      this.courses = resp.data;
  
  console.log("data***", this.courses) ;
  // console.log("data***l", this.courses.level) ;
  
    })
  
  }
  
// ngOnInit(){
//   this.getallinstructorCorses();
// }

  
  getallinstructorCorses(){
    // if(localStorage.getItem("msg") == "User signed-in successfully!."){                                       
      // this.apiservice.getallinstructorCourses().subscribe((resp: any)=>{
      //   console.log('getdata', resp);
      //   this.courses = resp.data ;

      // })
    // }
}
  giveanswer(){
    console.log('added question', this.give);
    this.apiservice.giveanswer(this.give).subscribe((resp)=>{
      console.log('added question', resp);
    })
  }
  queid(id : any){
    localStorage.setItem("questionid", id)
console.log("iiiiiiiiii", id)
  }
}
