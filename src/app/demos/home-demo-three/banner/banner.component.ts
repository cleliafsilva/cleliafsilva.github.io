import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-banner',
    imports: [CarouselModule, RouterLink],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

    // Owl Carousel
    bannerSlides: OwlOptions = {
		items: 1,
		margin: 0,
		nav: true,
		dots: true,
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [
			"<i class='icofont-simple-left'></i>",
			"<i class='icofont-simple-right'></i>"
		]
    }

}