import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile : any
  constructor(private router: Router,  private apiservice : ApiService) { }

  ngOnInit(){
    this.getuserprofile() ;
  }
  getuserprofile(){
    // if(localStorage.getItem("msg") == "User signed-in successfully!."){                                       
      this.apiservice.getuserprofile().subscribe((resp: any)=>{
        console.log('getdata', resp.data);
        this.profile = resp.data ;

      })
    // }
}
  
}
