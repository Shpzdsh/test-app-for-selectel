export interface MenuItem {
  id: number;
  label: string;
  value: number;
  selected: boolean;
  type: string;
}

export function createMenuItem(
  id: number,
  label: string,
  value: number,
  type: string,
  selected: boolean = false,
): MenuItem {
  return {id, label, value, type, selected};
}
