import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule],
    templateUrl  : './users.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class UsersComponent {}