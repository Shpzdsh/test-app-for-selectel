import { MenuItem } from "./menu-item";

export interface MenuState {
  items: MenuItem[];
  selectedCount: number;
  totalValue: number;
  currentSection: string;
}
