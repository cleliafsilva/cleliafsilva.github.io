import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-process',
    imports: [NgIf, NgClass],
    templateUrl: './process.component.html',
    styleUrl: './process.component.scss'
})
export class ProcessComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}