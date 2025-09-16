import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule],
    templateUrl  : './settings.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent {}