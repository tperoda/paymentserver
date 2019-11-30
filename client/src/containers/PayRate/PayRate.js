import React, { useState, useContext } from "react";
import ValuesComponent from "components/ValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import { getTermRateFromPay, getBillRateFromPay, filterRates } from "utils";
import "./styles.scss";
import { UserContext } from "store/Store";

const PayRate = () => {
  const [data, setData] = useState({
    rate: "0",
    markup: ""
  });

  const user = useContext(UserContext);
  const markupArray = user.markup;

  const { rate, markup } = data;

  const billRate = getBillRateFromPay(rate, filterRates(markup, markupArray));
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
        percentageRates={markupArray}
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
