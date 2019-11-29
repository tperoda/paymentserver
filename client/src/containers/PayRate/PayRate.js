import React, { useState } from "react";
import { markupRates } from "constants/rates";
import ValuesComponent from "components/ValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import { getTermRateFromPay, getBillRateFromPay } from "utils";
import "./styles.scss";

const PayRate = () => {
  const [data, setData] = useState({
    rate: "0",
    markup: "0"
  });

  const { rate, markup } = data;
  const billRate = getBillRateFromPay(rate, markup);
  const termRate = getTermRateFromPay(rate);

  return (
    <div className="pay-rate-container">
      <p>
        Use these fields if you have a Pay Rate and Markup,
        and want to know Bill Rate and Term Rates
      </p>
      <FormComponent
        rateType="Pay Rate"
        percentType="Markup"
        setData={setData}
        percentageRates={markupRates}
      />
      <ValuesComponent
        billRate={billRate}
        percentage={markup}
        termRate={termRate}
        payRate={rate}
        type="Markup"
      />
      <SalaryComponent payRate={rate} termRate={termRate} />
    </div>
  );
};

export default PayRate;
