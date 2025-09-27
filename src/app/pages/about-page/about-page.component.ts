import { Component } from '@angular/core';
import { NabvarComponent } from '../../common/nabvar/nabvar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { AttorneysComponent } from '../../common/attorneys/attorneys.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-about-page',
    imports: [RouterLink, NgIf, NabvarComponent, PageBannerComponent, AttorneysComponent, SubscribeComponent, FooterComponent, BackToTopComponent],
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

    // Video Popup
	isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}