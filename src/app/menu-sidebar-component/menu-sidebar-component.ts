import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-sidebar-component',
  imports: [CommonModule],
  templateUrl: './menu-sidebar-component.html',
  styleUrl: './menu-sidebar-component.scss',
})
export class MenuSidebarComponent {
  @Input ({ required: true }) sections!: string[];
  @Input ({ required: true }) currentSection!: string;
  @Output() sectionChange = new EventEmitter<string>();

  onSectionClick(section: string) {
    this.sectionChange.emit(section);
  }

}
