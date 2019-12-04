import { getPayRateFromBill, getTermRateFromPay, getPayRateFromTerm, getBillRateFromPay } from "./PaymentCalculations";
import { filterRates } from "./filterRates";

describe("getPayRateFromBill", () => {
  it(">> Should render value", () => {
    const payFromBill = getPayRateFromBill("100", "20");
    expect(payFromBill).toEqual("80.00");
  });

  it(">> Should render 0", () => {
    const zeroBill = getPayRateFromBill("0", "0");
    expect(zeroBill).toEqual("0");
  });
});

describe("getTermRateFromPay", () => {
  it(">> Should render value", () => {
    const termFromPay = getTermRateFromPay("80");
    expect(termFromPay).toEqual("66.40");
  });
  
  it(">> Should render 0", () => {
    const zeroTerm = getTermRateFromPay("0");
    expect(zeroTerm).toEqual("0");
  });
});

describe("getPayRateFromTerm", () => {
  it(">> Should render value", () => {
    const payFromTerm = getPayRateFromTerm("80");
    expect(payFromTerm).toEqual("96.4");
  });
  
  it(">> Should render 0", () => {
    const zeroPay = getPayRateFromTerm("0");
    expect(zeroPay).toEqual("0");
  });
});

describe("getBillRateFromPay", () => {
  it(">> Should render value", () => {
    const markupArray = [{
      key: "13.5",
      text: "13.5",
      value: "13.5",
      markup: 1.135
    }];
    const markup = filterRates("13.5", markupArray);
    const billFromPay = getBillRateFromPay("80", markup);
    expect(billFromPay).toEqual("90.8");
  });
  
  it(">> Should render 0", () => {
    const zeroBill= getBillRateFromPay("0", "0");
    expect(zeroBill).toEqual("0");
  });
});

