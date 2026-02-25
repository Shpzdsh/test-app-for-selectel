import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuStateService } from '../menu-state-service';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from '../menu-header-component/menu-header-component';
import { CheckboxItemComponent } from '../checkbox-item-component/checkbox-item-component';
import { MenuSidebarComponent } from "../menu-sidebar-component/menu-sidebar-component";

@Component({
  selector: 'app-menu-component',
  imports: [
    CommonModule,
    RouterLink,
    MenuHeaderComponent,
    CheckboxItemComponent,
    MenuSidebarComponent
],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.scss',
})
export class MenuComponent {
  readonly menuState = inject(MenuStateService);

  onSectionChange(setcion: string) {
    this.menuState.setCurrentSection(setcion);
  }

  onToggleItem(id: number) {
    this.menuState.toggleItem(id);
  }

}
