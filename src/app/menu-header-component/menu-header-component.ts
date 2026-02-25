import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-header-component',
  imports: [CommonModule],
  templateUrl: './menu-header-component.html',
  styleUrl: './menu-header-component.scss',
})
export class MenuHeaderComponent {
  @Input ({ required: true }) currentSection!: string;
  @Input ({ required: true }) selectedCount!: number;
  @Input ({ required: true }) totalValue!: number;
}
