/** Price calculator for the pricing page */
export const initPriceCalculator = (): void => {
  const nightsSelect = document.getElementById(
    "nights-select",
  ) as HTMLSelectElement | null;
  const catsSelect = document.getElementById(
    "cats-select",
  ) as HTMLSelectElement | null;
  const totalPriceEl = document.getElementById("total-price");

  if (!nightsSelect || !catsSelect || !totalPriceEl) return;

  // Base price per cat (1 cat)
  const priceMap: Record<string, number> = {
    "1": 10000,
    "2": 17000,
    "3": 25000,
    "4": 32000,
    "5": 38000,
    "6": 43000,
    "7": 47000,
  };

  const additionalPerNight = 6000;

  const calculate = (): void => {
    const nights = nightsSelect.value;
    const cats = parseInt(catsSelect.value, 10);
    const basePrice = priceMap[nights];

    if (basePrice === undefined || isNaN(cats)) return;

    const nightsNum = parseInt(nights, 10);
    const additionalCats = Math.max(0, cats - 1);
    const total = basePrice + additionalCats * nightsNum * additionalPerNight;

    totalPriceEl.textContent = `¥${total.toLocaleString()}`;
  };

  nightsSelect.addEventListener("change", calculate);
  catsSelect.addEventListener("change", calculate);

  // Run initial calculation
  calculate();
};
