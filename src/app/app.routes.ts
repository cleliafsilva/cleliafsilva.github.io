import { Routes } from '@angular/router';
import { HomeDemoOneComponent } from './demos/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './demos/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './demos/home-demo-three/home-demo-three.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AttorneysPageComponent } from './pages/attorneys-page/attorneys-page.component';
import { AttorneyDetailsPageComponent } from './pages/attorney-details-page/attorney-details-page.component';
import { CaseStudiesPageComponent } from './pages/case-studies-page/case-studies-page.component';
import { CaseStudyDetailsPageComponent } from './pages/case-study-details-page/case-study-details-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './pages/blog-details-page/blog-details-page.component';
import { PracticesPageComponent } from './pages/practices-page/practices-page.component';
import { PracticeDetailsPageComponent } from './pages/practice-details-page/practice-details-page.component';
import { AppointmentPageComponent } from './pages/appointment-page/appointment-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './pages/terms-conditions-page/terms-conditions-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'attorneys', component: AttorneysPageComponent},
    {path: 'attorney-details', component: AttorneyDetailsPageComponent},
    {path: 'case-studies', component: CaseStudiesPageComponent},
    {path: 'case-study-details', component: CaseStudyDetailsPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'practices', component: PracticesPageComponent},
    {path: 'practice-details', component: PracticeDetailsPageComponent},
    {path: 'appointment', component: AppointmentPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: ErrorPageComponent} // This line will remain down from the whole pages component list
];