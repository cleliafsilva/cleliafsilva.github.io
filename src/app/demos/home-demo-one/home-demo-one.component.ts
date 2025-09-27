import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { AboutComponent } from '../../common/about/about.component';
import { NabvarComponent } from '../../common/nabvar/nabvar.component';
import { PracticesComponent } from '../../common/practices/practices.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { ExpertiseComponent } from '../../common/expertise/expertise.component';
import { AttorneysComponent } from '../../common/attorneys/attorneys.component';
import { ContactComponent } from '../../common/contact/contact.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';

@Component({
    selector: 'app-home-demo-one',
    imports: [NabvarComponent, BannerComponent, AboutComponent, PracticesComponent, ExpertiseComponent, CaseStudiesComponent, AttorneysComponent, ContactComponent, BlogComponent, SubscribeComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-one.component.html',
    styleUrl: './home-demo-one.component.scss'
})
export class HomeDemoOneComponent {}