import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NabvarComponent } from '../../common/nabvar/nabvar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-case-studies-page',
    imports: [RouterLink, NabvarComponent, PageBannerComponent, SubscribeComponent, FooterComponent, BackToTopComponent],
    templateUrl: './case-studies-page.component.html',
    styleUrl: './case-studies-page.component.scss'
})
export class CaseStudiesPageComponent {}