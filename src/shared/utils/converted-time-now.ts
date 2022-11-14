export function convertedTimeNow(date: number): string {
  const time = new Date(date * 1000).toLocaleString("ru-Ru");

  return `${time}`;
}
