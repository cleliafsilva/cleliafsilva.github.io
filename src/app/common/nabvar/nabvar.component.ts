import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-nabvar',
    imports: [RouterLink, RouterLinkActive, NgClass],
    templateUrl: './nabvar.component.html',
    styleUrl: './nabvar.component.scss'
})
export class NabvarComponent {

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    // Navbar Toggle Class
    navbarToggleClassApplied = false;
    navbarToggleClass() {
        this.navbarToggleClassApplied = !this.navbarToggleClassApplied;
    }

}