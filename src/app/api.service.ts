// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

constructor(private http : HttpClient) {} 

baseUrl = "http://localhost:8080/AcademyBackend"

private loggedIn = false;
Courseid = localStorage.getItem("Couseid");
 
 questionid = localStorage.getItem("questionid");
//  idcorseformodule =localStorage.getItem("idcorseformodule") ;
//  moduleid = localStorage.getItem("moduleId");
 cid = localStorage.getItem("cid") ;
//Working
registerstudent(register: any , stud_img : File){
  const formdata: FormData = new FormData();
      formdata.append('users', JSON.stringify(register));
      formdata.append('stud_img',stud_img);
return this.http.post(`${this.baseUrl}/add_student`, formdata) ;
}

//Working
registerinstructor(register: any , inst_img : File){
  const formdata : FormData = new FormData();
  formdata.append('users' , JSON.stringify(register));
  formdata.append('inst_img' , inst_img)
  return this.http.post(`${this.baseUrl}/add_instructor`, formdata)
}

//Working
login(credential : any){
  // const formdata : FormData = new FormData();
  // formdata.append('formdata' , JSON.stringify(credential));
  return this.http.post(`${this.baseUrl}/flogin`,credential,{withCredentials:true})
} 

coursePurchase(price : any){
  // const formdata : FormData = new FormData();
  // formdata.append('formdata' , JSON.stringify(credential));
  // ${this.Courseid}
  return this.http.post(`${this.baseUrl}/course_purchased/${this.cid}`,price,{withCredentials:true})
} 
//courseid
enrollment(price : any){
  // const formdata : FormData = new FormData();
  // formdata.append('formdata' , JSON.stringify(credential));
  // ${this.Courseid}
  return this.http.post(`${this.baseUrl}/student_enrollment/${this.cid}`,price,{withCredentials:true})
} 
// courseid
setLoggedIn(value: boolean) {
  this.loggedIn = value;
  // You can also store the authentication status in local storage for persistence
  // localStorage.setItem('loggedIn', value ? 'true' : 'false');
}

isLoggedIn() {
  return this.loggedIn;
  // You can also check the local storage for the authentication status
  // return localStorage.getItem('loggedIn') === 'true';
}

//not Working
forgotpassword(forget : any){
   return this.http.post(`${this.baseUrl}/forgot_password`, forget)
}

//Working
contact(contact : any){
  return this.http.post(`${this.baseUrl}/contacts`, contact)
}

//Working just implemented 
getallCourses(){
  // const msg = localStorage.getItem("msg") ;
 return this.http.get(`${this.baseUrl}/get_all_courses`)
}

getcoursebyid(Courseid : any){
  return this.http.get(`${this.baseUrl}/get_course/`+ Courseid)
  
}

getallStudentCourses(){
  // const msg = localStorage.getItem("msg") ;
 return this.http.get(`${this.baseUrl}/get_all_student_courses`,{withCredentials:true})
}
//not Working
getallinstructorCourses(){
  // const msg = localStorage.getItem("msg") ;
 return this.http.get(`${this.baseUrl}/get_all_instructors_courses`,{withCredentials:true})
}

//Working
logout(){

 return this.http.get(`${this.baseUrl}/logout`)
}

// not Working
askquestion(ask : any){

  return this.http.post(`${this.baseUrl}/add_questions/${this.Courseid}`, ask ,{withCredentials:true})
}
//courseid

// not Working    

giveanswer(give : any){
  return this.http.post(`${this.baseUrl}/add_answers/${this.questionid}`, give,{withCredentials:true})

}
// question id
// getimage(){
// const  img = 1
//   return this.http.get(`${this.baseUrl}/getImage/${img}`)

// }


// not Working
courserating(courserating : any){

  return this.http.post(`${this.baseUrl}/add_course_ratings/${this.Courseid}`, courserating,{withCredentials:true})
}
// courseid
//

