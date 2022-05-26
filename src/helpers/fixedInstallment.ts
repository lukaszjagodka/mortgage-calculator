export function fixedInstallment(loanAmount: number, repaymentPeriod: number, interest: string) {
  const q = 1 + ((Number(interest) / 100) / 12);
  const R = (loanAmount * ((Number(q) ** repaymentPeriod) * (Number(q) - 1))) / ((Number(q) ** repaymentPeriod) - 1);
  return (R * repaymentPeriod).toFixed(2);
}
