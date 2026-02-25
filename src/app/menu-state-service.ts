import { routes } from './app.routes';
import { computed, Injectable, signal } from '@angular/core';
import { createMenuItem, MenuItem } from './menu-item';
import { MenuState } from './menu-state';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  menuData = [
    createMenuItem(1, "item1", 10, "type1"),
    createMenuItem(2, "item2", 15, "type2"),
    createMenuItem(3, "item3", 20, "type1"),
    createMenuItem(4, "item4", 25, "type2"),
    createMenuItem(5, "item5", 30, "type1"),
    createMenuItem(6, "item6", 35, "type2"),
    createMenuItem(7, "item7", 40, "type1"),
    createMenuItem(8, "item8", 45, "type2"),
    createMenuItem(9, "item9", 50, "type1"),
  ];

  private readonly itemsSignal = signal<MenuItem[]>(this.menuData);

  private readonly currentSectionSignal = signal<string>('type1');

  readonly sections = ['type1', 'type2'];

  readonly filteredItems = computed(() =>
    this.itemsSignal().filter(item => item.type === this.currentSectionSignal())
  );

  readonly selctedCount = computed(() =>
    this.filteredItems().filter(item => item.selected).length
  );

  readonly totalValue = computed(() =>
    this.filteredItems()
      .filter(item => item.selected)
      .reduce((sum, item) => sum + item.value, 0)
  );

  readonly currentSection = this.currentSectionSignal.asReadonly();

  readonly state = computed<MenuState>(() => ({
    items: this.filteredItems(),
    selectedCount: this.selctedCount(),
    totalValue: this.totalValue(),
    currentSection: this.currentSectionSignal()
  }));

  setCurrentSection(section: string) {
    this.currentSectionSignal.set(section);
  }

  toggleItem(id: number) {
    this.itemsSignal.update(items =>
      items.map(item =>
        item.id === id ? {...item, selected: !item.selected } :item
      )
    );
  }

  selectAll() {
    const currentType = this.currentSectionSignal();
    this.itemsSignal.update(items =>
      items.map(item =>
        item.type === currentType ? {... item, selected: true} : item
      )
    );
  }

  deselectAll() {
    const currentType = this.currentSectionSignal();
    this.itemsSignal.update(items =>
      items.map(item =>
        item.type === currentType ? {... item, selected: false} : item
      )
    );
  }
}
