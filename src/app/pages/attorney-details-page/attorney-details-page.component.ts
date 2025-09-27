import { Component } from '@angular/core';
import { NabvarComponent } from '../../common/nabvar/nabvar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { ContactComponent } from './contact/contact.component';
import { RelatedAttorneysComponent } from './related-attorneys/related-attorneys.component';

@Component({
    selector: 'app-attorney-details-page',
    imports: [NabvarComponent, PageBannerComponent, ContactComponent, RelatedAttorneysComponent, SubscribeComponent, FooterComponent, BackToTopComponent],
    templateUrl: './attorney-details-page.component.html',
    styleUrl: './attorney-details-page.component.scss'
})
export class AttorneyDetailsPageComponent {}