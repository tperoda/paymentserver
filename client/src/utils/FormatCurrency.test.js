import { formatCurrency } from "./FormatCurrency";

describe("Testing formatCurrency", () => {
  it("Should reformat digits", () => {
    const formatted = formatCurrency(10);
    expect(formatted).toEqual("$10.00");
  });

  it(">> Should render empty string", () => {
    const emptyString = formatCurrency("");
    expect(emptyString).toEqual("");
  });
});
