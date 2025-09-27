import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-attorneys',
    imports: [NgClass, RouterLink],
    templateUrl: './attorneys.component.html',
    styleUrl: './attorneys.component.scss'
})
export class AttorneysComponent {

    constructor (
        public router: Router
    ) {}

}