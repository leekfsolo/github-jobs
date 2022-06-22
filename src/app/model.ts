import { ReactNode } from "react";

export interface Job {
  name: string;
  role: string;
  image: string;
  location: string;
  description: ReactNode;
  isFullTime?: boolean;
  time?: string;
}
