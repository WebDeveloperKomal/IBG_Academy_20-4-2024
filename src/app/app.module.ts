import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogLeftSidebarComponent } from './blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsLeftSidebarComponent } from './blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './blog-details-right-sidebar/blog-details-right-sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AfterEnrollComponent } from './after-enroll/after-enroll.component';
import { CoursesAdminComponent } from './courses-admin/courses-admin.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { BusinessComponent } from './business/business.component';
import { MarketingComponent } from './marketing/marketing.component';
import { StudentsComponent } from './students/students.component';
import { TrafficConversionComponent } from './traffic-conversion/traffic-conversion.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { CoursesDetails1Component } from './courses-details1/courses-details1.component';
import { CoursesDetails2Component } from './courses-details2/courses-details2.component';
import { CoursesDetails3Component } from './courses-details3/courses-details3.component';
import { CoursesDetails4Component } from './courses-details4/courses-details4.component';
import { CoursesDetails5Component } from './courses-details5/courses-details5.component';
import { CoursesDetails6Component } from './courses-details6/courses-details6.component';
import { CoursesDetails7Component } from './courses-details7/courses-details7.component';
import { CoursesDetails8Component } from './courses-details8/courses-details8.component';
import { CoursesDetails9Component } from './courses-details9/courses-details9.component';
import { CoursesDetails10Component } from './courses-details10/courses-details10.component';
import { EngagementComponent } from './engagement/engagement.component';
import { FaqComponent } from './faq/faq.component';
import { MessageComponent } from './message/message.component';
import { OverviewComponent } from './overview/overview.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CarouselModule } from 'primeng/carousel';
// import { AppCarouselComponent } from 'path/to/app-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    // AppCarouselComponent  ,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    AboutUsComponent,
    BlogGridComponent,
    BlogLeftSidebarComponent,
    BlogRightSidebarComponent,
    BlogDetailsLeftSidebarComponent,
    BlogDetailsRightSidebarComponent,
    ContactComponent,
    LoginComponent,
    InstructorRegisterComponent,
    ForgetPasswordComponent,
    AfterEnrollComponent,
    CoursesAdminComponent,
    StudentRegisterComponent,
    BusinessComponent,
    MarketingComponent,
    StudentsComponent,
    TrafficConversionComponent,
    CoursesFormComponent,
    CoursesDetails1Component,
    CoursesDetails2Component,
    CoursesDetails3Component,
    CoursesDetails4Component,
    CoursesDetails5Component,
    CoursesDetails6Component,
    CoursesDetails7Component,
    CoursesDetails8Component,
    CoursesDetails9Component,
    CoursesDetails10Component,
    EngagementComponent,
    FaqComponent,
    MessageComponent,
    OverviewComponent,
    ReviewsComponent,
    ProfileComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    NgbModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
