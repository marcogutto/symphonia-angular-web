import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-prompts',
    standalone: true,
    imports: [CommonModule],
    templateUrl  : './prompts.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class PromptsComponent {}