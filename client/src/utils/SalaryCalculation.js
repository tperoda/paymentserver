import { formatCurrency } from "./FormatCurrency";

export const salaryCalculation = (rate, type) => {
  let salary;
  switch (type) {
    case "inc":
      salary = (rate * 2080).toFixed(2);
      return formatCurrency(salary);
    case "term":
      salary = (rate * 1900).toFixed(2);
      return formatCurrency(salary);
    default:
      return formatCurrency("0");
  }
};