// not Working
instructorrating(instructorrating : any){
  // Courseid : any,
  return this.http.post(`${this.baseUrl}/add_instructor_ratings/${this.Courseid}`, instructorrating,{withCredentials:true})
}
// courseid

// not Working
addcoursereview( review : any){
//  const Courseid = 1;

// const headers = new HttpHeaders().set('Content-Type', 'application/json');
return this.http.post(`${this.baseUrl}/add_course_reviews/${this.Courseid}`,review,{ withCredentials: true })

}

// not Working
addcourse(courses : any,course_img : File){
  const formdata : FormData = new FormData();
  formdata.append('courses' , JSON.stringify(courses));
  formdata.append('course_img' , course_img);
  return this.http.post(`${this.baseUrl}/add_course`, formdata ,{withCredentials:true} )
 }

//  addmodule(courses : any,course_img : File){
//   const formdata : FormData = new FormData();
//   formdata.append('courses' , JSON.stringify(courses));
//   formdata.append('course_img' , course_img);
//   return this.http.post(`${this.baseUrl}/add_course`, formdata ,{withCredentials:true} )
//  }
// not implemented anywhere idcorseformodule
  addmodule(review : any){
    // console.log("ddd" ,this.idcorseformodule)
    const idcorseformodule = localStorage.getItem("idcorseformodule");
    console.log("idcorseformodule", idcorseformodule);
  return this.http.post(`${this.baseUrl}/add_module/${idcorseformodule}`, review ,{withCredentials:true})
  // courseid
   }

   
getmodule(){
  return this.http.get(`${this.baseUrl}/get_modules/${this.Courseid}`,{withCredentials:true})
  
}
// not implemented anywhere
  // addlesson(review : any){
  //    return this.http.post(`${this.baseUrl}/add_lesson/4`, review ,{withCredentials:true})
  // }
  addLesson(lessons: any[]) {
    // ${this.moduleid}
    // console.log("sss" ,this.moduleid)
    const moduleid = localStorage.getItem("moduleId");
    console.log("idcorseformodule", moduleid);
    return this.http.post(`${this.baseUrl}/add_lesson/${moduleid}`, lessons, { withCredentials: true });
  
  }
  //moduleid


  getreviewnameimage(Courseid : any){
    return this.http.get(`${this.baseUrl}/get_reviews_name_image/` + Courseid,{withCredentials:true})
    
  }

  getuserprofile(){
    return this.http.get(`${this.baseUrl}/get_user_profile`,{withCredentials:true})
    
  }

  getminnactivestudent(){
    return this.http.get(`${this.baseUrl}/user_ins_course_mins_active_studs`,{withCredentials:true})
    
  }

  // need to work on this

  getjoiningnwherefrom(){
    return this.http.get(`${this.baseUrl}/user_name_joining_from_details`,{withCredentials:true})
    
  }

  getinstratingpicname(){
    return this.http.get(`${this.baseUrl}/instructor_ratings_pic_name`,{withCredentials:true})
  }
  
  total_courserating_enrollment_earn_bycourse(){
    const courseId = localStorage.getItem("cidforrate");
    console.log("courseIdsssss" , courseId)
    return this.http.get(`${this.baseUrl}/total_courserating_enrollment_earn_bycourse/${courseId}`,{withCredentials:true}) ;
  } 
  // courseid

  ins_revenew_enrollment_ratings(){
    return this.http.get(`${this.baseUrl}/ins_revenew_enrollment_ratings`,{withCredentials:true}) ;
  }

  user_ins_course_mins_active_studs(){
    return this.http.get(`${this.baseUrl}/user_ins_course_mins_active_studs`,{withCredentials:true}) ;

  }

  // user_questions_answers_name_imag/{c_id}

  user_questions_answers_name_imag(){
     return this.http.get(`${this.baseUrl}/user_questions_answers_name_imag/1`,{withCredentials:true}) ;
  }



  




  
}
