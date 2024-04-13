import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';


// interface Contact {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {

  contact  = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient, private apiservice : ApiService) { }

  // onSubmit() {
  //   console.log( "data " ,this.contact);

  //   console.log("credential*****" , this.contact)
  //   this.http.post('http://localhost:8080/contacts', this.contact).subscribe(response => {
  //     console.log('API response:', response);

  //   });


  //   this.contact = {
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   };
  // }

  onSubmit() {
      console.log('data****' ,this.contact);
      this.apiservice.contact(this.contact).subscribe(response => {
        console.log('API response:', response);
        Swal.fire(" Successfull!");
  }
  , error => {
    console.error('API error:', error);
    Swal.fire("Please try again.");

  
    });
  
  
      // this.contact = {
      //   name: '',
      //   email: '',
      //   subject: '',
      //   message: ''
      // };
    }


}

