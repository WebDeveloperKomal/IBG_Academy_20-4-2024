import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Blog {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-blog-details-right-sidebar',
  templateUrl: './blog-details-right-sidebar.component.html',
  styleUrls: ['./blog-details-right-sidebar.component.css']
})

export class BlogDetailsRightSidebarComponent {

  blog: Blog = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private router: Router, private http: HttpClient) { }

  onSubmitBlogRight() {
    console.log("data", this.blog);

    this.http.post('http://localhost:8080/contacts', this.blog).subscribe(response => {
      console.log('API response:', response);

    });
  }
}


