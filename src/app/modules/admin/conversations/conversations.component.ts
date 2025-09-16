import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-conversations',
    standalone: true,
    imports: [CommonModule],
    templateUrl  : './conversations.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ConversationsComponent {}