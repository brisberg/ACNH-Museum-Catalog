export interface Data {
  name: string;
  id: number;
  icon_url: string;
  price: number;
  location: string;
  shadow_size: number;
  months: number[];  // TODO: allow southern too
}

export function createData(
    name: string, id: number, icon_url: string, price: number, location: string,
    shadow_size: number, months: number[]): Data {
  return {name, id, icon_url, price, location, shadow_size, months};
}
