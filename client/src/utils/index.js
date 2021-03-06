import {
  getPayRateFromBill,
  getTermRateFromPay,
  getBillRateFromPay,
  getPayRateFromTerm
} from "./PaymentCalculations";
import { salaryCalculation } from "./SalaryCalculation";
import { formatCurrency } from "./FormatCurrency";
import { filterRates } from "./filterRates";
import { useWindowDimensions } from "./useWindowDimensions";
import { setLoginValues } from "./setLoginValues";

export {
  getPayRateFromBill,
  getTermRateFromPay,
  getBillRateFromPay,
  getPayRateFromTerm,
  salaryCalculation,
  formatCurrency,
  filterRates,
  useWindowDimensions,
  setLoginValues
};
