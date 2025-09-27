import { Component } from '@angular/core';
import { NabvarComponent } from '../../common/nabvar/nabvar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { AboutComponent } from '../../common/about/about.component';
import { PracticesComponent } from '../../common/practices/practices.component';
import { ExpertiseComponent } from '../../common/expertise/expertise.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';
import { AttorneysComponent } from '../../common/attorneys/attorneys.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { ContactComponent } from '../../common/contact/contact.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-home-demo-three',
    imports: [NabvarComponent, BannerComponent, AboutComponent, PracticesComponent, ExpertiseComponent, CaseStudiesComponent, AttorneysComponent, FunfactsComponent, ContactComponent, BlogComponent, SubscribeComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-three.component.html',
    styleUrl: './home-demo-three.component.scss'
})
export class HomeDemoThreeComponent {}