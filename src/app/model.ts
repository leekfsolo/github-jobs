export interface Job {
  name: string;
  role: string;
  image: string;
  location: string;
  isFullTime?: boolean;
  time?: string;
}
