import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-knowledge-base',
    standalone: true,
    imports: [CommonModule],
    templateUrl  : './knowledge-base.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KnowledgeBaseComponent {}