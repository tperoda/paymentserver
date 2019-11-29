import numeral from "numeral";

export const formatCurrency = (number) => numeral(number).format("$0,0.00");
