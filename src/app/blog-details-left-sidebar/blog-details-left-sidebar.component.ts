import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Blog {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-blog-details-left-sidebar',
  templateUrl: './blog-details-left-sidebar.component.html',
  styleUrls: ['./blog-details-left-sidebar.component.css']
})

export class BlogDetailsLeftSidebarComponent {

  blog: Blog = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private router: Router, private http: HttpClient) { }

  onSubmitBlogLeft() {
    console.log("data", this.blog);

    this.http.post('http://localhost:8080/contacts', this.blog).subscribe(response => {
      console.log('API response:', response);

    });
  }

}
