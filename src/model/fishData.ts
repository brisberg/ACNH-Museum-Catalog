export interface Data {
  name: string;
  id: number;
  icon_url: string;
  price: number;
  location: string;
  shadow_size: number;
  // months: number[];  // TODO: allow southern too
}

export function createData(
    name: string, id: number, icon_url: string, price: number, location: string,
    shadow_size: number): Data {
  return {name, id, icon_url, price, location, shadow_size};
}

export interface Column {
  id: 'name'|'id'|'price'|'location'|'shadow_size';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

// Column definitions for FishModels
export const columns: Column[] = [
  {id: 'id', label: 'Id', minWidth: 100},
  {id: 'name', label: 'Name', minWidth: 170},
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'shadow_size',
    label: 'Shadow Size',
    minWidth: 170,
    align: 'right',
  },
];
