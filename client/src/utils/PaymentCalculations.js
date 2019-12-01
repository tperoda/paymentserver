// Takes a Bill Rate & Margin, and multiplies to give INC Pay Rate
const getPayRateFromBill = (billRate, margin) => {
  if (billRate !== "0" && margin !== "0") {
    const billRateNumber = parseFloat(billRate).toFixed(2);
    const marginNumber = parseFloat(margin).toFixed(2);
    const marginMultiplier = (100 - marginNumber) / 100;
    const payRate = (billRateNumber * marginMultiplier).toFixed(2);
    return payRate.toString();
  }

  return "0";
};

// Takes an INC Pay Rate, and multiplies by static percentage to give Term Rate
const getTermRateFromPay = (payRate) => {
  if (payRate !== "0" && payRate !== "0") {
    const termRate = (payRate * 0.83).toFixed(2);
    return termRate.toString();
  }

  return "0";
};

// Takes an INC Pay Rate and markup, multiplies to give Bill Rate
const getBillRateFromPay = (payRate, markup) => {
  if (payRate !== "0" && markup !== "0") {
    const payRateNumber = parseFloat(payRate).toFixed(2);
    const billRate = payRateNumber * markup;
    return billRate.toString();
  }

  return "0";
};

// Takes a Term Rate and multiplies to return an INC Pay Rate
const getPayRateFromTerm = (termRate) => {
  const payRate = parseFloat(termRate).toFixed(2) * 1.205;

  return payRate.toString();
};

module.exports = {
  getPayRateFromBill,
  getTermRateFromPay,
  getBillRateFromPay,
  getPayRateFromTerm
};