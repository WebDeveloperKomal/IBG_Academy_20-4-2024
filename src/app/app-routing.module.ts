import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
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
import { ChatbotComponent } from './chatbot/chatbot.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses-details', component: CoursesDetailsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog-grid', component: BlogGridComponent },
  { path: 'blog-left-sidebar', component: BlogLeftSidebarComponent },
  { path: 'blog-right-sidebar', component: BlogRightSidebarComponent },
  { path: 'blog-details-left-sidebar', component: BlogDetailsLeftSidebarComponent },
  { path: 'blog-details-right-sidebar', component: BlogDetailsRightSidebarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'instructor-register', component: InstructorRegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },

  { path: 'all-courses-student-login', component: CoursesDetails7Component },
  { path: 'after-enroll/:id', component: AfterEnrollComponent },
  { path: 'courses-admin', component: CoursesAdminComponent },
  { path: 'student-register', component: StudentRegisterComponent },
  { path: 'financial', component: ReviewsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'traffic-conversion', component: TrafficConversionComponent },
  { path: 'courses-form', component: CoursesFormComponent },
  { path: 'courses-details1/:id', component: CoursesDetails1Component },
  { path: 'courses-details2', component: CoursesDetails2Component },
  { path: 'courses-details3', component: CoursesDetails3Component },
  { path: 'module-form/:id', component: CoursesDetails4Component },
  { path: 'lesson-form/:id', component: CoursesDetails5Component },
  { path: 'instructor-courses-details/:id', component: CoursesDetails6Component},
 
  // { path: 'courses-details8', component: CoursesDetails8Component },
  // { path: 'courses-details9', component: CoursesDetails9Component },
  // { path: 'courses-details10', component: CoursesDetails10Component },
  { path: 'engagement', component: EngagementComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'message/:id', component: MessageComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'logout', component: LogoutComponent },
  // { path: 'chatbot', component: ChatbotComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
