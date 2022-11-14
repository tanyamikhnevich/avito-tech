import { formatDistance } from "date-fns";

export function convertedTimeAgo(date: number): string {
  return `${formatDistance(date * 1000, Date.now(), {
    addSuffix: true,
  })}`;
}
