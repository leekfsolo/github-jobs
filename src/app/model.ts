export interface Job {
  name: string;
  role: string;
  image: string;
  locations: Array<string>;
  description: string;
  time?: number;
  id?: number;
}
