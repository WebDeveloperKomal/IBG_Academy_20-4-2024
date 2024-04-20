import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  dataarr : any ;

  constructor( private apiservice : ApiService ) { }
ngOnInit(){
  this.ins_revenew_enrollment_rating()
}
  ins_revenew_enrollment_rating(){
    // if(localStorage.getItem("msg") == "User signed-in successfully!."){                                       
      this.apiservice.ins_revenew_enrollment_ratings().subscribe((resp: any)=>{
        console.log('dataarr', resp);
        this.dataarr = resp.data ;
        console.log('dataarr', this.dataarr);
      })
    
}
}
