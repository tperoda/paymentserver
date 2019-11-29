import React, { useState } from "react";
import { marginRates } from "constants/rates";
import { getPayRateFromBill, getTermRateFromPay } from "utils";
import ValuesComponent from "components/ValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import "./styles.scss";

const BillRate = () => {
  const [data, setData] = useState({
    margin: "0",
    rate: "0"
  });

  const { rate, margin } = data;
  const payRate = getPayRateFromBill(rate, margin);
  const termRate = getTermRateFromPay(payRate);

  return (
    <div className="bill-rate-container">
      <p>
        Use these fields if you have a Bill Rate and Margin,
        and want to know Pay Rate and Term Rates
      </p>
      <FormComponent
        rateType="Bill Rate"
        percentType="Margin"
        setData={setData}
        percentageRates={marginRates}
      />
      <ValuesComponent
        billRate={rate}
        percentage={margin}
        termRate={termRate}
        payRate={payRate}
        type="Margin"
      />
      <SalaryComponent payRate={payRate} termRate={termRate} />
    </div>
  );
};

export default BillRate;
