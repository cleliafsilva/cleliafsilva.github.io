import { Component } from '@angular/core';
import { NabvarComponent } from '../../common/nabvar/nabvar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-attorneys-page',
    imports: [RouterLink, NabvarComponent, PageBannerComponent, SubscribeComponent, FooterComponent, BackToTopComponent],
    templateUrl: './attorneys-page.component.html',
    styleUrl: './attorneys-page.component.scss'
})
export class AttorneysPageComponent {}