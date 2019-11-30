import React, { useState, useContext } from "react";
import { getBillRateFromPay, getPayRateFromTerm, filterRates } from "utils";
import ValuesComponent from "components/ValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import "./styles.scss";
import { UserContext } from "store/Store";

const TermRate = () => {
  const [data, setData] = useState({
    rate: "",
    markup: ""
  });

  const user = useContext(UserContext);
  const markupArray = user.markup;

  const { rate, markup } = data;

  const payRate = getPayRateFromTerm(rate);
  const billRate = getBillRateFromPay(payRate, filterRates(markup, markupArray));

  return (
    <div className="term-rate-container">
      <p>
        Use these fields if you have a Term Rate and Markup,
        and want to know Bill Rate and Pay Rates
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
        termRate={rate}
        payRate={payRate}
        type="Markup"
      />
      <SalaryComponent payRate={payRate} termRate={rate} />
    </div>
  );
};

export default TermRate;
