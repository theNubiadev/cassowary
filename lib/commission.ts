/**
 * LoadLink Commission Calculator
 *
 * Commission is charged to the cargo owner on top of the agreed driver amount.
 * The driver always receives the full agreedAmount.
 * LoadLink earns the commission spread.
 *
 * Example:
 *   agreedAmount  = ₦120,000  (what driver gets)
 *   commission    = ₦9,600    (8% — LoadLink revenue)
 *   totalCharged  = ₦129,600  (what cargo owner pays)
 */

export const COMMISSION_RATE = 0.08; // 8%
export const COMMISSION_LABEL = "8%";

export interface PriceBreakdown {
  agreedAmount: number;   // driver payout (naira)
  commission: number;     // LoadLink fee (naira)
  totalCharged: number;   // what cargo owner pays (naira)
  totalKobo: number;      // totalCharged in kobo for Interswitch
}

export function calculatePricing(agreedAmount: number): PriceBreakdown {
  const commission   = Math.round(agreedAmount * COMMISSION_RATE);
  const totalCharged = agreedAmount + commission;
  const totalKobo    = totalCharged * 100; // convert to kobo

  return { agreedAmount, commission, totalCharged, totalKobo };
}