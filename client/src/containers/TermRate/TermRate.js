import React, { useState, useContext } from "react";
import { getBillRateFromPay, getPayRateFromTerm, filterRates, useWindowDimensions } from "utils";
import ValuesComponent from "components/ValuesComponent";
import MobileValuesComponent from "components/ValuesComponent/MobileValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import "./styles.scss";
import { UserContext } from "store/Store";
import { markupDefaultRates } from "constants/rates";

const TermRate = () => {
  const [data, setData] = useState({
    rate: "0",
    percent: "0"
  });

  const value = useContext(UserContext);
  const { user } = value;
  const markupArray = user ? user.markup : markupDefaultRates;

  const { rate, percent } = data;

  const payRate = getPayRateFromTerm(rate);
  const billRate = getBillRateFromPay(payRate, filterRates(percent, markupArray));

  const { width } = useWindowDimensions();

  const renderValuesComponent = () => {
    return (
      <ValuesComponent
        billRate={billRate}
        percentage={percent}
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
        percentage={percent}
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
        percentageRates={markupArray || markupDefaultRates}
      />
      {width < 768 && renderMobileValuesComponent()}
      {width >= 768 && renderValuesComponent()}
      <SalaryComponent payRate={payRate} termRate={rate} />
    </div>
  );
};

export default TermRate;
