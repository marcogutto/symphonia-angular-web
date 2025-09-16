import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-flows',
    standalone: true,
    imports: [CommonModule],
    templateUrl  : './flows.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FlowsComponent {}