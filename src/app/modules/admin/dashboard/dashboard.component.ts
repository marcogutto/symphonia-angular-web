import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl  : './dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {}