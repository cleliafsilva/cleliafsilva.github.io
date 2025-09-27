import { Component } from '@angular/core';
import { NabvarComponent } from '../../common/nabvar/nabvar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { ProcessComponent } from './process/process.component';
import { RelatedCaseStudiesComponent } from './related-case-studies/related-case-studies.component';

@Component({
    selector: 'app-case-study-details-page',
    imports: [NabvarComponent, PageBannerComponent, ProcessComponent, RelatedCaseStudiesComponent, SubscribeComponent, FooterComponent, BackToTopComponent],
    templateUrl: './case-study-details-page.component.html',
    styleUrl: './case-study-details-page.component.scss'
})
export class CaseStudyDetailsPageComponent {}