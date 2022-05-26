/* eslint-disable no-plusplus */
export async function decreasingInstallment(loanAmount: number, repaymentPeriod: number, interest: string) {
  const rk = loanAmount / repaymentPeriod;
  const arr = [];
  for (let i = 0; i < repaymentPeriod; i++) {
    arr.push(rk + ((loanAmount - i * rk) * (Number(interest) / 100)) / 12);
  }
  const sum = arr.reduce((prev, curr) => prev + curr);
  return [arr, sum];
}
