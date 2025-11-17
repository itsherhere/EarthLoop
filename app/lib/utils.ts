import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// merges className strings and removes duplicates/conflicts
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
