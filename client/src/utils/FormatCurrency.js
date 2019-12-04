import numeral from "numeral";

export const formatCurrency = (number) => {
  if (number === "") {
    return "";
  }
  return numeral(number).format("$0,0.00");
}
