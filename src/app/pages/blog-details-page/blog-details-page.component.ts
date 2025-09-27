import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NabvarComponent } from '../../common/nabvar/nabvar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { RelatedBlogComponent } from './related-blog/related-blog.component';

@Component({
    selector: 'app-blog-details-page',
    imports: [RouterLink, NabvarComponent, PageBannerComponent, RelatedBlogComponent, SubscribeComponent, FooterComponent, BackToTopComponent],
    templateUrl: './blog-details-page.component.html',
    styleUrl: './blog-details-page.component.scss'
})
export class BlogDetailsPageComponent {}