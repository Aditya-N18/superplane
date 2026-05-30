import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge tailwind classnames with conflict resolution.
 * @param  {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
