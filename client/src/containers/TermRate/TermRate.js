import React, { useState, useContext } from "react";
import { getBillRateFromPay, getPayRateFromTerm, filterRates, useWindowDimensions } from "utils";
import ValuesComponent from "components/ValuesComponent";
import MobileValuesComponent from "components/ValuesComponent/MobileValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import "./styles.scss";
import { UserContext } from "store/Store";

const TermRate = () => {
  const [data, setData] = useState({
    rate: "0",
    markup: "0"
  });

  const user = useContext(UserContext);
  const markupArray = user.markup;

  const { rate, markup } = data;

  const payRate = getPayRateFromTerm(rate);
  const billRate = getBillRateFromPay(payRate, filterRates(markup, markupArray));

  const { width } = useWindowDimensions();

  const renderValuesComponent = () => {
    return (
      <ValuesComponent
        billRate={billRate}
        percentage={markup}
        termRate={rate}
        payRate={payRate}
        type="Markup"
      />
    );
  }

  const renderMobileValuesComponent = () => {
    return (
      <MobileValuesComponent 
        billRate={billRate}
        percentage={markup}
        termRate={rate}
        payRate={payRate}
        type="Markup"
      />
    );
  }
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
      {width < 768 && renderMobileValuesComponent()}
      {width >= 768 && renderValuesComponent()}
      <SalaryComponent payRate={payRate} termRate={rate} />
    </div>
  );
};

export default TermRate;
