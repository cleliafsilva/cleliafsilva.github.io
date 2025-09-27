import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-blog',
    imports: [CarouselModule, RouterLink],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})
export class BlogComponent {

    // Owl Carousel
    blogSlides: OwlOptions = {
		margin: 30,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			696: {
				items: 2
			},
			936: {
				items: 3
			},
			1116: {
				items: 3
			}
		}
    }

}