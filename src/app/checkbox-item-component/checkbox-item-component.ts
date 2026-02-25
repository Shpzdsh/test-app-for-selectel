import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-checkbox-item-component',
  imports: [],
  templateUrl: './checkbox-item-component.html',
  styleUrl: './checkbox-item-component.scss',
})
export class CheckboxItemComponent {
  @Input({ required: true}) item!: MenuItem;
  @Output() toggle = new EventEmitter<number>();

  onToggle() {
    this.toggle.emit(this.item.id);
  }

}
