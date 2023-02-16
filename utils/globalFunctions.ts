export function getYear() {
  const currentYear = new Date().getFullYear();
  const range = (start: any, stop: any, step: number) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const year = range(currentYear, currentYear - 50, -1);
  return year;
}
