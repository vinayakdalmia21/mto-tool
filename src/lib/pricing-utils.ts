export function calculateKaratRates(pure: number) {
  return {
    rate24k: Math.round(pure),
    rate22k: Math.round(pure * (22 / 24)),
    rate18k: Math.round(pure * (18 / 24)),
    rate14k: Math.round(pure * (14 / 24)),
    rate9k: Math.round(pure * (9 / 24)),
  };
}
