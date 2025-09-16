import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-integrations',
    standalone: true,
    imports: [CommonModule],
    templateUrl  : './integrations.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class IntegrationsComponent {}