import React, { useState, useContext } from "react";
import ValuesComponent from "components/ValuesComponent";
import MobileValuesComponent from "components/ValuesComponent/MobileValuesComponent";
import SalaryComponent from "components/SalaryComponent";
import FormComponent from "components/FormComponent";
import { getTermRateFromPay, getBillRateFromPay, filterRates, useWindowDimensions } from "utils";
import "./styles.scss";
import { UserContext } from "store/Store";
import { markupDefaultRates } from "constants/rates";

const PayRate = () => {
  const [data, setData] = useState({
    rate: "0",
    percent: "0"
  });

  const value = useContext(UserContext);
  const { user } = value;
  const markupArray = user ? user.markup : markupDefaultRates;

  const { rate, percent } = data;

  const billRate = getBillRateFromPay(rate, filterRates(percent, markupArray));
  const termRate = getTermRateFromPay(rate);

  const { width } = useWindowDimensions();

  const renderValuesComponent = () => {
    return (
      <ValuesComponent
        billRate={billRate}
        percentage={percent}
        termRate={termRate}
        payRate={rate}
        type="Markup"
      />
    );
  };

  const renderMobileValuesComponent = () => {
    return (
      <MobileValuesComponent 
        billRate={billRate}
        percentage={percent}
        termRate={termRate}
        payRate={rate}
        type="Markup"
      />
    );
  };

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
        percentageRates={markupArray || markupDefaultRates}
      />
      {width < 768 && renderMobileValuesComponent()}
      {width >= 768 && renderValuesComponent()}
      <SalaryComponent payRate={rate} termRate={termRate} />
    </div>
  );
};

export default PayRate;
