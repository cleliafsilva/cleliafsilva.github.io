import { Component } from '@angular/core';
import { NabvarComponent } from '../../common/nabvar/nabvar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { AboutComponent } from './about/about.component';
import { PracticesComponent } from '../../common/practices/practices.component';
import { ExpertiseComponent } from '../../common/expertise/expertise.component';
import { AttorneysComponent } from '../../common/attorneys/attorneys.component';
import { ContactComponent } from '../../common/contact/contact.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';

@Component({
    selector: 'app-home-demo-two',
    imports: [NabvarComponent, BannerComponent, FunfactsComponent, AboutComponent, PracticesComponent, ExpertiseComponent, CaseStudiesComponent, AttorneysComponent, ContactComponent, BlogComponent, SubscribeComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-two.component.html',
    styleUrl: './home-demo-two.component.scss'
})
export class HomeDemoTwoComponent {}