import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pending-messages',
    standalone: true,
    imports: [CommonModule],
    templateUrl  : './pending-messages.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class PendingMessagesComponent {}