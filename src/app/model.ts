import { ReactNode } from "react";

export interface Job {
  name: string;
  role: string;
  image: string;
  locations: Array<string>;
  description: ReactNode;
  time?: string;
}
