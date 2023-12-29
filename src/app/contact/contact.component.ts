import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {

  contact: Contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    console.log(this.contact);

   
    this.http.post('http://localhost:8080/contacts', this.contact).subscribe(response => {
      console.log('API response:', response);
     
    });

    
    this.contact = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

}

