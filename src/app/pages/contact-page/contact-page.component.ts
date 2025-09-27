import { Component } from '@angular/core';
import { NabvarComponent } from '../../common/nabvar/nabvar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-contact-page',
    imports: [NabvarComponent, PageBannerComponent, SubscribeComponent, FooterComponent, BackToTopComponent],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {}