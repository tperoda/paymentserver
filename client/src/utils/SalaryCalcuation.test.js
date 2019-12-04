import { salaryCalculation } from "./SalaryCalculation";

describe("salaryCalculation", () => {
  it("Should render Inc salary", () => {
    const incSalary = salaryCalculation("100", "inc");
    expect(incSalary).toEqual("$208,000.00");
  });

  it("Should render Term salary", () => {
    const termSalary = salaryCalculation("100", "term");
    expect(termSalary).toEqual("$190,000.00");
  });

  it(">> Should render 0", () => {
    const zeroSalary = salaryCalculation("0", "");
    expect(zeroSalary).toEqual("$0.00");
  });
})